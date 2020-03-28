var php ={
 
    login: function(login,psw){    
        console.log("start");
            var required = new XMLHttpRequest();  

               required.open("POST", "/js/php/login/login.php?login="+login+"&psw="+psw, true);
               required.send();
               required.onreadystatechange = function(){
                   if (this.readyState === 4 && this.status === 200){
                    console.log("Calback LOG");
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