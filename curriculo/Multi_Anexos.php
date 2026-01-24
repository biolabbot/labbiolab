<?php

require "_inc/MultiAnexos.class.php";

if( $_POST && MultiAnexos::is_mail($_POST['email']) ):

	// Instânciamos a classe, sem assunto
	$email = new MultiAnexos();
	$email->setMail('From', $_POST['email'], $_POST['nome']);
	$email->setMail('To', 'rh@laboratoriobiolab.com');

	$email->send();
	
endif;

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Multi-Anexos</title>
<link href="_css/typo.css" rel="stylesheet" type="text/css" />
</head>


<body>
<div id="div">


	<?php

	if( $_POST ):
		echo defined('SEND_RETURN') ?
		'<h2>'.SEND_RETURN.'</h2>' : '<h2>Informe seu nome e um email válido.</h2>' ;
	endif;


	// Exibindo as variáveis postadas após submeter o formulário
	#MultiAnexos::showPOST();

	// Exibindo um preview da mensagem html formatada
	#MultiAnexos::showHTML();

	?>


	<form id="frm" action="<?=basename(__FILE__)?>" method="post" enctype="multipart/form-data">
	<fieldset>
	 
	  <p>
		    <label for="data_nascimento">Nome:</label>
				<input name="nome" id="nome" />
			</p>
            <p>
		    <label for="data_nascimento">Data de Nascimento:</label>
				<input id="data_nascimento" name="data_nascimento" />
	  </p>
            <p>
		    <label for="data_nascimento">Endere&ccedil;o:</label>
				<input id="endereco" name="endereco" />
	  </p>
            <p>
		    <label for="data_nascimento">Bairro:</label>
				<input id="bairro" name="bairro" />
	  </p>
      <p>
		    <label for="data_nascimento">Cidade:</label>
				<input id="cidade" name="cidade" />
	  </p>
      <p>
	    <label for="data_nascimento">Telefone Residencial:</label>
				<input id="telefone" name="telefone" />
	  </p>
      <p>
		    <label for="data_nascimento">Celular:</label>
				<input id="celular" name="celular" />
	  </p>
      
			<p>
				<label for="email">E-Mail:</label>
				<input id="email" name="email" />
			</p>
			<p>
				<label for="graduacao">Gradua&ccedil;&atilde;o:</label>
				<input id="graduacao" name="graduacao" />
	  </p>
			<p>
				<label for="arquivo1">Envie o seu curriculo completo:</label>
				<input type="file" name="arquivo[]" id="arquivo1" size="40" class="file" />
			</p>
			<p>
		    <label for="mensagem">Informa&ccedil;&atilde;o adicional:</label>
				<textarea id="mensagem" name="mensagem" cols="10" rows="10" class="text"></textarea>
			</p>
			<span>
				<input type="submit" value="ENVIAR" class="send" />
			</span>
	  </fieldset>

  </form>


</div>
</body>
</html>