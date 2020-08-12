<?php

$json = <<< JSON_DOC
{
	"foo": "bar"
}
JSON_DOC;

// Response ===================================================================
header("Content-Type: text/javascript; charset=utf-8");
echo($json);
exit();

?>