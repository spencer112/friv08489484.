// JavaScript Document

function ajaxFunction() {
	var ajax;
	try {
		ajax = new XMLHttpRequest();
	} catch (e) {
		try {
			ajax = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				ajax = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {alert("Your browser does not support AJAX!");
				return false;
			}
		}
	}
	return ajax;
}

function showRateBox(show) {
	var tag = document.getElementById("ratingBox");
	if (show == 1) {
		tag.style.display = "block";
	} else {
		tag.style.display = "none";
	}
}

function rateGame(gameid,vote) {
	ajax = ajaxFunction();
	ajax.onreadystatechange = function () { rateGame_stateChanged(); };
	var url = baseDir+ "inc/ajax-rating.php";
	url = url+ "?id=" +gameid;
	url = url+ "&vote=" +vote;
	ajax.open("GET",url,true);
	ajax.send(null);
}
function rateGame_stateChanged() { 
	var rateBox = document.getElementById('rateBox');
	if (ajax.readyState == 4) {
		rateBox.innerHTML = ajax.responseText;
	}
}

if( window!= window.top ) {
top.location.href = location.href;
}

function addBookmark(url,name)
{
  if(window.sidebar && window.sidebar.addPanel) {
        window.sidebar.addPanel(name,url,'');
  } else if(window.opera && window.print) { 
          var e=document.createElement('a');
          e.setAttribute('href',url);
          e.setAttribute('title',name);
          e.setAttribute('rel','sidebar');
          e.click();
  } else if(window.external) {
          try {
              window.external.AddFavorite(url,name);
          }
          catch(e){}
  }
  else
          alert("To add our website to your bookmarks use CTRL+D on Windows and Linux and Command+D on the Mac.");
}
