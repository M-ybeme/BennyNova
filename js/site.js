// controler function
function getNumbers() {
    
    
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;


    // ------parse numbers

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

        let numbers = generateNumbers(startValue, endValue);

        //let numbersRev = generateNumbersRev(startValue, endValue);


        displayValues(numbers);
        displayValues(numbers.reverse());
       
    } else {
        swal.fire({
            backdrop: false,
            title: 'Oops',
            text: "You can only use numbers",
        });

    }
}

//generate lsit of numbers
//our buisness logic function
function generateNumbers(start, stop) {
    let numbers = [];
    

    for (let i = start; i <= stop; i++) {
        numbers.push(i);
    }

    return numbers;
}

// function generateNumbersRev(start, stop) {
//     let numbersRev = [];

//     for (let index = start; index >= stop; index--) {
//         numbersRev.push(index);
//     }
//     return numbersRev;
// }



//display the list of numbers
//view function
//bold  and red the even numbers
//odd numbers blue and 
function displayValues(numArry) {
    //my template
    //<div class="col">1</div>

     //get results area
    //insert value
    let results = document.getElementById("results")
    results.innerHTML =""
    
    for (let index = 0; index < numArry.length; index++) {

       
        //creat div tag
        let div = document.createElement("div");

        //I get the value in the array at the current index
        div.innerHTML = numArry[index];

        //add class
        div.classList.add("col");
        if ([index] % 2 == 0) {
            div.classList.add("odd"); 
        } else {
            div.classList.add("even");
        }
        //if number is odd 
        
        //if number is even
        

        //append to page
        results.appendChild(div);
    }
}
