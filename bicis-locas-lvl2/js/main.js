function validateForm(){
	
	var nombre = document.getElementById('name').value;
	var apellido = document.getElementById('lastname').value;
	var correo = document.getElementById('input-email').value;
	var bici = document.getElementById('bici').selectedIndex;
	var password = document.getElementById('input-password').value;
	var social = document.getElementById('input-social').value;
	var check = document.getElementById('check').value;
	var expresion = /\w+@\w+\.+[a-z]/;//esta es la expresion de validar el correo.
    var span = document.createElement('span');
    var padre = document.getElementsByClassName('input-box');
    //var boxes = document.getElementsByClassName('input-box');
    
//    for(var i = 0; i < boxes.length; i++){
//        var span = document.createElement('span');
//        boxes[i].appendChild(span);
//    };
    var spans = document.getElementsByTagName('span');
    
    for (var i = 0; i < spans.length; i++){
        spans[i].parentNode.removeChild(spans[i]);
    };

	if (nombre.length == 0) {
		padre[0].appendChild(span);
        span.innerHTML = 'Ingresa tu nombre';
		return false;
	}else if (apellido.length == 0){
        padre[1].appendChild(span);
        span.innerHTML = 'Ingresa tu apellido';
        return false;
    }else if (correo.length == 0){
        padre[2].appendChild(span);
        span.innerHTML = 'Ingresa tu correo electronico';
        return false;
    }else if(password == 0){
        padre[3].appendChild(span);
        span.innerHTML = 'Ingresa la contraseña';
        return false;
    }else if (/[a-z]/.test(nombre[0])) {
	    padre[0].appendChild(span);
        span.innerHTML = 'La primer letra debe ser mayuscula';
		return false;
	}else if(/[a-z]/.test(apellido[0])){
        padre[1].appendChild(span);
        span.innerHTML = 'La primer letra debe ser mayuscula';
        return false;
    }else if (password.length < 6 || password == 'password' || password == '123456' || password == '098754') {
		padre[3].appendChild(span);
        span.innerHTML = 'La contraseña tiene que tener como minimo seis caracteres y no deben ser consecutivos';
        return false;
	}else if (!expresion.test(correo)) {
		padre[2].appendChild(span);
        span.innerHTML = 'La estructura del correo es invalida';
		return false;
	}else if( bici == null || bici == 0 ) {
		padre[4].appendChild(span);
        span.innerHTML = 'Selecciona una opcion';
  		return false;
	};
	
};

