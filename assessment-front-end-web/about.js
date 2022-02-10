



function handleSubmit(evt) {
	evt.preventDefault(alert("You have submitted your form"));
	
	console.log('form submit');
}
function alert(){
	alert("You have submitted your form");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.getElementById("subButton").addEventListener("click", alert);

