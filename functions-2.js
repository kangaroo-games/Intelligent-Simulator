//basic variables
var userMoney = 1499999; //14999999
var userIQ = 24999;
var basicIncome = 1;
var basicIQIncome = 1
var basicMultipliar = 1; //Not to be changed//
var basicIQMultipliar = 1; //Not to be changed//

//worker variables
var workers = 0;
var workerIncome = 2; //25//
var workerCost = 10; //15//
var workerTotal = workerIncome * workers;

//librarian variables
var librarians = 0;
var librarianIncome = 45; //50//
var librarianCost = 300; //400//
var librarianTotal = librarianIncome * librarians;

//professor variables
var professors = 0;
var professorIncome = 230; //250//
var professorCost = 1300; //1700//
var professorTotal = professorIncome * professors;

//lawyer variables
var lawyers = 0;
var lawyerIncome = 1500; //1,000//
var lawyerCost = 9000; //9,595//
var lawyerTotal = lawyerIncome * lawyers;

//sales people variables
var salesPeople = 0;
var salesPeopleIncome = 15000; //10,000//
var salesPeopleCost = 20000; //25000//
var salesPeopleTotal = salesPeopleIncome * salesPeople;

//celebrity variables
var celebrities = 0;
var celebrityIncome = 75000; //10,000//
var celebrityCost = 100000; //25000//
var celebrityTotal = celebrityIncome * celebrities;

///work and study functions
function work() {
userMoney = userMoney + basicIncome * basicMultipliar;
document.getElementById("money").innerHTML = userMoney;
document.getElementById("alert").innerHTML = " ";
}

function study() {
userIQ = userIQ + basicIQIncome * basicIQMultipliar;
document.getElementById("iq").innerHTML = userIQ;
document.getElementById("alert").innerHTML = " ";
}

//worker functions
function buyWorker() {
	if (userMoney >= workerCost) {
		userMoney = userMoney - workerCost;
		workers = workers + 1
		workerCost = workerCost * 3 / disaccountDevision;
		document.getElementById("money").innerHTML = userMoney;
		document.getElementById("workerPrice").innerHTML = "Money: " + workerCost;
		document.getElementById("workerIncome").innerHTML = "Worker Income: " + workerIncome;
		document.getElementById("numWorker").innerHTML = "Workers: " + workers;
		document.getElementById("alert").innerHTML = " ";
	} else {
		document.getElementById("alert").innerHTML = "You don't have enough money for a worker!!!";
	}
}

function worker() {
	workerTotal = workerIncome * workers;
	userMoney = userMoney + workerTotal;
	document.getElementById("money").innerHTML = userMoney;
	document.getElementById("workerIncome").innerHTML = "Worker Income: " + workerTotal;
	
	//document.getElementById("totalIncome").innerHTML = "Total Income: " + workerTotal;
}

//librarian functions
function buyLibrarian() {
	if (userMoney >= librarianCost) {
		userMoney = userMoney - librarianCost;
		librarians = librarians + 1
		librarianCost = librarianCost * 3 / disaccountDevision;
		document.getElementById("money").innerHTML = userMoney;
		document.getElementById("librarianPrice").innerHTML = "Money: " + librarianCost;
		document.getElementById("librarianIncome").innerHTML = "Librarian Income: " + librarianIncome;
		document.getElementById("numLibrarian").innerHTML = "Librarians: " + librarians;
		document.getElementById("alert").innerHTML = " ";
	} else {
		document.getElementById("alert").innerHTML = "You don't have enough money for a Librarian!!!";
	}
}

function librarian() {
	librarianTotal = librarianIncome * librarians;
	userMoney = userMoney + librarianTotal;
	document.getElementById("money").innerHTML = userMoney;
	document.getElementById("librarianIncome").innerHTML = "Librarian Income: " + librarianTotal;
	
	userIQ = userIQ + librarianTotal;
	document.getElementById("iq").innerHTML = userIQ;
	
	//document.getElementById("totalIncome").innerHTML = "Total Income: " + librarianTotal;
}

//professor functions
function buyProfessor() {
	if (userMoney >= professorCost) {
		userMoney = userMoney - professorCost;
		professors = professors + 1
		professorCost = professorCost * 3 / disaccountDevision;
		//professorCost = professorCost * Math.round(professorCost * 0.03)
		document.getElementById("money").innerHTML = userMoney;
		document.getElementById("professorPrice").innerHTML = professorCost;
		document.getElementById("professorIncome").innerHTML = "Professor Income: " + professorIncome;
		document.getElementById("numProfessor").innerHTML = "Professors: " + professors;
		document.getElementById("alert").innerHTML = " ";
	} else {
		document.getElementById("alert").innerHTML = "You don't have enough money for a Professor!!!";
	}
}

