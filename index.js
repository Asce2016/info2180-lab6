
window.onload = function() {

document.getElementById("search").addEventListener("click", function(){

  if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
      httpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) { // IE 6 and older
      httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
};



var info = document.getElementById("Definition").value
//console.log(info);

      httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
         if (httpRequest.status == 200) {

               var Result = httpRequest.responseText;
               //console.log(Result);
               document.getElementById("result").innerHTML = Result;
          } else {

            alert("error with request");

          }
        }
      };
      var url = "http://localhost/info2180-lab6/request.php?q=" + info;
      //console.log(url);
        httpRequest.open('GET',url, true);
        httpRequest.send();


});

}
//document.getElementById('All').addEventListener("click",function(){












//})
