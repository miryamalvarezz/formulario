const form = document.getElementById ("formulario");
const inputs = document.querySelectorAll ('#formulario');

const expresiones = {
    nombre: /^[A-Za-z]-$/,
    correo: /^[A-Za-z0-9.#$]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/,
    contrasena: /^[a-z0-5]{8,}-$/,
    validacion: /^[a-z0-5]{8,}-$/
}

const campos = {
    nombre: false,
    correo: false,
    contrasena: false,
    validacion: false,
}

const validarFormulatio =(e)=> {
   switch (e.target.nombre) {
    case "nombre":
            validarCampo (expresiones.nombre, e.target, 'nombre');
    break;
       
    case "correo":
        validarCampo (expresiones.correo, e.target, 'correo');
    break;

    case "contrasena":
        validarCampo (expresiones.contrasena, e.target,'contrasena');
        validarPassword2();
    break;

    case "validacion":
        validarPassword2 ();
    break;
   }

}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('success-icon.png');
		document.querySelector(`#grupo__${campo} i`).classList.remove('error-icon.png');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('error-icon.png');
		document.querySelector(`#grupo__${campo} i`).classList.remove('success-icon.png');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}}

    const validarCheked = () => {
        const inputPassword1 = document.getElementById('password');
        const inputPassword2 = document.getElementById('cheked');
    
        if(inputPassword1.value !== inputPassword2.value){
            document.getElementById(`grupo__cheked`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__cheked`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__cheked i`).classList.add('error-icon');
            document.querySelector(`#grupo__cheked i`).classList.remove('success-icon');
            document.querySelector(`#grupo__cheked .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos['password'] = false;
        } else {
            document.getElementById(`grupo__cheked`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__cheked`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__cheked i`).classList.remove('error-icon');
            document.querySelector(`#grupo__cheked i`).classList.add('success-icon');
            document.querySelector(`#grupo__cheked .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos['password'] = true;
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });
    
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const terminos = document.getElementById('terminos');
        if(campos.n && campos.correo && campos.contrasena && campos.validacion ){
            formulario.reset();
    
            document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
                icono.classList.remove('formulario__grupo-correcto');
            });
        } 
    });
