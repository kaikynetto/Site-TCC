<?php
header("Content-Type:application/json");
if (isset($_GET['email']) && $_GET['email']!="") {
	include('db.php');
	$email = $_GET['email'];
	$assunto = $_GET['assunto'];
	$imagem = $_GET['imagem'];
	$name = $_GET['name'];

	$result = mysqli_query($con, "INSERT INTO contato (nome, email, mensagem, imagem) values ('$name', '$email', '$assunto', '$imagem');");
	
	echo "request send!";
}else{
	response(NULL, NULL, 400,"Invalid Request");
	}

?>