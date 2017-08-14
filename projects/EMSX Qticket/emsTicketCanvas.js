/* *********************************************************************
/* Charlotte Lee october 2012
* This is use to create quick ticket in EMSX<GO>
*
*
***********************************************************************/
//button color light to dark
var greenButton = ["#66EA80","#07AD2A"];
var redButton = ["#F98E88","#DB1F14"];
var whiteButton = ["#FAFAFB","#B3B6C3"];
var greyOutInput = ["#8E8F97"];
var amberInput = ["#FF9E2A"];
var greyHeading = ["#2E2D2B","#2E2D2B"];

var colorOutside =
["#3C831D","#3C831D","#3C831D","#3C831D","#990000","#336600","#336600","#336600","#336600","#336600","#336600","#3C831D","#3C831D",//nite
"#49AA44","#49AA44","##49AA44", //dbab
"#FFFF00", //yellow //hsbc
"#38750F","#38750F", //mlco
"#336701","#336701","#336701", //bcet
"#3A7C16","#3A7C16", //susq
"#54CA64", "#54CA64",//bnpp
"#336600", "#990000",//ubs
"#FFFF00",
"#FFFF00","#007700","#007700","#007700","#007700","#007700","#007700","#FFFF00"];
//jmp
var colorInside = ["#006600","#49AA44",
"#FFFF00","#38750F","#336701","#3A7C16",
"#54CA64","#63F892","#FFFF00",

"#006600","#37720C","#37720C","#FFFF00","#006600","#A70E07","#FFFF00"];
/* draw rectangle */
function drawRectangle(canvasDiv, canvas,lineColor,lineWidth,fillColor,x,y,w,h){
	var a = canvas.getContext("2d");
	
	if (a) {
		a.beginPath();
		a.strokeStyle = lineColor;
		a.lineWidth = lineWidth;
		a.strokeRect(x,y,w,h);
		a.closePath();
		//a.fillStyle = fillColor;
		//a.stroke();
	}
	else {
		console.log("canvas not available");
	}
}
/* fill rectangle */
function fillRectangle(canvasDiv, canvas,lineColor,lineWidth,fillColor,x,y,w,h){
	var a = canvas.getContext("2d");
	if (a) {
		a.fillStyle = fillColor;
		a.fillRect(x,y,w,h);
	}
	else {
		console.log("canvas not available");
	}
}
//draw Table for gridline elements
function drawTable(canvasDiv, canvas){
	var context = canvas.getContext("2d");

	var bw = 1000;
	var bh = 100;
	var p = 8;
	var cw = bw + (p*2) + 1;
	var ch = bh + (p*2) + 1;

	
for (var x = 0; x <= bw; x += 90) {
    context.moveTo(0.5 + x + p, p);
    context.lineTo(0.5 + x + p, bh + p);
}
for (var x = 0; x <= bh; x += 30) {
    context.moveTo(p, 0.5 + x + p);
    context.lineTo(bw + p, 0.5 + x + p);
}

	context.strokeStyle = "white";
	context.stroke();

}
//test to use table
//when resize is false, create cavas
//when resize is true, get cavas and set new canvas width height
function ticket_test(resize){
	var cv;
	var window_size= [0,0];

	var canvasW = 850;
	var canvasH = 200;
	var canvasDiv = document.getElementById("canvasDiv");
	canvasDiv.setAttribute("width", canvasW);
	canvasDiv.setAttribute("height", canvasH);
	//first time drawing the canvas
	if (resize === 0){
		cv = document.createElement("canvas");
		cv.setAttribute("id", "canvas");
	}
	//when user is resizing
	else {
		cv = document.getElementById("canvas");
	}

	if(typeof G_vmlCanvasManager != 'undefined') {
		cv = G_vmlCanvasManager.initElement(cv);
	}
	cv.setAttribute("width",canvasW);
	cv.setAttribute("height",canvasH);
	canvasDiv.appendChild(cv);
	var a = canvas.getContext("2d");
	var inside = false;
	
	x = 6; y = 6; w = 748;h= 90;
	//fillRectangle(canvasDiv, canvas, greyHeading[0], 1, greyHeading[0],x,y, w, h);
	x = 6; y = 37; w = 748;h= 190;
	//fillRectangle(canvasDiv, canvas, "black", 1, "black",x,y, w, h);
	//setting up for Heading Label
	var label = [["MKT DAY",1.9,.3],
	["EMSX Add Order", 7.5, .3]];
	var fontColor = "white";
	var wrapTextWidth = 125;
	var centerW = cv.width/135;
	var centerH = cv.height/145;

	//draw border
	var x = 5; var y = 5; var w = 750; var h = 450;
	drawRectangle(canvasDiv, canvas, "white", 1, "red",x,y, w, h);
	drawTable(canvasDiv, canvas);
}
/* draw checkbox */
function drawCheckbox(canvasDiv, canvasx,y,w,h){
	var a = canvas.getContext("2d");
	
}
function ticket(resize) {
	var cv;
	var window_size= [0,0];
	//var sizeToUse=getRadius();
	//console.log(" sizeToUse:",sizeToUse);
	//var r = sizeToUse;
	var canvasW = 850;
	var canvasH = 200;
	var canvasDiv = document.getElementById("canvasDiv");
	canvasDiv.setAttribute("width", canvasW);
	canvasDiv.setAttribute("height", canvasH);
	//first time drawing the canvas
	if (resize === 0){
		cv = document.createElement("canvas");
		cv.setAttribute("id", "canvas");
	}
	//when user is resizing
	else {
		cv = document.getElementById("canvas");
	}
	//cv.setAttribute("width", canvasWH);
	//cv.setAttribute("height", canvasWH);
	if(typeof G_vmlCanvasManager != 'undefined') {
		cv = G_vmlCanvasManager.initElement(cv);
	}
	cv.setAttribute("width",canvasW);
	cv.setAttribute("height",canvasH);
	canvasDiv.appendChild(cv);
	var a = canvas.getContext("2d");
	var inside = false;
	
	x = 6; y = 6; w = 748;h= 90;
	//fillRectangle(canvasDiv, canvas, greyHeading[0], 1, greyHeading[0],x,y, w, h);
	x = 6; y = 37; w = 748;h= 190;
	//fillRectangle(canvasDiv, canvas, "black", 1, "black",x,y, w, h);
	//setting up for Heading Label
	var label = [["MKT DAY",1.9,.3],
	["EMSX Add Order", 7.5, .3]];
	var fontColor = "white";
	var wrapTextWidth = 125;
	var centerW = cv.width/135;
	var centerH = cv.height/145;
	addLabel(cv.width,cv.height, label, fontColor, wrapTextWidth);
	//setting up for Heading Label
	fontColor = amberInput[0];
	var wrapTextWidth = 300;
	var label2 = [["CHARLOTTE LEE 100",1.9,1.2],
	["BLOOMBERG/731 LEXINGTON (9001)",5.8, 1.2],
	["Last", 1.9, 2.1],
	["Change", 2.7, 2.1],
	["Bid", 3.5, 2.1],
	["Ask", 4.4,2.1],
	["High", 5.3, 2.1],
	["Low", 6.1, 2.1],
	["Volume", 7, 2.1],
	["WVAP", 8, 2.1],
	
	["190.72", 1.9, 3],
	["-0.53", 2.7, 3],
	["190.71", 3.5, 3],
	["190.71", 4.4, 3],
	["193.29", 5.3,3],
	["190.56", 6.1, 3],
	["3723609", 7, 3],
	["191.5141", 8, 3]
	];
	addLabel(cv.width,cv.height, label2, fontColor, wrapTextWidth);
	//setting up for Heading Label
	
	var label3 = [
	["MarketDepth",2.1,4.1],
	["Side",2.1,5.1],
	["Quantity", 2.9, 5.1],
	["Ticker", 4.2, 5.1],
	["Type", 5.3, 5.1],
	["Limit", 6.3, 5.1],
	["TIF", 7.4, 5.1],
	["Broker", 8.2, 5.1],
	["HandInst", 1.9, 7],
	["CashQ USD", 2.8, 7],
	["Account", 4, 7],
	["Instruction",6, 7],
	["Strategy", 8, 7]
	];
	addLabel(cv.width,cv.height, label3, fontColor, wrapTextWidth);
	//draw border
	var x = 5; var y = 5; var w = 750; var h = 450;
	drawRectangle(canvasDiv, canvas, "white", 1, "red",x,y, w, h);
	
	//drawTable(canvasDiv, canvas);
	/*
	//outer
	for (i=0;i < sliceOutter.length;i++) {
	v+=sliceOutter[i];
	drawSlice(i,x,y,r,u,v,inside,canvasDiv, canvas);
	u=v;
	}
	//inner
	for (i=0;i < sliceInner.length;i++){
	v+=sliceInner[i];
	inside = true;
	drawSlice(i,x,y,r/1.5,u,v,inside,canvasDiv, canvas);
	u=v;
	}
	//inner white slice line
	for (i=0;i < sliceInner.length;i++){
	v+=sliceInner[i];
	drawSliceLine(i,x,y,r,u,v,canvasDiv, canvas);
	u=v;
	}
	//center
	a.strokeStyle = "#FFFFFF"; //white
	a.fillStyle = "#5ADB75";
	a.lineWidth = 2;
	a.beginPath();
	a.arc(x,y,r/3,1.5*Math.PI,4*Math.PI);
	a.fill();
	a.stroke();
	drawGreyCircle(x,y,r,u,v,"#000000",canvasDiv, canvas); //black outline
	drawGreyCircle(x,y,r+2,u,v,"#657170", canvasDiv, canvas); //grey outline
	// stroke a quarter arc
	a.beginPath();
	a.arc(x,y,r+2,1.5*Math.PI,4*Math.PI);
	a.stroke();
	//setting up for labeling center
	var centerLabel = [[" IBM US",3.5, 4],
	["Total Adv. Vol: 327.76k Buy/Sell Percentage: -9",3.5, 4.28]];
	var centerColor = "black";
	var centerWrapTextWidth = 150;
	addLabel(cv.width,cv.height, centerLabel, centerColor, centerWrapTextWidth);
	drawGradiantBar(cv.width, cv.height,canvasDiv,canvas); */
}


