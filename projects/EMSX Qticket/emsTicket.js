/* *********************************************************************
/* Charlotte Lee october 2012
* This is use to create quick ticket in EMSX<GO>
*
*
***********************************************************************/
//button color light to dark
var greenButton = ["#66EA80","#07AD2A","#03AA27"];

var redButton = ["#F98E88","#DB1F14"];
var whiteButton = ["#FAFAFB","#B3B6C3"];
var greyOutInput = ["#8E8F97"];
var amberInput = ["#FF9E2A","#E02B20"];
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

function ticket() {
	var cv;
	var window_size= [0,0];
	
	//var sizeToUse=getRadius();
	//console.log(" sizeToUse:",sizeToUse);
	//var r = sizeToUse;
	var ticketW = 754;
	var ticketH = 264;
	var ticketDiv = document.getElementById("ticketDiv");
	
	ticketDiv.style.width = 754;
	ticketDiv.style.height = 264;
	//left side buttons table
	var buttonDiv = document.createElement("div")
	buttonDiv.setAttribute("id","buttonDiv");
	var heading = document.createElement("h");
	heading.innerHTML="Quick Buttons";
	buttonDiv.appendChild(heading);
	ticketDiv.appendChild(buttonDiv);
	
	var btn= addButton("**Limits**","black","white");
	buttonDiv.appendChild(btn);
	
	btn= addButton("BuyStrikeBID","black",greenButton[2]);
	buttonDiv.appendChild(btn);
	
	btn= addButton("BuyStrikeAsk","black",greenButton[2]);
	buttonDiv.appendChild(btn);
	
	btn= addButton("SellStrikeAsk","black",redButton[1]);
	buttonDiv.appendChild(btn);
	
	btn= addButton("SellStrikeBid","black",redButton[1]);
	buttonDiv.appendChild(btn);
	
	btn= addButton("**EndPoint**","black","white");
	buttonDiv.appendChild(btn);
	
	btn= addButton("BuyStrikeBID1","black",greenButton[2]);
	buttonDiv.appendChild(btn);
	
	btn= addButton("BuyStrikeAsk1","black",greenButton[2]);
	buttonDiv.appendChild(btn);
	
	btn= addButton("SellStrikeAs1","black",redButton[1]);
	buttonDiv.appendChild(btn);
	
	btn= addButton("SellStrikeAs2","black",redButton[1]);
	buttonDiv.appendChild(btn);
	
	btn= addButton("SellStrikeBI1","black",redButton[1]);
	buttonDiv.appendChild(btn);
	
	//right side table
	var tableHeading = document.createElement("table");
	tableHeading.style.border = 0;
	tableHeading.setAttribute("id","tableHeading");
	ticketDiv.appendChild(tableHeading);
	var numCol = 2;
	var text = [["INTL BUSINESS MACHINE(USD) MKT DAY",0],["EMSX Add Order",0]];
	var new_row = addTableRow("row1",numCol, text,"#FFFFFF", "#2E2D2B");
	tableHeading.appendChild(new_row);
	
	numCol = 2;
	text = [["CHARLOTTE LEE 100",0],["BLOOMBERG/731 LEXINGTON (9001)",0]];
	new_row = addTableRow("row2",numCol, text ,"#F09000", "#2E2D2B");
	tableHeading.appendChild(new_row);
	
	var ticketTableSecurity = document.createElement("table");
	ticketTableSecurity.setAttribute("id","ticketTableSecurity");
	var numCol = 8;
	text = [["Last",0],["Change",0],["Bid",0],["Ask",0],["High",0],["Low",0],["Volume",0],["VWAP",0]];
	new_row = addTableRow("row2",numCol, text, "#F09000", "#000000" );
	ticketTableSecurity.appendChild(new_row);
	
	var numCol = 8;
	text = [["189.91",0],["-0.19",0],["189.96",0],["189.99",0],["191.64",0],["188.88",0],["2244745",0],["190.2967",0]];
	new_row = addTableRow("row3",numCol, text, "#F09000", "#000000" );
	ticketTableSecurity.appendChild(new_row);
	ticketTableSecurity.style.width = "600px";
	ticketDiv.appendChild(ticketTableSecurity);
	
	var ticketTableCheck1 = document.createElement("table");
	ticketTableCheck1.setAttribute("id","ticketTableCheck1");
	var ckRow = document.createElement("tr");
	var ckCol = document.createElement("td");
	var label = addCheckBox("MarketDept");
	ckCol.appendChild(label);
	ckRow.appendChild(ckCol);
	ticketTableCheck1.appendChild(ckRow);
	
	ckCol = document.createElement("td");
	check = addCheckBox("Block");
	ckCol.appendChild(check);
	ckRow.appendChild(ckCol);
	var txt = document.createTextNode("Block");
	ckCol.appendChild(txt);
	ticketTableCheck1.appendChild(ckRow);
	
	ckCol = document.createElement("td");
	check = addCheckBox("Routes");
	ckCol.appendChild(check);
	ckRow.appendChild(ckCol);
	txt = document.createTextNode("Routes");
	ckCol.appendChild(txt);
	ticketTableCheck1.appendChild(ckRow);
	ticketDiv.appendChild(ticketTableCheck1);
	
	var ticketTableBody = document.createElement("table");
	ticketTableBody.setAttribute("id","ticketTableBody");
	ticketTableBody.style.width = 600;
	numCol = 7;
	text = [["Side",0],["Quantity",0],["Ticker",0],["Type",0],["Limit",0],["TIF",0],["Broker",0]];
	new_row = addTableRow("row4",numCol, text, "#F09000", "#000000" );
	ticketTableBody.appendChild(new_row);
	
	
	numCol = 7;
	text = [["Side",1],["Quantity",1],["Ticker",2],["Type",1],["Limit",1],["TIF",1],["Broker",1]];
	new_row = addTableRow("row5",numCol, text, "#F09000", "#000000" );
	ticketTableBody.appendChild(new_row);
	
	//ticketDiv.appendChild(ticketTableBody);
	
	numCol = 5;
	text = [["HandInst",0],["CashQ USD",0],["Account",0],["Instructions",0],["Strategy",0]];
	new_row = addTableRow("row6",numCol, text, "#F09000", "#000000" );
	ticketTableBody.appendChild(new_row);
	//ticketDiv.appendChild(ticketTableBody);

	numCol = 5;
	text = [["HandInst",1],["CashQ USD",2],["Account",1],["Instructions",2],["Strategy",2]];
	new_row = addTableRow("row7",numCol, text, "#F09000", "#000000" );
	ticketTableBody.appendChild(new_row);
	ticketDiv.appendChild(ticketTableBody);
		
	var ticketTableCheck2 = document.createElement("table");
	ticketTableCheck2.setAttribute("id","ticketTableCheck2");
	ckRow = document.createElement("tr");
	ckCol = document.createElement("td");
	label = addCheckBox("Additional Fields");
	ckCol.appendChild(label);
	ckRow.appendChild(ckCol);
	ticketTableCheck2.appendChild(ckRow);
	ticketDiv.appendChild(ticketTableCheck2);
	
	var ticketTableActionButton = document.createElement("table");
	ticketTableActionButton.setAttribute("id","ticketTableActionButton");
	
	btn= addButton("Add","black",greenButton[2]);
	ticketTableActionButton.appendChild(btn);
	
	btn= addButton("Route","black",greenButton[2]);
	ticketTableActionButton.appendChild(btn);
	btn= addButton("Manual","black",greenButton[2]);
	ticketTableActionButton.appendChild(btn);
	btn= addButton("Clear","black",redButton[1]);
	ticketTableActionButton.appendChild(btn);
	ticketDiv.appendChild(ticketTableActionButton);
	
}
function addCheckBox(text){
	var check = document.createElement('input');
        check.setAttribute('type', 'checkbox');

        var label = document.createElement('label');
        label.appendChild(check);

        var textDisplay = document.createTextNode(text);
        label.appendChild(textDisplay);

        return label;
}

	
function addButton(text,fg,bg){	
	var button = document.createElement('input');
        button.setAttribute('type', 'button');
	
       button.setAttribute("color","black");
       if (bg === greenButton[2]){
	button.setAttribute("id","greenbutton");
       }
       else if (bg === redButton[1]){
	button.setAttribute("id","redbutton");
       }
       else {
	button.setAttribute("id","whitebutton");
       }
      // button.setAttribute("background",bg);
      // button.style.background = bg;
       button.setAttribute("value",text);
       
       return button;
       // return label;
}
function addCombo(text, choices){
	var i = 0;
	var selectArray = [];
	var myform = document.createElement("form");
	var container = document.createElement("select");
	container.setAttribute("id","select0");
	var theOption = document.createElement("OPTION");
	var theText = document.createTextNode("choice 1");
	theOption.appendChild(theText);
	container.appendChild(theOption);
	//container.style.width = "500px";
	//container.setAttribute("width",500 );

	return container;
}
function addTableRow(id, numCol,text, fg, bg){
	var tr = document.createElement("tr");
	tr.setAttribute("id",id);
	tr.setAttribute("color", fg);
	tr.setAttribute("bgColor", bg);
	tr.setAttribute("border",0);
	for (var i = 0; i<numCol; i++){
		var td = document.createElement("td");
		td.setAttribute("id",id+"col"+i);
		var input = addInput(td,text[i][0],text[i][1]);
		tr.appendChild(td);
	}
	return tr;
}

