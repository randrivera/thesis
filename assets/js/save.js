let gallery = document.querySelector("gallery");



let imgArray = [];

for(let i=1; i<6; i++){
	imgArray[i]= `./assets/savedFranks/${i}.png`
};


document.getElementById('saveToImage').addEventListener('click', function() {
	let canvas = document.querySelector("canvas");
    let dataURL = canvas.toDataURL("image/png", 1.0);
    imgArray[imgArray.length]=`${dataURL}`
    console.log('worked');
}, false);

