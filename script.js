// ===============================
// 💸 LOAN TRACKER
// ===============================


const loans = document.querySelectorAll(".loan");


const totalLoan = 44310;

const paymentAmount = 7385;



function updateLoan(){


    let paid = 0;



    loans.forEach(function(item){


        if(item.checked){

            paid += paymentAmount;

        }


    });



    let percent = (paid / totalLoan) * 100;



    document.getElementById("loanProgress").style.width =
    percent + "%";



    document.getElementById("loanText").innerHTML =
    "₱" + paid.toLocaleString() +
    " / ₱44,310 Paid";



}





loans.forEach(function(item){


    item.addEventListener(
        "change",
        updateLoan
    );


});







// ===============================
// 📊 OVERALL JOURNEY PROGRESS
// ===============================



const tasks = document.querySelectorAll(".task");




function updateProgress(){



    let completed = 0;



    tasks.forEach(function(item){


        if(item.checked){

            completed++;

        }


    });




    let total = tasks.length;



    let percent = 0;



    if(total > 0){

        percent = Math.round(
            (completed / total) * 100
        );

    }




    document.getElementById("overallProgress")
    .style.width =
    percent + "%";



    document.getElementById("overallText")
    .innerHTML =
    percent + "% Completed";



}







tasks.forEach(function(item){


    item.addEventListener(
        "change",
        updateProgress
    );


});








// ===============================
// INITIAL LOAD
// ===============================


updateLoan();

updateProgress();
