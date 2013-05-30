/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var xmlHttp;

function addFeed() {
    var name = document.getElementById("s").value;
    if (name.length == 0) {
        document.getElementById("feedTip").innerHTML = "Invalid Feed";
        return;
    }
    xmlHttp = GetXmlHttpObject();
    if (xmlHttp == null) {
        alert("Your browser doesn't support AJAX!");
        return;
    }
    name = EncodeUtf8(name);
    var link = "addFeed.php";
    link += "?link=";
    link += name;
    link += "&sid=";
    link += Math.random();
    alert(link);
    xmlHttp.onreadystatechange = stateChanged;
    xmlHttp.open("GET", link, true);
    xmlHttp.send(null);
}

function EncodeUtf8(s1)
{
      var s = escape(s1);
      var sa = s.split("%");
      var retV ="";
      if(sa[0] != "")
      {
         retV = sa[0];
      }
      for(var i = 1; i < sa.length; i ++)
      {
           if(sa[i].substring(0,1) == "u")
           {
               retV += Hex2Utf8(Str2Hex(sa[i].substring(1,5)));
              
           }
           else retV += "%" + sa[i];
      }
     
      return retV;
}


function stateChanged() {
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete")
    {
        document.getElementById("feed").innerHTML = xmlHttp.responseText;
    }
}

function GetXmlHttpObject() {
    var xmlHttp = null;
    try
    {
        // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    }
    catch (e)
    {
        // Internet Explorer
        try
        {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e)
        {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttp;
}

