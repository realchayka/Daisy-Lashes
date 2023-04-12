<?php
if (isset($_POST['recaptcha_response']) && !empty($_POST['recaptcha_response'])) {

	// Build POST request
	$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
	$recaptcha_secret = '6LfidrskAAAAAAN5B8zGTrzgblfbPCFWBa7R-Sbl';
	$recaptcha_response = $_POST['recaptcha_response'];

	// Make and decode POST request
	$recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
	$recaptcha = json_decode($recaptcha);

	// Take action based on the score returned
	if ($recaptcha->score >= 0.5) {

  }else {
    die('Вы не прошли проверку капчи');
  }
}
$tg_bot_token = "6161875363:AAGsxmZF3GEXMHki-n0rIiMMO3ivhsepuYs";

$chat_id = "-847194370";

$text = '';

foreach ($_POST as $key => $val) {
    $text .= $key . ": " . $val . "\n";
}

$text .= "\n" . $_SERVER['REMOTE_ADDR'];
$text .= "\n" . date('d.m.y H:i:s');

$param = [
    "chat_id" => $chat_id,
    "text" => $text
];

$url = "https://api.telegram.org/bot" . $tg_bot_token . "/sendMessage?" . http_build_query($param);

var_dump($text);

file_get_contents($url);

foreach ($_FILES as $file) {

    $url = "https://api.telegram.org/bot" . $tg_bot_token . "/sendDocument";

    move_uploaded_file($file['tmp_name'], $file['name']);

    $document = new \CURLFile($file['name']);

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, ["chat_id" => $chat_id, "document" => $document]);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type:multipart/form-data"]);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

    $out = curl_exec($ch);

    curl_close($ch);

    unlink($file['name']);
}

die('1');
