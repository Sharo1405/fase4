<?php

header("Access-Control-Allow-Origin: *"); //{$_SERVER['HTTP_ORIGIN']}");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-with");
header("Content-Type: application/json; charset=utf-8");


include "config.php";

$postjson = json_decode(file_get_contents('php://input'), true);

if($postjson['aksi']=="add_register"){
    $password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "INSERT INTO master_user SET
            full_name = '$postjson[full_name]',
            phone_number = '$postjson[phone_number]',
            username = '$postjson[username]',
            password = '$password'
            ");

    if($query) $result = json_encode(array('success'=>true));
    else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

    echo $result;
    
}else if($postjson['aksi']=="login"){
    $password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "SELECT * FROM master_user WHERE username='$postjson[username]' AND password='$password'");
    $check = mysqli_num_rows($query);

    if($check>0){
        $data = mysqli_fetch_array($query);
        $datauser = array(
            'user_id'=> $data['user_id'],
            'full_name' => $data['full_name'],
            'phone_number' => $data['phone_number'],
            'username' => $data['username'],
            'password' => $data['password']
        );

        if($query) $result = json_encode(array('success'=>true, 'result'=> $datauser));
        else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));
    
    }else{
        $result = json_encode(array('success'=>false, 'msg'=>'Usuario y contrasenia no registrado'));
    }

   
    echo $result;
    
}