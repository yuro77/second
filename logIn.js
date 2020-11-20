var username = document.getElementById("username").value;
var account = document.getElementById("account").value;
var password = document.getElementById("password").value;
var postData = {
  username: username,
  password: password,
};

var postRequest,getRequest;
if (window.XMLHttpRequest)
  {
    postRequest = new XMLHttpRequest();
   getRequest = new XMLHttpRequest(); 
  }
else 
  {
   postRequest = new ActiveXObject("Microsoft.XMLHTTP");
   getRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }
var BaseURL = 'http://thungghuan.xyz:3000';
function get(){
  getRequest.open("GET",BaseURL,'/profilepicture');
  getRequest.send();
  getRequest.onreadystatechange() = function(){
    if (getRequest.readyState== 4 && postRequest.status == 200){
      console.log(getRequest.responseText);
      

    }
    else {
      alert(postRequest.responseText)
    }
  }
}
function post()
  {
    postRequest.open("POST",BaseURL,'/login');
    postRequest.send(JSON.stringify(postData));
    postRequest.onreadystatechange() = function(){
      if (postRequest.readyState== 4 && postRequest.status == 200){
        console.log(postRequest.responseText)
      }
      else {
        alert(postRequest.responseText)
      }
    }
    get()
  }