function professor() {
	professorTotal = professorIncome * professors;
	userMoney = userMoney + professorTotal;
	document.getElementById("money").innerHTML = userMoney;
	document.getElementById("professorIncome").innerHTML = "Professor Income: " + professorTotal;
	
	//document.getElementById("totalIncome").innerHTML = "Total Income: " + librarianTotal;
}

//lawyer functions
function buyLawyer() {
	if (userMoney >= lawyerCost) {
		userMoney = userMoney - lawyerCost;
		lawyers = lawyers + 1
		lawyerCost = lawyerCost * 3 / disaccountDevision;
		document.getElementById("money").innerHTML = userMoney;
		document.getElementById("lawyerPrice").innerHTML = "Money: " + lawyerCost;
		document.getElementById("lawyerIncome").innerHTML = "Lawyer Income: " + lawyerIncome;
		document.getElementById("numLawyer").innerHTML = "Lawyers: " + lawyers;
		document.getElementById("alert").innerHTML = " ";
	} else {
		document.getElementById("alert").innerHTML = "You don't have enough money for a Lawyer!!!";
	}
}

function lawyer() {
	lawyerTotal = lawyerIncome * lawyers;
	userMoney = userMoney + lawyerTotal;
	document.getElementById("money").innerHTML = userMoney;
	document.getElementById("lawyerIncome").innerHTML = "Lawyer Income: " + lawyerTotal;
}

//sales people functions
function buySalesPeople() {
	if (userMoney >= salesPeopleCost) {
		userMoney = userMoney - salesPeopleCost;
		salesPeople = salesPeople + 1
		salesPeopleCost = salesPeopleCost * 3 / disaccountDevision;
		document.getElementById("money").innerHTML = userMoney;
		document.getElementById("salesPeoplePrice").innerHTML = "Money: " + salesPeopleCost;
		document.getElementById("salesPeopleIncome").innerHTML = "Sales People Income: " + salesPeopleIncome;
		document.getElementById("numSalesPeople").innerHTML = "Sales People: " + salesPeople;
		document.getElementById("alert").innerHTML = " ";
	} else {
		document.getElementById("alert").innerHTML = "You don't have enough money for a Sales Person!!!";
	}
}

function salesPeoples() {
	salesPeopleTotal = salesPeopleIncome * salesPeople;
	userMoney = userMoney + salesPeopleTotal;
	document.getElementById("money").innerHTML = userMoney;
	document.getElementById("salesPeopleIncome").innerHTML = "Sales People Income: " + salesPeopleTotal;
}

//celebrity functions
function buyCelebrity() {
	if (userMoney >= celebrityCost) {
		userMoney = userMoney - celebrityCost;
		celebrities = celebrities + 1
		celebrityCost = celebrityCost * 3 / disaccountDevision;
		document.getElementById("money").innerHTML = userMoney;
		document.getElementById("celebrityPrice").innerHTML = "Money: " + celebrityCost;
		document.getElementById("celebrityIncome").innerHTML = "Celebrity Income: " + celebrityIncome;
		document.getElementById("numCelebrity").innerHTML = "Celebrities: " + celebrities;
		document.getElementById("alert").innerHTML = " ";
	} else {
		document.getElementById("alert").innerHTML = "You don't have enough money for a Celebrity!!!";
	}
}

function celebrity() {
	celebrtityTotal = celebrityIncome * celebrities;
	userMoney = userMoney + celebrityTotal;
	document.getElementById("money").innerHTML = userMoney;
	document.getElementById("celebrityIncome").innerHTML = "Celebrity Income: " + celebrityTotal;
}

//disaccount variables
var disaccountDevision = 1;
var disaccountCost = 75000; //change//
//var salesPeopleTotal = salesPeopleIncome * salesPeople;//

//disaccount functions
function increaseDisaccountOff() {
	if (userIQ >= disaccountCost) {
		disaccountDevision = disaccountDevision + 1;
		disaccountCost = disaccountCost * 1000000;
		document.getElementById("disaccountPrice").innerHTML = "IQ: " + disaccountCost;
		document.getElementById("disaccount").innerHTML = disaccountDevision;
		document.getElementById("alert").innerHTML = " ";
	} else {
		document.getElementById("alert").innerHTML = "You don't have enough IQ for a increase Disaccount!!!";
	}
}

