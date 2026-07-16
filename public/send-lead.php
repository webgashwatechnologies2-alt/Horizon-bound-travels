<?php
/**
 * PHP Mailer script for Horizon Bound Travels leads.
 * Uses PHPMailer to send emails to info@horizonboundtravels.com and sales@horizonboundtravels.com.
 */

// Allow CORS only for specific trusted origins
$allowedOrigins = [
    'https://horizonboundtravels.com',
    'https://www.horizonboundtravels.com',
    'http://localhost:3000'
];

$httpOrigin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($httpOrigin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: " . $httpOrigin);
} else {
    // Default fallback to main domain
    header("Access-Control-Allow-Origin: https://horizonboundtravels.com");
}

header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Exit early on preflight options requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method Not Allowed. Only POST requests are accepted."]);
    exit;
}

// Read raw JSON body
$inputRaw = file_get_contents("php://input");
$input = json_decode($inputRaw, true);

if (!$input) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Bad Request. Invalid or empty JSON payload."]);
    exit;
}

// Locate PHPMailer relative to root (public folder is at root/public, PHPMailer is at root/PHPMailer)
$phpMailerAutoload = dirname(__DIR__) . '/PHPMailer/PHPMailerAutoload.php';

if (!file_exists($phpMailerAutoload)) {
    // If not found in parent directory, try current folder (just in case)
    $phpMailerAutoload = __DIR__ . '/PHPMailer/PHPMailerAutoload.php';
}

if (!file_exists($phpMailerAutoload)) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "PHPMailer library not found at expected paths."]);
    exit;
}

require_once $phpMailerAutoload;

// Load SMTP password configuration securely from git-ignored file
$mailConfig = __DIR__ . '/mail-config.php';
if (!file_exists($mailConfig)) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Security Configuration file (mail-config.php) is missing."]);
    exit;
}
require_once $mailConfig;

$mail = new PHPMailer;

// Enable SMTP configuration for Hostinger (required to send authenticated emails)
$mail->isSMTP();
$mail->Host = 'smtp.hostinger.com';                  // Hostinger SMTP host
$mail->SMTPAuth = true;
$mail->Username = 'info@horizonboundtravels.com';       // Your Hostinger email
$mail->Password = SMTP_PASSWORD;                     // Loaded from mail-config.php
$mail->SMTPSecure = 'ssl';                           // Hostinger secure protocol
$mail->Port = 465;                                   // Hostinger SSL port

// Set From and Recipient emails
$mail->setFrom('info@horizonboundtravels.com', 'Horizon Bound Travels Website');
$mail->addAddress('info@horizonboundtravels.com');
$mail->addAddress('sales@horizonboundtravels.com');

$mail->isHTML(true);

$formType = isset($input['form_type']) ? htmlspecialchars($input['form_type']) : 'General Inquiry';
$mail->Subject = "New Website Lead: " . $formType;

// Attach file if present (e.g. CV in career form)
if (!empty($input['cv_file_data']) && !empty($input['cv_file_name'])) {
    $fileDataParts = explode(',', $input['cv_file_data']);
    if (count($fileDataParts) > 1) {
        $base64Content = $fileDataParts[1];
        $decodedFile = base64_decode($base64Content);
        if ($decodedFile !== false) {
            $mail->addStringAttachment($decodedFile, $input['cv_file_name']);
        }
    }
}

// Build clean HTML email body from lead inputs
$body = "<h2>New Website Lead Details</h2>";
$body .= "<p><strong>Form Type:</strong> " . $formType . "</p>";
$body .= "<hr/>";
$body .= "<table border='0' cellpadding='5' cellspacing='0' style='width: 100%; border-collapse: collapse;'>";

foreach ($input as $key => $value) {
    // Exclude metadata, base64 file string, and empty values from table body
    if ($key === 'form_type' || $key === 'cv_file_data') {
        continue;
    }

    $cleanKey = ucwords(str_replace(['_', '-'], ' ', $key));
    $cleanVal = is_array($value) ? implode(', ', $value) : $value;
    $cleanVal = nl2br(htmlspecialchars($cleanVal));

    $body .= "<tr style='border-bottom: 1px solid #eeeeee;'>";
    $body .= "<td style='padding: 8px; width: 180px; font-weight: bold; color: #555555;'>" . $cleanKey . ":</td>";
    $body .= "<td style='padding: 8px; color: #333333;'>" . $cleanVal . "</td>";
    $body .= "</tr>";
}

$body .= "</table>";
$body .= "<br/><hr/>";
$body .= "<p style='font-size: 11px; color: #888888;'>This inquiry was submitted from the Horizon Bound Travels website on " . date('Y-m-d H:i:s') . ".</p>";

$mail->Body = $body;

if (!$mail->send()) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Mail sending failed. Error: " . $mail->ErrorInfo]);
} else {
    echo json_encode(["status" => "success", "message" => "Lead email sent successfully."]);
}
?>