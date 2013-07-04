window.onload = function () {
	// Mouseover restarts GIF animation
	var vImage = document.getElementById('gif');
	bindEvent(vImage, 'mouseover', reload);
	
	// Preload a high resolution image
	vImage = new Image();
	vImage.src = "highres.jpg";
	
	// Mouseover shows the high resolution image
	vImage = document.getElementById('jpg');
	bindEvent(vImage, 'mouseover', highres);
	bindEvent(vImage, 'mouseout', lowres);
};

function bindEvent(aElement, aEvent, aHandler) {
	// Helper method to ensure cross-browser compatibility
  if (aElement.addEventListener){
    aElement.addEventListener(aEvent, aHandler, false); 
  } else if (aElement.attachEvent){
    aElement.attachEvent('on'+aEvent, aHandler);
  }
}

// Restart GIF animation
function reload(aEvent) {
	var vImage = aEvent.target;
	vImage.src = vImage.src;
}

// Show or hide high resolution image
function highres (aEvent) {
	aEvent.target.src = "highres.jpg";
}

function lowres (aEvent) {
	aEvent.target.src = "lowres.jpg";
}