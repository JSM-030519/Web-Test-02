function AlertBox() {
 	alert("Button click successful!")
 }

 function ConfirmBox() {
 	if (confirm("Press a button")) {
 		txt = "You pressed OK!";
 	} else {
 		txt = "You pressed Cancel!";
 	}
 	document.getElementById("TextMod1").innerHTML = txt;
 }

function PromptBox() {


 	var person = prompt("Please enter your name", "Jamie Martin");

	 if (person == null || person == ""){
 		txt2 = "User cancelled the prompt, or did not enter anything.";
	 } else {
 		txt2 = "Hello " + person + "! You have successfully activated the prompt box function"
	 }
	 document.getElementById("TextMod2").innerHTML = txt2;
}


