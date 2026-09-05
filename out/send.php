<?php
header('Content-Type: application/json');

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

// Read JSON body
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
  // Fallback to form-encoded
  $data = $_POST;
}

// Honeypot check — if filled, silently succeed (bot thinks it worked)
if (!empty($data['website'] ?? '')) {
  echo json_encode(['ok' => true, 'message' => 'Thank you. Your enquiry has been sent.']);
  exit;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$subject = trim($data['subject'] ?? 'New enquiry from website');
$message = trim($data['message'] ?? '');

if (empty($email) || empty($message)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Email and message are required']);
  exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Please provide a valid email address']);
  exit;
}

// Basic rate limiting — check referer
$referer = $_SERVER['HTTP_REFERER'] ?? '';
$host = $_SERVER['HTTP_HOST'] ?? '';
if ($referer && $host && stripos($referer, $host) === false) {
  http_response_code(403);
  echo json_encode(['ok' => false, 'error' => 'Request not authorized']);
  exit;
}

$to = 'hello@letstalkagriculture.com';
$emailSubject = "[Website Contact] {$subject}";
$body = "New enquiry from letstalkagriculture.com\n\n";
$body .= "Name: {$name}\n";
$body .= "Email: {$email}\n";
$body .= "Subject: {$subject}\n\n";
$body .= "Message:\n{$message}\n";

// Use the server\'s own domain for From to pass SPF/DKIM checks.
// Reply-To is set to the submitter\'s email so you can reply directly.
$fromEmail = 'noreply@' . $_SERVER['SERVER_NAME'];
$headers = "From: Let's Talk Agriculture <{$fromEmail}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $emailSubject, $body, $headers);

if ($sent) {
  echo json_encode(['ok' => true, 'message' => 'Thank you. Your enquiry has been sent.']);
} else {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Unable to send your enquiry. Please try again.']);
}
