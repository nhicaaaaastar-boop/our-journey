const loans=document.querySelectorAll(".loan");


function updateLoan(){

let paid=0;


loans.forEach(item=>{

if(item.checked){

paid+=7385;

}

});


let percent=(paid/44310)*100;


document.getElementById("loanProgress").style.width=
percent+"%";


document.getElementById("loanText").innerHTML=
"₱"+paid.toLocaleString()+" / ₱44,310 Paid";


}



loans.forEach(item=>{

item.addEventListener("change",updateLoan);

});


updateLoan();
