function validateForm(){
	
	var nombre = document.getElementById('name').value;
	var apellido = document.getElementById('lastname').value;
	var correo = document.getElementById('input-email').value;
	var bici = document.getElementById('bici').selectedIndex;
	var password = document.getElementById('input-password').value;
	var social = document.getElementById('input-social').value;
	var check = document.getElementById('check').value;
	var expresion = /\w+@\w+\.+[a-z]/;//esta es la expresion de validar el correo.

	if (nombre.length == 0 || apellido.length == 0 || correo.length == 0 || password == 0) {
		//alert('Todos los campos son obligatorios');
		return true;
	}else if (/[a-z]/.test(nombre[0]) || /[a-z]/.test(apellido[0])) {
		var spanNombre = document.createElement('span');
        var contenido = document.createTextNode('Es necesario que la primer letra sea mayuscula');
        spanNombre.appendChild(spanNombre);
        document.nombre.appendChild(spanNombre);
		return false;
	}else if (password.length < 6 || password == 'password' || password == '123456' || password == '098754') {
		alert('la contraseña tiene que tener como minimo seis caracteres y no deben ser consecutivos')
	}else if (!expresion.test(correo)) {
		alert('El formato del correo electronico no es valido');
		return false;
	}else if( bici == null || bici == 0 ) {
		alert('Selecciona una bicicleta');
  		return false;
	};
	
};

