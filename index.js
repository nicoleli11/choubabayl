//A
function RandomRed(){
	var red = Math.round(Math.random()*255)
	return "rgb("+red+", 100, 100)";
}


setInterval(()=>{
	app.style.backgroundColor = "rgb(255,255,255)";
}, 500);
