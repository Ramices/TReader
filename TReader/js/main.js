

/* global window, document, tizen, console*/

/**
 * Main application module.
 * Handles application life cycle.
 *
 * @module main
 * @namespace main
 */


var usuarios = [];
var screen = 1;

function searchElement(login, senha)
{	
	
	for(var i = 0; i < usuarios.length; ++i)
	{
			
		if(usuarios[i].nome == login && usuarios[i].senha == senha)
			return true;
	
	}
	return false;
}

function cadastro()
{
	var login = document.getElementById("nomeCadastro").value; 
	var senhaCadastro =  document.getElementById("senhaCadastro").value;
	var senha2 =  document.getElementById("senhaCadastro2").value;
	
	if(searchElement(login, senhaCadastro))
	{	
		alert("Usuario já existe");
	}
	else {
		
		if(senhaCadastro == senha2)
		{
			var usuario = {nome: login, senha: senhaCadastro};
			usuarios.push(usuario);
			
			alert("Usuario cadastrado com sucesso");
			document.getElementById("nomeCadastro").value = "";
			document.getElementById("senhaCadastro").value = "";
			document.getElementById("senhaCadastro2").value = "";
			
			
		}
		else
			{
			alert("As senhas são diferentes");
			}
		
		
		
	}
	
}


function login()
{
	
	var login = document.getElementById("nome").value; 
	var senha =  document.getElementById("senha").value
	
	
	if(searchElement(login, senha))
		javascript:location.href="acervo.html";
	
	else {
		alert("Usuario ou senha incorretos");
	}
	
	
}


function registerKeys()
{
	tizen.tvinputdevice.registerKey('ColorF0Red');
	tizen.tvinputdevice.registerKey('ColorF1Green');
	tizen.tvinputdevice.registerKey('ColorF2Yellow');
	tizen.tvinputdevice.registerKey('ColorF3Blue');
}


// make sure that "app" namespace is created
window.onload = function () {
	
	registerKeys();
	
	document.addEventListener('keydown', function(e)
	{
		
		if(e.keyCode === 403)
		{
			document.getElementById("tela").innerHTML = "<input id = 'nomeCadastro' type='text' placeholder ='Nome' style = 'font-size:50px; padding: 30px 20px; line-height: 38px; float: left; width: 40%;  margin-left: 10%; margin-top: 5%; backgroud: rgb(226, 236, 239) ;'>  <input id = 'senhaCadastro' type='password' placeholder ='Senha' style = 'font-size:50px; padding: 30px 20px; line-height: 38px; float: left; width: 40%;  margin-left: 10%; margin-top: 5%; backgroud: rgb(226, 236, 239) ;'>  <input id = 'senhaCadastro2' type='password' placeholder ='Digite a senha novamente' style = 'font-size:50px; padding: 30px 20px; line-height: 38px; float: left; width: 40%;  margin-left: 10%; margin-top: 5%; backgroud: rgb(226, 236, 239) ;'>   <input type='button' value ='Cadastro' style = 'font-size:50px; padding: 30px 20px; line-height: 38px; float: left; width: 40%;  margin-left: 10%; margin-top: 5%; backgroud: rgb(226, 236, 239);' onClick='cadastro()' > "
			document.getElementById("cadastro").style = "background: rgb(171, 201, 208)";
			document.getElementById("perfil").style = "background: rgb(226, 236, 239)";
			screen = 2;
		}
		else
		if(e.keyCode === 405)
		{
			document.getElementById("cadastro").style = "background: rgb(226, 236, 239)";
			document.getElementById("perfil").style = "background: rgb(171, 201, 208)";
			document.getElementById("tela").innerHTML = "<input id ='nome' type='text' placeholder ='Nome' style = 'font-size:50px; padding: 30px 20px; line-height: 38px; float: left; width: 40%;  margin-left: 10%; margin-top: 5%; backgroud: rgb(226, 236, 239) ;'> <input id='senha' type='password' placeholder ='Senha' style = 'font-size:50px; padding: 30px 20px; line-height: 38px; float: left; width: 40%;  margin-left: 10%; margin-top: 5%; backgroud: rgb(226, 236, 239) ;'> <input type='button' value = 'Login' style = 'font-size:50px; float: left; width: 40%; height:20%;  margin-left: 10%; margin-top: 5%; backgroud: rgb(226, 236, 239) ;' onClick='login()'  >";
			screen = 1;
		}
		else
		if(e.keyCode === 13)
		{
			if(screen == 1)
			{
				login();
				
			}
			else
			{
				
			}
			
			
		}		
			
			

	});
}

