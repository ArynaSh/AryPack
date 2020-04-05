var php ={
 
    login: function(login,psw,cbFunction){    
        console.log("start");
            var required = new XMLHttpRequest();  

               required.open("POST", "/js/php/login/login.php?login="+login+"&psw="+psw, true);
               required.send();
               required.onreadystatechange = function(){
                   if (this.readyState === 4 && this.status === 200){
                    var x = JSON.parse(this.responseText);
                                        console.log(x);
                        if (x.error == false){
                        cbFunction(x.login, errorMessage);
                        }  
                    //cFunction(this);                         
                   }
                };           
    },
     
    cookie: function(cbFunction){    
        console.log("start");
            var required = new XMLHttpRequest();  

               required.open("POST", "/js/php/login/login.php?cookie", true);
               required.send();
               required.onreadystatechange = function(){
                   if (this.readyState === 4 && this.status === 200){
                    var x = JSON.parse(this.responseText);
                    console.log(x);
                        if (x.error == false){
                        cbFunction(x.login, x.errorMessage);
                        }                  
                    //cFunction(this);                         
                   }
                };           
    },
    register: function(login,psw){
            var required = new XMLHttpRequest();
               required.open("POST", "/js/php/login/register.php?login="+login+"&psw="+psw, true);
               required.send();            
               required.onreadystatechange = function(){
                   if (this.readyState === 4 && this.status === 200){
                    console.log("Calback send r");
                    //document.getElementById("error").innerHTML = this.responseText;
                    //cFunction(this);
                   }           
               };                        
    },



};
export default php;