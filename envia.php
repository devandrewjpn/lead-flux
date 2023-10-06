
    <?php

    $nome = $_POST['nome'];
    $empresa = $_POST['empresa'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $funcionarios = $_POST['funcionarios'];
    $online = $_POST['online'];
    $social = $_POST['social'];

    return $nome;

    $mensagem = "

        <div style='font-family:Arial, Helvetica, sans-serif'>
            <div style='width: 100%;padding: 20px;background-color:#fff;'>
                <img width='250px' s src='https://agenciabrasildigital.com.br/assets/images/resources/logo-1.png' alt=''>
            </div>

            <div style='padding: 20px;width: 100%;'>
                <h3 style='margin-bottom: 10px;color:#f79833;'><strong>Fonte:</strong> Landing page</h3>
                <h3 style='margin-bottom: 10px;color:#f79833;'><strong>Nome:</strong> $nome</h3>
                <h3 style='margin-bottom: 10px;color:#f79833;'><strong>E-mail:</strong> $email</h3>
                <h3 style='margin-bottom: 10px;color:#f79833;'><strong>Telefone:</strong> $telefone</h3>
                <h3 style='margin-bottom: 10px;color:#f79833;'><strong>Empresa:</strong> $empresa</h3>
                <h3 style='margin-bottom: 10px;color:#f79833;'><strong>Funcionários:</strong> $funcionarios</h3>
                <h3 style='margin-bottom: 10px;color:#f79833;'><strong>Anunciou online:</strong> $online</h3>
                <h3 style='margin-bottom: 10px;color:#f79833;'><strong>Possui media social:</strong> $social</h3>
            </div>
        </div>";



    $para = 'yuutoandrew.jpn@gmail.com';


    $headers = "MIME-Version: 1.1\r\n";

    $headers .= "Content-type: text/html; charset=iso-8859-1\n";

    $headers .= "From: $email \r\n"; // remetente

    $headers .= "Return-Path: $email\r\n"; // return-path

    $envio = mail($para, 'LEAD RECEBIDO VIA LANDING PAGE', $mensagem, $headers);

    if ($envio)
        echo "window.location.href = 'https://agenciabrasildigital.com.br/lp/thankyou.html';</script>";
    else
        echo "<script>alert('Erro ao enviar mensagem, fale em nosso whatsapp!'); window.location.href = 'https://api.whatsapp.com/send/?phone=553183323001';</script>";

    ?>

