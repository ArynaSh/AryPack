import Ar from './libraries/AryJs.js';
import php from './php/actions.js';
import IOelements from './IO_elements/elements.js';
import MainUI from './IO_elements/main.js';

  function register(){
    var login = document.getElementById("login").value;
    var psw = document.getElementById("psw").value;
    php.register(login, psw);    
  }
  function openRegistration (){
    Ar.showhtml(IOelements.html_registration, "display_window");
    document.getElementById("submit").addEventListener("click", register);
  }

  function openlogin (){
    Ar.showhtml(IOelements.html_logIn, "display_window");
    document.getElementById("submit").addEventListener("click", login);
  }
    
  function login(){
    var login = document.getElementById("login").value;
    var psw = document.getElementById("psw").value;
    php.login(login, psw, goToMainScreen);    
  }

 function goToMainScreen(id,login){
  MainUI.User=login;
  MainUI.id= id;
  Ar.showhtml(MainUI.html_main, "display_window");
  }

(function start(){  
  document.getElementById("registr_btn").addEventListener("click", openRegistration); 
  document.getElementById("login_btn").addEventListener("click", openlogin);
  php.cookie(goToMainScreen);
 
})();




