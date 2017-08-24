$(function() {
    $('#file-input').change(function(e) {
    var file = e.target.files[0],
        imageType = /image.*/;

    if (!file.type.match(imageType))
        return;

    var reader = new FileReader();
    reader.onload = fileOnload;
    reader.readAsDataURL(file);
});

    function fileOnload(e) {
        var $img = $('<img>', { src: e.target.result });
        var canvas = $('#canvas')[0];
        var ctx = canvas.getContext('2d');

        $img.load(function() {
            ctx.drawImage(this, 0, 0,360,240);
        });
    }
});

var ctx =document.getElementById("canvas").getContext("2d");
var image1 = new Image();
var imageData;
image1.src= "imagen.jpg";
var ctxFiltro =document.getElementById("canvasFiltro").getContext("2d");
var imageFiltro = new Image();
var imageDataFiltro;
imageFiltro.src= "imagen.jpg";


image1.onload= function () {
    myDrawImage(this);
}

imageFiltro.onload= function () {
    ctx.drawImage(this, 0, 0 ,360,240);
	// myDrawImageMethodNegativo(this);
	// myDrawImageMethodByN(this);
	// myDrawImageMethodSepia(this);
	// myDrawImageMethodBinarizacion(this,100);

}

function myDrawImage(image1) {
        ctx.drawImage(image1,0,0,360,240);
}

function myDrawImageMethodNegativo(imageFiltro) {
    ctxFiltro.drawImage(imageFiltro, 0,0,360,240);
    imageDataFiltro = ctx.getImageData(0,0,360,240);
    for (x=0; x<360;x++){
        for (var y = 0; y < 240; y++) {
            var red = getRed(imageDataFiltro, x, y);
            var green = getGreen(imageDataFiltro, x, y);
            var blue = getBlue(imageDataFiltro, x, y);
            setPixel(imageDataFiltro, x, y, 255 - red , 255 - green, 255 - blue ,255);
        }
    }
    ctxFiltro.putImageData(imageDataFiltro, 0 ,0);
}

function myDrawImageMethodByN(imageFiltro) {
    imageDataFiltro = ctx.getImageData(0,0,360,240);
    for (x=0; x<360;x++){
        for (var y = 0; y < 240; y++) {
            var red = getRed(imageDataFiltro, x, y);
            var green = getGreen(imageDataFiltro, x, y);
            var blue = getBlue(imageDataFiltro, x, y);
            var byn = (red + green + blue)/3;
            setPixel(imageDataFiltro, x, y, byn , byn, byn ,255);
        }
    }
    ctxFiltro.putImageData(imageDataFiltro, 0 ,0);
}

function myDrawImageMethodSepia(imageFiltro) {
    imageDataFiltro = ctx.getImageData(0,0,360,240);
    for (x=0; x<360;x++){
        for (var y = 0; y < 240; y++) {
            var red = getRed(imageDataFiltro, x, y);
            var green = getGreen(imageDataFiltro, x, y);
            var blue = getBlue(imageDataFiltro, x, y);
            var sepiaR = Math.floor(0.393*red + 0.769*green+ 0.189*blue);
            var sepiaG = Math.floor(0.349*red + 0.686*green + 0.168*blue);
            var sepiaB = Math.floor(0.272*red + 0.534*green + 0.131*blue);
            setPixel(imageDataFiltro, x, y, sepiaR , sepiaG, sepiaB ,255);
      }
    }
    ctxFiltro.putImageData(imageDataFiltro, 0 ,0);
}

function myDrawImageMethodBinarizacion(imageFiltro,umbral) {
    imageDataFiltro = ctx.getImageData(0,0,360,240);
    for (x=0; x<360;x++){
        for (var y = 0; y < 240; y++) {
            var red = getRed(imageDataFiltro, x, y);
            var green = getGreen(imageDataFiltro, x, y);
            var blue = getBlue(imageDataFiltro, x, y);
            var promedio = (red + green + blue)/3;
            var resultado;
                if (promedio<umbral)
                    resultado=0;
                else
                    resultado=255;
            setPixel(imageDataFiltro, x, y, resultado , resultado, resultado ,255);
        }
    }
    ctxFiltro.putImageData(imageDataFiltro, 0 ,0);
}

function getRed(imageData, x, y) {
    var index = (x+y *imageData.width)*4;
    return imageData.data[index+0];
}

function getGreen(imageData, x, y) {
    var index = (x+y *imageData.width)*4;
    return imageData.data[index+1];
}

function getBlue(imageData, x, y) {
    var index = (x+y *imageData.width)*4;
    return imageData.data[index+2];
}

function setPixel(imageData, x, y, r, g, b, a) {
        index = (x+y * imageData.width)*4;
        imageData.data[index+0] = r;
        imageData.data[index+1] = g;
        imageData.data[index+2] = b;
        imageData.data[index+3] = a;
}

var button = document.getElementById('btn-download');
button.addEventListener('click', function (e) {
    var dataURL = canvasFiltro.toDataURL('image/png');
    button.href = dataURL;
});
