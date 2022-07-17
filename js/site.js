function getNumbers() {
    
    
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;


    // ------parse numbers

    startValue = parseInt(startValue);
    endValue = paresInt(endValue);
    let outNumber= 0;

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

        for (let i = startValue; i <= endValue; i++) {
        
            outNumber = (outNumber + i);
        }

        document.getElementById("results").innerHTML = outNumber;
    } else {
        alert('Please Enter Numbers');
    }

}

document.getElementbyID('results').innerHTML = outNumber;

function getValue2()
{
    let msg = '';
    msg = document.getElementById("message").value;

    swal.fire(
    {
        backdrop: false,
        title: 'Hundo',
        text: msg
        }
    )
}