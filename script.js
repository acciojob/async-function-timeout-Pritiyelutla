//your JS code here. If required.
let text = document.getElementById("text");
let delay = document.getElementById("delay");

let output = document.getElementById("output");
let btn = document.getElementById("btn");

btn.addEventListener("click",callGetdata);
function getData(dataId){
	return new Promise((resolve,reject)=>{
		setTimeOut(()=> {
			output.innerText = text;
		}, delay);	
	});
}

async callGetdata(){
	await getData();
}