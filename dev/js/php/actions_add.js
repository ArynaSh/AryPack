var php ={
 
    add_product: function(name, dis,cbFunction){    
        console.log("start");
            var required = new XMLHttpRequest();  

               required.open("POST", "/js/php/add/add_product.php?name="+name+"&discription="+dis, true);
               required.send();
               required.onreadystatechange = function(){
                   if (this.readyState === 4 && this.status === 200){
                    var x = JSON.parse(this.responseText);
                            console.log(x);
                        if (x.error == false){
                            console.log("x.errorMessage");
                        //cbFunction(x.login, x.errorMessage);
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
    add_shop: function(name,location,comments){
            var required = new XMLHttpRequest();
               required.open
               ("POST", "/js/php/login/register.php?name="+name+"&location="+location+"&comments="+comments, true);
               required.send();            
               required.onreadystatechange = function(){
                   if (this.readyState === 4 && this.status === 200){
                    console.log(this.responseText);
                    //document.getElementById("error").innerHTML = this.responseText;
                    //cFunction(this);
                   }           
               };                        
    },



};
export default php;