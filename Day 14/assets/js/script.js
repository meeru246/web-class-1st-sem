const input = document.
getElementById("input");
const outcome = document.
getElementById("outcome");
const btnClick = document.
getElementById("btn");

//console.log(input);

//syntax:
//element:addEventListener
//(event, callback function)

// btnClick.addEventListener("click",function()
// {
//     console.log("Button clicked");
// });

function clickFunc(){
    console.log("Button clicked");
};
btnClick.addEventListener
("click", clickFunc);

input.addEventListener("input",
    function(){
        const inputValue = input.value;
        const outcomeValue = document.
        querySelector("#outcome . value");
        outcomeValue.innerText = inputValue;
    }
);
