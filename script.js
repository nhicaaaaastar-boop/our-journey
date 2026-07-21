// ===============================
// 💸 LOAN TRACKER
// ===============================


const loans = document.querySelectorAll(".loan");


const totalLoan = 44310;

const paymentAmount = 7385;



function updateLoan(){


    let paid = 0;



    loans.forEach(function(loan){


        if(loan.checked){

            paid += paymentAmount;

        }


    });



    let percent = (paid / totalLoan) * 100;



    const loanBar = document.getElementById("loanProgress");


    const loanText = document.getElementById("loanText");



    if(loanBar){

        loanBar.style.width = percent + "%";

    }



    if(loanText){

        loanText.innerHTML =
        "₱" + paid.toLocaleString() +
        " / ₱44,310 Paid";

    }


}







loans.forEach(function(loan){


    loan.addEventListener(
        "change",
        updateLoan
    );


});









// ===============================
// 📊 JOURNEY PROGRESS
// ===============================


const tasks = document.querySelectorAll(".task");




function updateProgress(){


    let completed = 0;



    tasks.forEach(function(task){


        if(task.checked){

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




    const progressBar =
    document.getElementById("overallProgress");



    const progressText =
    document.getElementById("overallText");




    if(progressBar){

        progressBar.style.width =
        percent + "%";

    }




    if(progressText){

        progressText.innerHTML =
        percent + "% Completed";

    }



}







tasks.forEach(function(task){


    task.addEventListener(
        "change",
        updateProgress
    );


});









// ===============================
// START PAGE
// ===============================


updateLoan();

updateProgress();