// draw line
function drawLine(x,y, color){
	var a = canvas.getContext("2d");
	if (a) {
	a.beginPath();
		a.strokeStyle = color;
		a.lineWidth = 5;
		a.lineTo(x,y);
		a.stroke();
	}
	else {
		console.log("canvas not available");
	}
}
//Add label to the canvas. Can also be used to add label to the slices
function addLabel(w,h, label, labelForeground, wrapTextWidth) {
	ctx = document.getElementById('canvas').getContext('2d');
	var txt, newH, newW;
	
	var nw = w/10;
	var nh = h/10;
	
	ctx.fillStyle = labelForeground;
	ctx.textBaseline = "top";
	ctx.textarea_wrap = "hard";
	ctx.textarea_row = 2;
	ctx.cols = 10;
	for (i= 0; i < label.length; i++) {
		txt = label[i][0];
		newW = nw*label[i][1];
		newH = nh*label[i][2];
		ctx.font = "11pt Bloomberg Prop Unicode I";
		wrapText(ctx,txt, newW,newH, wrapTextWidth, newH);
	}
}
//wrap text next to slice and center
function wrapText(context, text, x, y, maxWidth, lineHeight) {
	var words = text.split(" ");
	var line = "";
	for(var n = 0; n < words.length; n++) {
		var testLine = line + words[n] + " ";
		var metrics = context.measureText(testLine);
		var testWidth = metrics.width;
		if(testWidth > maxWidth) {
			var templine="";
			for (var temp = 0; temp <n; temp++){
				templine = templine + " "+ words[temp]+" ";
			}
			context.fillText(line, x, y);
			line = words[n] + " ";
			y=lineHeight+12;
			context.fillText(line, x, y);
		}
		else {
			line = testLine;
			context.fillText(line, x, y);
		}
	}
}

