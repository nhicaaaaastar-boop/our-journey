const loans = document.querySelectorAll(".loan");
const tasks = document.querySelectorAll(".task");


function updateLoan(){

let paid = 0;

loans.forEach(item=>{

if(item.checked){

paid += 7385;

}

});


let percent = (paid / 44310) * 100;


document.getElementById("loanProgress").style.width =
percent + "%";


document.getElementById("loanText").innerHTML =
"₱" + paid.toLocaleString() +
" / ₱44,310 Paid";


}


function updateOverall(){

let total = tasks.length;
let completed = 0;


tasks.forEach(item=>{

if(item.checked){

completed++;

}

});


let percent = Math.round((completed/total)*100);


document.getElementById("overallProgress").style.width =
percent+"%";


document.getElementById("overallText").innerHTML =
percent+"% Complete";


}



loans.forEach(item=>{

item.addEventListener("change",updateLoan);

});


tasks.forEach(item=>{

item.addEventListener("change",updateOverall);

});


updateLoan();
updateOverall();
