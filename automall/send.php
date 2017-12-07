<?php
/* ОГРАНИЧЕНИЕ ПО IP */
$ips_path = $_SERVER['DOCUMENT_ROOT'].'/forms/.ips'; // тут будут хранится ip и их активность
if (file_exists($ips_path))
{
        $ips = unserialize(file_get_contents($ips_path));
}
else
{
        $ips = array();
}
$ip=$_SERVER['REMOTE_ADDR'];
$sitname=$_SERVER['SERVER_NAME'];

if (isset($_POST['sub']) && ($_POST['sub'] == 'Zakaz_zvonka'))
{
    $name = $mes = $subject = $mail = $telephone = $brand = $model = $firstdate = $lastdate = $firstprice = $lastprice = '';
        if (isset($_POST['name']))
        {
            $name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
        }
        if (isset($_POST['mail']))
        {
            $mail = htmlspecialchars($_POST['mail'], ENT_QUOTES, 'UTF-8');
        }
        if (isset($_POST['telephone']))
        {
            $telephone = htmlspecialchars($_POST['telephone'], ENT_QUOTES, 'UTF-8');
        }
        if (isset($_POST['brand']))
        {
            $brand = htmlspecialchars($_POST['brand'], ENT_QUOTES, 'UTF-8');
        }
        if (isset($_POST['model']))
        {
            $model = htmlspecialchars($_POST['model'], ENT_QUOTES, 'UTF-8');
        }
        if (isset($_POST['firstdate']))
        {
            $firstdate = htmlspecialchars($_POST['firstdate'], ENT_QUOTES, 'UTF-8');
        }
        if (isset($_POST['lastdate']))
        {
            $lastdate = htmlspecialchars($_POST['lastdate'], ENT_QUOTES, 'UTF-8');
        }
        if (isset($_POST['firstprice']))
        {
            $firstprice = htmlspecialchars($_POST['firstprice'], ENT_QUOTES, 'UTF-8');
        }
        if (isset($_POST['lastprice']))
        {
            $lastprice = htmlspecialchars($_POST['lastprice'], ENT_QUOTES, 'UTF-8');
        }
        if (isset($_POST['mes']))
        {
            $mes = htmlspecialchars($_POST['mes'], ENT_QUOTES, 'UTF-8');
        }
        if (isset($_POST['subject']))
        {
            $subject = htmlspecialchars($_POST['subject'], ENT_QUOTES, 'UTF-8');
        }

        $email_to = '3seven@tut.by';
        $zakaz_zvonka_admin_subject = "Поступила новая заявка c сайта {$sitname}";

        $message = "Поступила новая заявка c сайта {$sitname}<br />" . "\r\n";
        $message .= "Назначени: {$subject}<br />" . "\r\n";
        $message .= "Имя: {$name}<br />" . "\r\n";
        $message .= "Телефон: {$telephone}<br />" . "\r\n";
        $message .= "e-mail: {$mail}<br />" . "\r\n";
        $message .= "Марка: {$brand}<br />" . "\r\n";
        $message .= "Модель: {$model}<br />" . "\r\n";
        $message .= "Начальная дата: {$firstdate}<br />" . "\r\n";
        $message .= "Конечная дата: {$lastdate}<br />" . "\r\n";
        $message .= "Минимальная стоимость: {$firstprice}<br />" . "\r\n";
        $message .= "Максимальная стоимость: {$lastprice}<br />" . "\r\n";
        $message .= "Текст отзыва: {$mes}<br />" . "\r\n";
        $message .= "IP: {$ip}<br />" . "\r\n";
        $headers = 'Content-type: text/html; charset=utf-8' . "\r\n";
if (mail($email_to, $zakaz_zvonka_admin_subject, $message, $headers))
{
        echo 'sent';
    }else{
        echo 'failed';
    }
}
?>