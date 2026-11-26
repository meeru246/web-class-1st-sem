const decrementBtn =document.
querySelector("#counter.decrement");
const incrementBtn =document.
querySelector("#counter.increment");
const counterInput =document.
querySelector("#counter input");

counterInput.value = 0;

function increaseCount()
{
    let value = counterInput.value;
    console.log(typeof value);
    if(typeof value === "string")
    {
        value = parseInt(value);
    }

    counterInput.value = value + 1;
}


incrementBtn.addEventListener
("click",increaseCount);