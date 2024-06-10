//your JS code here. If required.
let text = document.getElementById("text");
let delay = document.getElementById("delay");

let output = document.getElementById("output");

function getData(dataId){
	return new Promise((resolve,reject)=>{
		setTimeOut(()=> {
			output.innerText = text;
		}, 3000);	
	});
}

async callGetdata(){
	await getData();
}