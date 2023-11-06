<?php
$post = file_get_contents('php://input');
$post = json_decode($post, true);

$path = '/json/data.json';
$data = file_get_contents($path);
$data = json_decode($data, true);

$post = array("id" => count($data) + 1) + $post;

array_push($data, $post);

$data = json_encode($data, JSON_PRETTY_PRINT);

$fp = fopen($path, 'w');
fwrite($fp, $data);
fclose($fp);

echo $data;

?>