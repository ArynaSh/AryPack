var user ={
  login : "Trs",
  id: 222
}
 
let MainUI = {
    set_data: function(a,b){
      let login=a;
      let id=b;
      console.log(user.login)
    },
    html_main : function(a,b){
      return `<div class="main_menu">
      <h1>Hi `+a+" My id: "+b+`</h1>
      <ul class="list-group">
        <li class="list-group-item">fff</li>
        <li class="list-group-item">About</li>
        <a href="#" class="list-group-item list-group-item-action">Skills</a>
      </ul> 
      </div>
      `}  
  };





export default MainUI ;