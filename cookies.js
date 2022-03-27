
function createCookie(cName, cValue) 
{
  document.cookie = cName + "=" + cValue;
}
function accessCookie(cName) 
{
  var name = cName + "=";
  var cookieArray = document.cookie.split(';');

for(var i=0; i<cookieArray.length; i++) 
{
  var temp = cookieArray[i].trim();
  if(temp.indexOf(name)==0)
  return temp.substring(name.length,temp.length);
}
  return ""; 
}

function checkCookie()
  {
    var user = accessCookie("cookie");
    if (user == "") 
    { 
      user = prompt("Please enter your name to save your stats");
      
      if (user!="" && user!=null)
      {
        createCookie("cookie", user);
      }
    } 
    else
    {
      alert("Welcome Back "+ user + "!!")
      var user = localStorage.getItem()
    }
  }
