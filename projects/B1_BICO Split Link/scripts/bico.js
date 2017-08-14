function bico(){
	console.log('BICO got title bar menu selection: ');
	
}

function changeStyle(styleType){
	console.log("[changeDisplay] styleType",styleType);
	window.myGlobal = styleType;
	console.log("global:",window.myGlobal);
	if (styleType === "A"){ //no need
		console.log("A styleType:",styleType);
		//change to blue font and icon is white 
		//Option 1: blue text >> | casper icon: look at BI_0007_v1, dotted underline same color as text
		
		document.querySelector('#drillEE').style.color = "#53B2F5";
		document.querySelector('#drillBI1').style.color = "#53B2F5";
		document.querySelector('#drillFA').style.color = "#53B2F5";
		document.querySelector('#drillBI2').style.color = "#53B2F5";
		document.querySelector('#drillBI3').style.color = "#53B2F5";
		document.querySelector('#drillNSN').style.color = "#53B2F5";
		document.querySelector('#drillDOCC').style.color = "#53B2F5"; 
		
		document.querySelector('#popoutEE').style.backgroundPosition= "center";
		document.querySelector('#popoutBI1').style.backgroundPosition= "center";
		document.querySelector('#popoutFA').style.backgroundPosition= "center";
		document.querySelector('#popoutBI2').style.backgroundPosition= "center";
		document.querySelector('#popoutBI3').style.backgroundPosition= "center";
		document.querySelector('#popoutNSN').style.backgroundPosition= "center";
		document.querySelector('#popoutDOCC').style.backgroundPosition= "center";

		document.querySelector('#b1-optionD-grid').style.display = "none"
		document.querySelector('.b1-bico-key-point-list').style.display ="block";
		document.querySelector('#b1-optionD-grid2').style.display = "none"
		document.querySelector('.b1-bico-key-point-list2').style.display ="block";
				
		document.querySelector('#popoutEE').style.display ="inline-block";
		document.querySelector('#popoutBI1').style.display ="inline-block";
		document.querySelector('#popoutFA').style.display ="inline-block";
		document.querySelector('#popoutBI2').style.display ="inline-block";
		document.querySelector('#popoutBI3').style.display ="inline-block";
		document.querySelector('#popoutNSN').style.display ="inline-block";
		document.querySelector('#popoutDOCC').style.display ="inline-block";
		
		document.querySelector('#popoutEE_2').style.display = "none";
		document.querySelector('#popoutBI1_2').style.display= "none";
		document.querySelector('#popoutFA_2').style.display = "none";
		document.querySelector('#popoutBI2_2').style.display= "none";
		document.querySelector('#popoutBI3_2').style.display= "none";
		document.querySelector('#popoutNSN_2').style.display = "none";
		document.querySelector('#popoutDOCC_2').style.display= "none"; 
		
		document.querySelector('#pipeEE').style.transform="translateY(2px)";
		document.querySelector('#popoutEE').style.transform="translateY(1px)";
		document.querySelector('#pipeBI1').style.transform="translateY(2px)";
		document.querySelector('#popoutBI1').style.transform="translate(5px,1px)";
		
		document.querySelector('#pipeFA').style.transform="translateY(2px)";
		document.querySelector('#popoutFA').style.transform="translateY(1px)";
		
		document.querySelector('#pipeBI2').style.transform="translateY(2px)";
		document.querySelector('#popoutBI2').style.transform="translate(5px,1px)";
		
		document.querySelector('#pipeBI3').style.transform="translateY(2px)";
		document.querySelector('#popoutBI3').style.transform="translateY(1px)";
		document.querySelector('#pipeNSN').style.transform="translateY(2px)";
		document.querySelector('#popoutNSN').style.transform="translateY(1px)";
		document.querySelector('#pipeDOCC').style.transform="translateY(2px)";
		document.querySelector('#popoutDOCC').style.transform="translate(5px,1px)";
		
		
	
	}
	else if (styleType === "B"){
		console.log("B styleType:",styleType);
		//change to amber font and icon is white
		//Option 2: amber text >> | casper icon: look at BI_0007_v1, dotted underline same color as text
		document.querySelector('#drillEE').style.color = "#FF9E24";
		document.querySelector('#drillBI1').style.color = "#FF9E24";
		document.querySelector('#drillFA').style.color = "#FF9E24";
		document.querySelector('#drillBI2').style.color = "#FF9E24";
		document.querySelector('#drillBI3').style.color = "#FF9E24";
		document.querySelector('#drillNSN').style.color = "#FF9E24";
		document.querySelector('#drillDOCC').style.color = "#FF9E24";
		
	    
	    document.querySelector('#pipeEE').style.display = "inline-block";
		document.querySelector('#pipeBI1').style.display = "inline-block";
		document.querySelector('#pipeFA').style.display = "inline-block";
		document.querySelector('#pipeBI2').style.display = "inline-block";
		document.querySelector('#pipeBI3').style.display = "inline-block";
		document.querySelector('#pipeNSN').style.display = "inline-block";
		document.querySelector('#pipeDOCC').style.display = "inline-block";
		
		document.querySelector('#popoutEE').style.backgroundPosition= "center";
		document.querySelector('#popoutBI1').style.backgroundPosition= "center";
		document.querySelector('#popoutFA').style.backgroundPosition= "center";
		document.querySelector('#popoutBI2').style.backgroundPosition= "center";
		document.querySelector('#popoutBI3').style.backgroundPosition= "center";
		document.querySelector('#popoutNSN').style.backgroundPosition= "center";
		document.querySelector('#popoutDOCC').style.backgroundPosition= "center";
		
		document.querySelector('#b1-optionD-grid').style.display = "none"
		document.querySelector('.b1-bico-key-point-list').style.display ="block";
		document.querySelector('#b1-optionD-grid2').style.display = "none"
		document.querySelector('.b1-bico-key-point-list2').style.display ="block";
		
				
		document.querySelector('#popoutEE').style.display ="inline-block";
		document.querySelector('#popoutBI1').style.display ="inline-block";
		document.querySelector('#popoutFA').style.display ="inline-block";
		document.querySelector('#popoutBI2').style.display ="inline-block";
		document.querySelector('#popoutBI3').style.display ="inline-block";
		document.querySelector('#popoutNSN').style.display ="inline-block";
		document.querySelector('#popoutDOCC').style.display ="inline-block";
		
		document.querySelector('#popoutEE_2').style.display = "none";
		document.querySelector('#popoutBI1_2').style.display= "none";
		document.querySelector('#popoutFA_2').style.display = "none";
		document.querySelector('#popoutBI2_2').style.display= "none";
		document.querySelector('#popoutBI3_2').style.display= "none";
		document.querySelector('#popoutNSN_2').style.display = "none";
		document.querySelector('#popoutDOCC_2').style.display= "none"; 
		
		//document.querySelector('#popoutEE').style.transform="translateY(3px)";
		document.querySelector('#pipeEE').style.transform="translateY(2px)";
	//	document.querySelector('#popoutBI1').style.transform="translateY(3px)";
		document.querySelector('#pipeBI1').style.transform="translateY(2px)";
	//	document.querySelector('#popoutFA').style.transform="translateY(3px)";
		document.querySelector('#pipeFA').style.transform="translateY(2px)";
	//	document.querySelector('#popoutBI2').style.transform="translateY(3px)";
		document.querySelector('#pipeBI2').style.transform="translateY(2px)";
	//	document.querySelector('#popoutBI3').style.transform="translateY(3px)";
		document.querySelector('#pipeBI3').style.transform="translateY(2px)";
	//	document.querySelector('#popoutNSN').style.transform="translateY(3px)";
		document.querySelector('#pipeNSN').style.transform="translateY(2px)";
	//	document.querySelector('#popoutDOCC').style.transform="translateY(3px)";
		document.querySelector('#pipeDOCC').style.transform="translateY(2px)";
	}
	
	
	else if (styleType === "C"){
		console.log("C styleType:",styleType);
		//Option 3: amber text in table, casper icon: look at BI_0010_v2, white outline on hover of both sides
        //fix tooltips so they don't interfere with clickables, on delay 
        //spacing between text and | and icon should be consistent and not too close
        //in table, vertical alignment, off by a few pixels
        //tooltips on icon - "Click for further analysis in a new window"

		document.querySelector('#b1-optionD-grid').style.display = "block"
		document.querySelector('.b1-bico-key-point-list').style.display ="none";
		document.querySelector('#b1-optionD-grid2').style.display = "block"
		document.querySelector('.b1-bico-key-point-list2').style.display ="none";
		
		//document.querySelector('#popoutEE').style.transform="translateY(6px)";
	}
	else if (styleType === "D"){  //blue icon
		console.log("D styleType:",styleType);
		//Option 3: amber text in table, casper icon: look at BI_0010_v2, white outline on hover of both sides
        //fix tooltips so they don't interfere with clickables, on delay 
        //spacing between text and | and icon should be consistent and not too close
        //in table, vertical alignment, off by a few pixels
        //tooltips on icon - "Click for further analysis in a new window"

		document.querySelector('#drillEE').style.color = "#FF9E24";
		document.querySelector('#drillBI1').style.color = "#FF9E24";
		document.querySelector('#drillFA').style.color = "#FF9E24";
		document.querySelector('#drillBI2').style.color = "#FF9E24";
		document.querySelector('#drillBI3').style.color = "#FF9E24";
		document.querySelector('#drillNSN').style.color = "#FF9E24";
		document.querySelector('#drillDOCC').style.color = "#FF9E24";
		
	    
	    document.querySelector('#pipeEE').style.display = "inline-block";
		document.querySelector('#pipeBI1').style.display = "inline-block";
		document.querySelector('#pipeFA').style.display = "inline-block";
		document.querySelector('#pipeBI2').style.display = "inline-block";
		document.querySelector('#pipeBI3').style.display = "inline-block";
		document.querySelector('#pipeNSN').style.display = "inline-block";
		document.querySelector('#pipeDOCC').style.display = "inline-block";
		
		document.querySelector('#popoutEE').style.backgroundPosition= "center";
		document.querySelector('#popoutBI1').style.backgroundPosition= "center";
		document.querySelector('#popoutFA').style.backgroundPosition= "center";
		document.querySelector('#popoutBI2').style.backgroundPosition= "center";
		document.querySelector('#popoutBI3').style.backgroundPosition= "center";
		document.querySelector('#popoutNSN').style.backgroundPosition= "center";
		document.querySelector('#popoutDOCC').style.backgroundPosition= "center";
		
		document.querySelector('#b1-optionD-grid').style.display = "none"
		document.querySelector('.b1-bico-key-point-list').style.display ="block";
		document.querySelector('#popoutEE').style.display = "none"
		document.querySelector('#popoutBI1').style.display = "none"
		document.querySelector('#popoutFA').style.display = "none"
		document.querySelector('#popoutBI2').style.display = "none"
		document.querySelector('#popoutBI3').style.display = "none"
		document.querySelector('#popoutNSN').style.display = "none"
		document.querySelector('#popoutDOCC').style.display = "none"
		document.querySelector('#popoutEE_2').style.display ="inline-block";
		document.querySelector('#popoutBI1_2').style.display="inline-block";
		document.querySelector('#popoutFA_2').style.display ="inline-block";
		document.querySelector('#popoutBI2_2').style.display="inline-block";
		document.querySelector('#popoutBI3_2').style.display="inline-block";
		document.querySelector('#popoutNSN_2').style.display ="inline-block";
		document.querySelector('#popoutDOCC_2').style.display="inline-block";
		
		
		
		document.querySelector('#b1-optionD-grid').style.display = "none"
		document.querySelector('.b1-bico-key-point-list').style.display ="block";
		document.querySelector('#b1-optionD-grid2').style.display = "none"
		document.querySelector('.b1-bico-key-point-list2').style.display ="block";
		
		document.querySelector('#pipeEE').style.transform="translateY(2px)";
		document.querySelector('#pipeBI1').style.transform="translateY(2px)";
		document.querySelector('#pipeFA').style.transform="translateY(2px)";
		document.querySelector('#pipeBI2').style.transform="translateY(2px)";
		document.querySelector('#pipeBI3').style.transform="translateY(2px)";
		document.querySelector('#pipeNSN').style.transform="translateY(2px)";
		document.querySelector('#pipeDOCC').style.transform="translateY(2px)";
		
	}
	else {
		console.log("in else");
	}

}



