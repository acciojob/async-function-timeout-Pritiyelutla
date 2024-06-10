let text = document.getElementById("text");
let delay = document.getElementById("delay");

let output = document.getElementById("output");
let btn = document.getElementById("btn");

btn.addEventListener("click",callGetdata);

function getData(){
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
            console.log("Before");
            output.innerText = text.value;
            console.log(output.innerText);
            console.log(text.value);
        }, delay.value);
	});
}

async function callGetdata(){
	await getData();
}