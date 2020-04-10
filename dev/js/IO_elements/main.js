const MainUI ={
    User: 'login',
    id:'0',    
    html_main: `
    <div class="main_menu">
    <h1>Hi $`+MainUI.User+` $</h1>
    <ul class="list-group">
      <li class="list-group-item">`+id+`</li>
      <li class="list-group-item">Second item</li>
      <a href="#" class="list-group-item list-group-item-action">Skills</a>
    </ul> 
  </div>
`,


};

export default MainUI;