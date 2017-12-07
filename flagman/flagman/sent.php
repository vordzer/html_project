<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="styles/php.css" />


<? 

// Настройка локали
setlocale(LC_ALL, 'ru_RU.65001', 'rus_RUS.65001', 'Russian_Russia. 65001', 'russian');

// ----------------------------конфигурация-------------------------- // 
 
$adminemail="pavkaban@gmail.com";  // e-mail админа 
/*
$adminemail2="venturist@inbox.ru";  // e-mail админа2
 */
 
$date=date("d.m.y"); // число.месяц.год 
 
$time=date("H:i"); // часы:минуты:секунды 

 
$backurl="index.html";  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
  
 
// Принимаем данные с формы 
 
$name=$_POST['name']; 
 
$tel=$_POST['tel'];

$textarea=$_POST['textarea'];
 
$formid=$_POST['formid']; 

 
  
 /*
// Проверяем валидность e-mail 
 
if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is", 
strtolower($email))) 
 
 { 
 
  echo 
"<center>Вернитесь <a 
href='javascript:history.back(1)'><B>назад</B></a>. Вы 
указали неверные данные!"; 
 
  } 
 
 else 
 
 { */
 
$number = file_get_contents("number.txt");
 
 
$msg = "Номер заявки: ".$number."\n";
$msg .= "Дата и время заявки: ".$date." ".$time."\n";
$msg .= "Имя: ".$name."\n";
$msg .= "Телефон: ".$tel."\n";
$msg .= "Телефон: ".$textarea."\n";

 
  
 
 // Отправляем письмо админу  
$headers = "From: \r\nMIME-Version: 1.0\r\nContent-Type: text/plain; charset=\"utf-8\"";
mail("$adminemail", "(Новая Заявка -$formid)", "$msg ", "$headers"); 

// Сохраняем в базу данных 
 
$f = fopen("orders.txt", "a+"); 
 
fwrite($f,"(Новая Заявка -$formid)"); 
 
fwrite($f,"\n $msg "); 
 
fwrite($f,"\n ---------------"); 
 
fclose($f); 


$fp = fopen("number.txt", "w"); 
 
fwrite($fp, $number + 1); 

 
fclose($fp); 
 
  
 
// Выводим сообщение пользователю 
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 50000); 
//--></script>
	<div>
		<div>
			<p>Благодарим, что обратились к нам!<br /> Скоро наш представитель свяжется с Вами. <br />Ожидайте нашего звонка!</p>  
			<p>Номер вашей заявки: $number</p>
		</div>
	</div>
";
exit;


 
 //} 
 

 
?>