/*
//library variables
var libraryLevel = 0;
var libraryIncome = 39030;
var libraryCost = 1500000;
var libraryUpgrade = libraryCost * 2;
var libraryTotal = libraryIncome * libraryLevel;
var upgradeButton = document.getElementById("buyL");

var ownLibrary = false;

//library functions
function buyLibraryUpgrade() {
	if (userMoney >= libraryUpgrade) {
		userMoney = userMoney - libraryUpgrade;
		libraryLevel = libraryLevel + 1
		libraryUpgrade = libraryUpgrade * 5
		document.getElementById("money").innerHTML = "Money: " + userMoney;
		document.getElementById("libraryPrice").innerHTML = "Money: " + libraryUpgrade;
		document.getElementById("libraryIncome").innerHTML = "Library Income: " + libraryIncome;
		document.getElementById("libraryLevel").innerHTML = "Library Level: " + libraryLevel;
		document.getElementById("alert").innerHTML = " ";
	} else {
		document.getElementById("alert").innerHTML = "You don't have enough money for a Library Level Up!!!";
	}
}

function library() {
	libraryTotal = libraryIncome * libraryLevel;
	userMoney = userMoney + libraryTotal;
	document.getElementById("money").innerHTML = "Money: " + userMoney;
	document.getElementById("libraryIncome").innerHTML = "Library Income: " + libraryTotal;
}

function buildLibrary() {
	if (userMoney >= libraryCost) {
		if (upgradeButton.id == "buyL") {
		userMoney = userMoney - libraryCost;
		libraryLevel = libraryLevel + 1
		libraryCost = libraryCost * 2
		document.getElementById("money").innerHTML = "Money: " + userMoney;
		document.getElementById("libraryPrice").innerHTML = "Money: " + libraryUpgrade;
		document.getElementById("libraryIncome").innerHTML = "Library Income: " + libraryIncome;
		document.getElementById("libraryLevel").innerHTML = "Library Level: " +libraryLevel;
		
		upgradeButton.id = "upgrader";
		upgradeButton.innerHTML = "Already built";
		document.getElementById("ranker").hidden = false;
		document.getElementById("ranker").Style.display = "visible";

		document.getElementById("alert").innerHTML = " ";
}
		
		if (upgradeButton.id != "buyL"){
		document.getElementById("alert").innerHTML = "You've already built the Library!!!";
	 }
	} else {
		document.getElementById("alert").innerHTML = "You don't have enough money to build the Library!!!";
 }
}*/

/*
function totalProduction() {
	var workerProduction = parseInt(document.getElementById("workerIncome").innerHTML);
	var librarianProduction = parseInt(document.getElementById("librarianIncome").innerHTML);
	var professorProduction = parseInt(document.getElementById("professorIncome").innerHTML);
	var lawyerProduction = parseInt(document.getElementById("lawyerIncome").innerHTML);
	var salesPeopleProduction = parseInt(document.getElementById("salesPeopleIncome").innerHTML);
	document.getElementById("totalIncome").innerHTML = workerProduction + librarianProduction + professorProduction + lawyerProduction + salesPeopleProduction;
}
*/

var tI = document.getElementById("tI");

function totalIncome() {
	workerTotal = workerIncome * workers;
	librarianTotal = librarianIncome * librarians;
	professorTotal = professorIncome * professors;
	lawyerTotal = lawyerIncome * lawyers;
	salesPeopleTotal = salesPeopleIncome * salesPeople;
	celebrityTotal = celebrityIncome * celebrities;
	
	tI.innerHTML = workerTotal + librarianTotal + professorTotal + lawyerTotal + salesPeopleTotal + celebrityTotal;
}

//interval functions
window.setInterval(function() {
    worker();
	librarian();
	professor();
	lawyer();
	salesPeoples();
	celebrity();
	//library();
	totalIncome();
   }, 1000);
   
   var winFunc = window.setInterval(function() {
	   if (userMoney >= 10000000) {
		   var alerter = document.getElementById("alert");
		   alerter.style.color = "blue";
		   alerter.innerHTML = "Congratulations, you have beaten the game!!!";
		   alerter.style.fontSize = "25px";
		   
		   var allButtons = document.getElementById("work");
		   allButtons.remove();
		   
		   allButtons = document.getElementById("study");
		   allButtons.remove();
		   
		   allButtons = document.getElementById("buyWorkerButton");
		   allButtons.remove();
		   
		   allButtons = document.getElementById("buyLibarianButton");
		   allButtons.remove();
		   
		   allButtons = document.getElementById("buyProfessorButton");
		   allButtons.remove();
		   
		   allButtons = document.getElementById("buyLawyerButton");
		   allButtons.remove();
		   
		   allButtons = document.getElementById("buySalesButton");
		   allButtons.remove();
		   
		   allButtons = document.getElementById("buyCelebrityButton");
		   allButtons.remove();
		   
		   allButtons = document.getElementById("buyDDButton");
		   allButtons.remove();
		   
		   allButtons = document.getElementById("workerPrice");
		   allButtons.remove();
		   
		   allButtons = document.getElementById("librarianPrice");
		   allButtons.remove();
		   
		   allButtons = document.getElementById("professorPrice");
		   allButtons.remove();
		   
		   allButtons = document.getElementById("lawyerPrice");
		   allButtons.remove();
		   
		   allButtons = document.getElementById("salesPeoplePrice");
		   allButtons.remove();
		   
		   allButtons = document.getElementById("CelebrityPrice");
		   allButtons.remove();
		   
		   allButtons = document.getElementById("disaccountPrice");
		   allButtons.remove();
		   clearInterval(winFunc);
    }
   }, 1);
