
//Markov Model
let rm = RiTa.markov(2);

//find some data

let data = document.getElementById("source").innerText;

rm.addText(data);



function preload() {
  result = loadStrings('');
}

function setup(){

	let lines = rm.generate(6);

	let letter = select("#letter");

	letter.child( createP("Dear Bobby,") );

	for (let l = 0; l < lines.length; l ++){ 
		let paragraph = createP(lines[l]);
			letter.child(paragraph);
	}
	
	letter.child( createP("Yours Truly, <br> Hank") )
}
