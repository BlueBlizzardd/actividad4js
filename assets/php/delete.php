<?php
if (isset($_POST['id']) && !empty($_POST['id'])) {
    $id = $_POST['id'];

    $path = '/json/data.json';
    $data = file_get_contents($path);
    $data = json_decode($data, true);

    if (array_key_exists($id - 1, $data)) {
        unset($data[$id - 1]);
        for ($i = 0; $i < count($data); $i++)
            $data[$i]['id'] = $i + 1;
    }

    $data = json_encode($data, JSON_PRETTY_PRINT);

    $fp = fopen($path, 'w');
    fwrite($fp, $data);
    fclose($fp);

    echo $data;
}
?>