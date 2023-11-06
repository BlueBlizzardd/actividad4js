<?php
$post = file_get_contents('php://input');
$post = json_decode($post, true);

$path = 'assets/json/data.json';
$data = file_get_contents($path);
$data = json_decode($data, true);

if (array_key_exists($post['id'] - 1, $data)) {
    $data[$post['id'] - 1] = array(
        "id" => $post["id"],
        "activity" => $post["activity"],
        "startDate" => $post["startDate"],
        "endDate" => $post["endDate"],
        "totalDays" => $post["totalDays"],
        "initiator" => $post["initiator"]
    );
}

$data = json_encode($data, JSON_PRETTY_PRINT);

$fp = fopen($path, 'w');
fwrite($fp, $data);
fclose($fp);

echo $data;

?>