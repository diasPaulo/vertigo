let isShow = false;

function toggleShowHidden() {
  if (isShow) {
    isShow = false;
    img_showHidden.src = './assets/eye-off.svg';
    input_password.type = 'password';
  } else {
    isShow = true;
    img_showHidden.src = './assets/eye.svg';
    input_password.type = 'text';
  }

  input_password.focus();
}

let input_password = document.querySelector('input[name=password]');
let btn_showHidden = document.querySelector('#showHidden');
let img_showHidden = document.querySelector('#showHidden img');

btn_showHidden.addEventListener('click', toggleShowHidden);