let myImage = document.querySelector('img');

myImage.onclick = function () {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/atlanta.jpg') {
		myImage.setAttribute ('src', 'images/atlanta-skyline.jpg'); 
	} else {
		myImage.setAttribute ('src', 'images/atlanta.jpg')
	}
}