function addInput(td,text,inputType){
	var txt = document.createTextNode(text);
	if (inputType === 0){
		td.appendChild(txt);
		input = td;
	}
	else if (inputType ===1){ //combo
		var i = 0;
		var selectArray = [];
		var input = document.createElement("select");
		input.setAttribute("id","select0");
		//input.setAttribute("width",500 );
		td.appendChild(input);
		return td;
	}
	else if (inputType ===2){ //input
		var selectArray = [];
		var input = document.createElement("input");
		input.setAttribute("id","select0");
		//input.setAttribute("width",500 );
		td.appendChild(input);
		return td;
	}
	return input;
}

function addTableRowCheck(numCol,text, fg, bg){
	var tr = document.createElement("tr");
	
	for (var i = 0; i<numCol; i++){
		var td = document.createElement("td");
		td.setAttribute("width","300");
		td.setAttribute("color", fg);
		td.setAttribute("bgColor", bg)
		var check = document.createElement("input");
		check.setAttribute("type","checkbox");
		check.innerHTML=("MarketDepth");
		td.appendChild(check);
		//var leftSpace = 10 * i;
		//td.setAttribute("left",leftSpace)
		txt = document.createTextNode(text[i]);
		td.appendChild(txt);
		tr.appendChild(td);
	}
	
	return tr;
}


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
