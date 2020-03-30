import Ar from './libraries/AryJs.js';
import php from './php/actions.js';

var html_registration =`
<h1>Register</h1>
<div class="form-group">
  <label for="login">Login:</label>
  <input type="text" class="form-control" id="login">
</div>
<div class="form-group">
  <label for="pwd">Password:</label>
  <input type="password" class="form-control" id="psw">
</div>
<div class="form-group form-check">
</div>
<button id="submit" type="submit" class="btn btn-primary">Register</button>
`;

var html_logIn =`<h1>Log In</h1>
<div class="form-group">
  <label for="login">Login:</label>
  <input type="email" class="form-control" id="login">
</div>
<div class="form-group">
  <label for="pwd">Password:</label>
  <input type="password" class="form-control" id="psw">
</div>
<div class="form-group form-check">
</div>
<button id="submit" type="submit" class="btn btn-primary">Log In</button>
`;

  function register(){
    var login = document.getElementById("login").value;
    var psw = document.getElementById("psw").value;
    php.register(login, psw);    
  }
  function openRegistration (){
    Ar.showhtml(html_registration, "display_window");
    document.getElementById("submit").addEventListener("click", register);
  }

  function openlogin (){
    Ar.showhtml(html_logIn, "display_window");
    document.getElementById("submit").addEventListener("click", login);
  }

  
  function login(){
    var login = document.getElementById("login").value;
    var psw = document.getElementById("psw").value;
    php.login(login, psw);    
  }

(function start(){
  document.getElementById("registr_btn").addEventListener("click", openRegistration); 
  document.getElementById("login_btn").addEventListener("click", openlogin);
})();




