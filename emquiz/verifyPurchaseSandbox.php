<?php

function logMessage($logMessage) {
	$now = date("Y-m-d H:i:s P");
	error_log("$now $logMessage\n", 3, "/var/log/php/verifyPurchase.log");
}


function logError($logMessage) {
	$now = date("Y-m-d H:i:s P");
	error_log("$now $logMessage\n", 3, "/var/log/php/verifyPurchaseError.log");
}


header('Content-Type: application/json');

date_default_timezone_set('Europe/Berlin');


$verifyURL = "https://sandbox.itunes.apple.com/verifyReceipt";
$verifyStatus = -1;

$receiptData = file_get_contents('php://input');

$postParams = array();
$postParams['http'] = array();
$postParams['http']['method'] = 'POST';
$postParams['http']['content'] = $receiptData;

$context = stream_context_create($postParams);
$responeString = file_get_contents($verifyURL, false, $context);

$responseObj = json_decode($responeString);

if (isset($responseObj)) {
	if (isset($responseObj->status)) {
		// TODO: checken ob product id ok ist
		$verifyStatus = intval($responseObj->status);
	}
	
	$link = mysql_connect('localhost', 'inapp', 'inapp_password');
	if ($link) {
		mysql_select_db('inapp', $link);
		
		if (isset($responseObj->receipt)) {
			// retrieve data from response receipt
			$receipt = $responseObj->receipt;
			$purchaseDate = floatval($receipt->purchase_date_ms) / 1000.0;
			$originalPurchaseDate = floatval($receipt->original_purchase_date_ms) / 1000.0;
			$transactionID = mysql_real_escape_string($receipt->transaction_id);
			$originalTransactionID = mysql_real_escape_string($receipt->original_transaction_id);
			$productID = mysql_real_escape_string($receipt->product_id);
			$response = mysql_real_escape_string(json_encode($responseObj));

			$sql = "INSERT INTO purchases (purchaseDate, originalPurchaseDate, transactionID, originalTransactionID, productID, status, response) VALUES (FROM_UNIXTIME($purchaseDate), FROM_UNIXTIME($originalPurchaseDate), $transactionID, $originalTransactionID, '$productID', $verifyStatus, '$response')";
			mysql_query($sql, $link);
			
			logMessage("Response OK: $response");
		}
		else if (isset($responseObj->exception)) {
			$response = mysql_real_escape_string(json_encode($responseObj));
			$sql = "INSERT INTO purchases (status, response) VALUES ($verifyStatus, '$response')";
			mysql_query($sql, $link);
			
			logMessage("Response not OK: $response received post body: $receiptData");
		}
	}
	else {
		// log db error and receipt
		logError("Could not connect to database. Response: $responeString");
	}
}
else {
	// log error with receipt
	logError("Received invalid response: $responeString");
}

if ($verifyStatus == 0) {
	echo '{"status":0}'; 
} else {
	echo '{"status":-1}';
}
?>