const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

document.body.appendChild(canvas);


//* Değişkenler ve diziler
var hexa = ["0", "1", "2", "3", "4", "5", "6", "7",
"8", "9", "A", "B", "C", "D", "E", "F"];

var matrix = [];
var fontSize = 16;
var sayac = 0;


//* Canvas tasarım alanı
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "black";



//* Ekleme
for(let i = 0; i<canvas.width/fontSize; i++){
    matrix.push({"y":1, "v":(Math.random()*10)+0.3});
}


//* Çizdirme
function cizdir(){
    for(let i = 0; i<matrix.length; i++){
        ctx.fillStyle = "#0f0";
        ctx.font = fontSize+"px monospace";
        ctx.fillText(hexa[Math.floor(Math.random()*16)], i*fontSize, matrix[i].y);
        matrix[i].y += (matrix[i].v)+16;
        if(matrix[i].y>=canvas.height){
            matrix[i].y = 0;
            sayac++;
            if(sayac>=20){
                ctx.clearRect(0,0,canvas.width, canvas.height);
                sayac = 0;
            }
        }
    }
}


//! Ana fonksiyon
function loop(){
    cizdir();
}
setInterval(loop, 1000/10);