"use strict";

const cross = document.querySelector(".cross");
const dark = document.querySelector(".dark");
const createNote = document.querySelector(".create-Note");
const addNote = document.querySelector(".btn");
const textInput = document.querySelector(".input");
const placeForNotes = document.querySelector(".place-for-notes");

const color = ["#D53032", "purple", "lime", "gold", "pink", "aqua", "orange", "green"];
const deg = ["-5", "-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5"];
const margin = ["1px", "2px", "3px", "4px", "5px"];

let x = 10;
function positionGenerate(array){
	return array[Math.floor(Math.random()*array.length)];
}

cross.addEventListener("click", () => {
	dark.style.display = "none";
	createNote.style.display = "none";
} )
addNote.addEventListener("click", () => {
	dark.style.display = "";
	createNote.style.display = "";
} )

textInput.addEventListener("keydown", (event) => {
	if(event.key == "Enter"){
		let note = document.createElement("div");
		note.classList.add("note");

		note.style.background = positionGenerate(color);
		note.style.transform = 'rotate('+positionGenerate(deg)+'deg)';
		note.style.margin = positionGenerate(margin);
		
		note.innerHTML = textInput.value;

		note.addEventListener("dblclick", () => note.remove())

		placeForNotes.append(note);
	}
})



console.log(positionGenerate(deg));