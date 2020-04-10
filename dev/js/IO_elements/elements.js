var IOelements ={
 
    html_registration: `
<h1>Register</h1>
<div class="form-group">
  <label for="login">Login:</label>
  <input type="text" class="form-control" id="login">
</div>
<div class="form-group">
  <label for="pwd">Pas:</label>
  <input type="password" class="form-control" id="psw">
</div>
<div class="form-group form-check">
</div>
<button id="submit" type="submit" class="btn btn-primary">Register</button>
`,
    html_logIn: `<h1>Log In</h1>
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
`


};
export default IOelements;