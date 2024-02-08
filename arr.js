"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
const theFruits=[
	  {name: "apple", state:"raw"},
	  {name: "orange", state:"ripe"},
	  {name: "banana", state:"ripe"},
	  {name: "pineapple", state:"raw"},
	  ]	
	  document.querySelector("button").addEventListener("click",()=>{
		let rawFruits = theFruits.filter((f) => f.state === "ripe");
     console.log(rawFruits);
	  });
	  
	
});