var fps = 0; //Frames per second count
var fpsPara = document.getElementById("fps");
var lastTime = Date.now();
var creditRate = 0; //Rates of credits per second
var intervalRate = 1; //Pass time in second
// var creditRateX = [0, 5, 50, 0];
// let eachRate = [0, 0, 0, 0];
// var clickX = 1; //Rate of credit(s) per click
// var clickXX = 1.5; //Amount to add to clickX after buying click upgrade
// var costX = [2.5, 1.5, 2.5, 2.5, 2.5]; //
// var itemX = [0, 0, 0, 0, 0]; //Amount of each item
// var itemRate = [0, 0, 0, 0, 0]; 
var storeButtons = document.getElementsByTagName("button");
// REMEMBER: place a cost multiplier in each function to make it local

function timeInMilli(secs){
	var milli = secs * 1000;
	return milli;
}

function creditPerSec(cps){
	let x = cps / 1000;
	if(x >= 0.01){
		intervalRate = x;
		alert(intervalRate + "1");
	}if(x < 0.01){
		intervalRate = 0.01;
		button.creditRate = 100/x;
		alert(intervalRate + "2");
	}
	console.log("ohno")
}

var button = {
	clicker: document.getElementById("clickerButton"), //Clicker object in Bitcoin Miner.html
	credit: 0, //Amount of credit (bitcoin)
	creditText: document.getElementById("credit"), //Object to display credit to the app
	creditRate: 0, 
	creditRateText: document.getElementById("creditRate"),
	addOne: function(){
		this.credit++;
		this.creditText.innerHTML = this.credit;
	},
	addThis: function(amt){
		this.credit += amt;
	},
	subtractThis: function(amt){
		this.credit -= amt;
	},
	update: function(){
		this.credit += creditRate;
	}


}

button.clicker.onclick = function(){button.addOne();};

// var storeButtonAmt = storeButtons.length;
// for(var i = 1; i <= storeButtonAmt; i += 1){
// 	storeButtons[i].onclick = function(e){
// 		console.log();
// 	};
// }


var interval = setInterval(
function(){
	fps++;
	if(Date.now() - lastTime >= 1000){
		fpsPara.innerHTML = "FPS: " + fps;
		fps = 0;
		lastTime = Date.now();
	}
	button.creditText.innerHTML = button.credit;
	button.creditRateText.innerHTML = button.creditRate + "/s";
	button.credit += button.creditRate;

}, timeInMilli(intervalRate));

function stopLoop(){
	clearInterval(interval);
	console.log("Loop stopped");
}

class StoreItem{
	constructor(itemNum){
		this.itemNum = itemNum;
		document.getElementsByClassName(itemButton)[this.itemNum].onclick = check();
	}
	check(){
		alert("working")
	}
}

let item1 = new StoreItem;


// function button(){
// 	credit += clickX;
// 	creditText.innerHTML = credit;
// }



// function totalCreditRate(){
// 	var test = 0;


// 	for(i = 0; i < eachRate.length; i++){
// 		test += eachRate[i];
// 	}

// 	return test;
// 	// console.log(test);

// 	for(i = 0; i < eachRate.length; i++){
// 		eachRate[i] = 0;
// 	}

// }


// var storeItems = document.getElementsByClassName("storeItems");
// var storeText = document.getElementsByTagName("p");


// var itemX1 = document.getElementsByClassName("itemX")[0];
// var itemRate1 = document.getElementsByClassName("itemRate")[0];
// var costText1 = document.getElementsByClassName("itemCost")[0];

// function buyItem1(){
// 	var cost = Number(costText1.textContent);

// 	if(credit >= cost){
// 		credit -= cost;
// 		creditText.innerHTML = credit;

// 		clickX += Math.round(clickXX);
// 		clickXX += 1;
// 		itemRate1.innerHTML = "Click Power: +" + Math.round(clickXX);

// 		cost = Math.round(cost * costX[0]);
// 		costX[0] += 0.1;
// 		costText1.innerHTML = cost;

// 		itemX[0]++;
// 		itemX1.innerHTML = "x" + itemX[0];
// 		itemX1.style.display = "inline";

// 	}

// }

// var itemX2 = document.getElementsByClassName("itemX")[1];
// var itemRate2 = document.getElementsByClassName("itemRate")[1];
// var costText2 = document.getElementsByClassName("itemCost")[1];

// function buyItem2(){
// 	var cost = Number(costText2.textContent);

// 	if(credit >= cost){
// 		//Subtracts and display the cost from the credit counter
// 		credit -= cost;
// 		creditText.innerHTML = credit;

// 		eachRate[1] += creditRateX[1];
// 		console.log(creditRateX[1]);
// 		creditRate += totalCreditRate();
// 		creditRateX[1] += 5;
// 		console.log(creditRateX[1]);
// 		console.log(eachRate[1]);
// 		itemRate2.innerHTML = "Bitcoin Rate: " + eachRate[1] + "/s";

// 		cost = Math.round(cost * costX[1]);
// 		costX[1] += 0.1;
// 		costText2.innerHTML = cost;

// 		itemX[1]++;
// 		itemX2.innerHTML = "x" + itemX[1];
// 		itemX2.style.display = "inline";
// 	}
// }

// var itemX3 = document.getElementsByClassName("itemX")[2];
// var itemRate3 = document.getElementsByClassName("itemRate")[2];
// var costText3 = document.getElementsByClassName("itemCost")[2];

// function buyItem3(){
// 	var cost = Number(costText3.textContent);

// 	if(credit >= cost){
// 		credit -= cost;
// 		creditText.innerHTML = credit;

// 		eachRate[2] += creditRateX[2];
// 		creditRate += totalCreditRate();
// 		creditRateX[2] += 10;
// 		itemRate3.innerHTML = "Bitcoin Rate: " + eachRate[2] + "/s";
// 		console.log(totalCreditRate());
		
// 		cost = Math.round(cost * costX[2]);
// 		costX[2] += 0.1;
// 		costText3.innerHTML = cost;

// 		itemX[2]++;
// 		itemX3.innerHTML = "x" + itemX[2];
// 		itemX3.style.display = "inline";

// 	}

// }

//////////////////ADMIN////////////////////////
function $admin_changeClick(clickX){
	this.clickX = clickX;
	console.log("Click Multiplier is now " + clickX);
}

function $admin_changeRate(creditRate){
	this.creditRate = creditRate;
	console.log("Credit Rate is now " + creditRate);
}

function $admin_changeCredit(credit){
	this.credit = credit;
	console.log("Credit is now " + credit);
}

