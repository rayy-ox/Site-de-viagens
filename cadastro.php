<?php

include("conexoes.php");

$email = $_POST["email"];
$senha = $_POST["senha"];


$sql = "
INSERT INTO usuarios
(email,senha)

VALUES

('$email','$senha')
";

if(mysqli_query($conexoes, $sql)){

    echo "
    <script>
        alert('Cadastro realizado com sucesso!');
        window.location='index.html';
    </script>
    ";

}else{

    echo "Erro: " . mysqli_error($conexoes);

}

?>