/* draw grey outter circle line */
function drawGreyCircle(x,y,r,u,v, color, canvasDiv, canvas) {
	var a = canvas.getContext("2d");
	a.strokeStyle = color;
	a.lineWidth = 4;
	a.beginPath();
	a.arc(x,y,r,1.5*Math.PI,4*Math.PI);
	a.stroke();
}
/*Draw Inner Slice */
function drawSlice(i, x,y,r,u,v,inside, canvasDiv, canvas) {
	var canvasWidth, canvasHeight;
	var ht = '200%';
	var wd = '100%';
	if(typeof G_vmlCanvasManager != 'undefined') {
		canvas = G_vmlCanvasManager.initElement(canvas);
	}
	var a = canvas.getContext("2d");
	a.beginPath();
	a.strokeStyle = "#030300"; //white
	a.moveTo(x,y);
	a.arc(x,y,r,(u||0)/50*Math.PI,(v||7)/50*Math.PI,0);
	a.lineTo(x,y);
	a.lineWidth = 1;
	if (inside){
		a.fillStyle = colorInside[i];
	}
	else {
		a.fillStyle = colorOutside[i];
	}
	a.stroke();
	a.fill();
}

/*draw slice white line */
function drawSliceLine(i, x,y,r,u,v, canvasDiv, canvas) {
	if(typeof G_vmlCanvasManager != 'undefined') {
		canvas = G_vmlCanvasManager.initElement(canvas);
	}
	var a = canvas.getContext("2d");
	a.beginPath();
	a.strokeStyle = "#FFFFFF"; //white
	a.moveTo(x,y);
	a.arc(x,y,r,(u||0)/50*Math.PI,(v||7)/50*Math.PI,0);
	a.lineTo(x,y);
	a.lineWidth = 1;
	a.stroke();
}
/*get the window size to determin the radius*/
function getRadius(){
	if (document.body && document.body.offsetWidth) {
		winW = document.body.offsetWidth;
		winH = document.body.offsetHeight;
		}
	if (document.compatMode=='CSS1Compat' &&
		document.documentElement &&
		document.documentElement.offsetWidth ) {
		winW = document.documentElement.offsetWidth;
		winH = document.documentElement.offsetHeight;
		}
	if (window.innerWidth && window.innerHeight) {
		winW = window.innerWidth;
		winH = window.innerHeight;
		}
	
	var sizeToUse;
	
	if (winW<winH){
		sizeToUse = winW/3;
	}
	else {
		sizeToUse = winH/3;
	}
	return sizeToUse;
}
/*draw gradiant bar */
function drawGradiantBar(w,h,canvasDiv,canvas){
	w = w/10; h = h/10;
	if (canvas.getContext){
	var ctx = canvas.getContext('2d');
	
	// Create Linear Gradients
	//red bar
	var lingrad = ctx.createLinearGradient((w*3.56), (w*.21), (h*5.186), (h*.21));
	lingrad.addColorStop(0, '#990000');
	lingrad.addColorStop(0.5, '#E8773C');
	
	var lingrad2 = ctx.createLinearGradient(w*.06,h*.2,w*.06,w*.23);
	lingrad2.addColorStop(0, '#000');
	lingrad2.addColorStop(0.5, 'rgba(0,0,0,0)');
	
	// assign gradients to fill and stroke styles
	ctx.fillStyle = lingrad;
	ctx.strokeStyle = lingrad2;
	// draw shapes
	ctx.fillRect((w*3.7), (w*9), (60), (h*.25));
	
	// green bar
	// var lingrad1 = ctx.createLinearGradient(265,12,350,12);
	var lingrad1 = ctx.createLinearGradient(w*4.78,h*.215,w*6.35,h*.215);
	lingrad1.addColorStop(0, '#65FB95');
	lingrad1.addColorStop(.5, '#336600');
	
	var lingrad3 = ctx.createLinearGradient(w*.06,h*12,w*.06,h*12);
	lingrad3.addColorStop(0, '#000');
	lingrad3.addColorStop(.5, 'rgba(0,0,0,0)');
	
	// assign gradients to fill and stroke styles
	ctx.fillStyle = lingrad1;
	ctx.strokeStyle = lingrad3;
	// draw shapes
	ctx.fillRect((w*3.7)+61,w*9,60,h*.25);
	console.log("Draw Gradient w:",w," h:",h);
	}
	else {
		console.log('You need Safari or Firefox 1.5+ to see this demo.');
	}

}
