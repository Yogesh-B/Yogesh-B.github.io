/*Name this external file gallery.js*/
function upDate(previewPic){
 
    var destination=document.getElementById("image");
    destination.style.backgroundColor="#283883";
    destination.style.backgroundImage="url("+previewPic.src+")";
    destination.innerHTML=previewPic.alt;
    
  
	}

	function unDo(){
     
		var destination=document.getElementById("image");
		destination.style.backgroundColor="#8e68ff";
		destination.style.backgroundImage="url()"
		destination.innerHTML="Hover over an image below to display here.";
		
	}