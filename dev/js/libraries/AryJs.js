const AryLyb = {
    showhtml: function(htmlObject, id) {
        let object= document.getElementById(id);
        object.innerHTML = htmlObject;
      },
      
      arrayToHtml: function(arr) {
        var i=0;
        let htmlCode="";
        (function (){ while (arr[i]){
            htmlCode+=arr[i];
            i++
            }})();
     return htmlCode;
      }
}
export default AryLyb;