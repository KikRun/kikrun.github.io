const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let globalIndex = 0;

let baliseImage = document.querySelector(".banner-img");
let baliseText = document.querySelector("#banner > p")

console.log(baliseText)

let arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click", () =>{

	globalIndex++
	if(globalIndex > slides.length-1){
		globalIndex =0
	}

	
	baliseImage.setAttribute("src", "./assets/images/slideshow/"+ slides[globalIndex].image);
	baliseText.innerHTML = slides[globalIndex].tagLine;


	document.querySelector(".dot_selected").classList.remove("dot_selected")


	let dotSelected = document.querySelector(`#dot${globalIndex}`)
	dotSelected.classList.add("dot_selected")


	console.log("Droite");
	console.log(globalIndex)
});


let arrowLeft = document.querySelector(".arrow_left");

arrowLeft.addEventListener("click", () =>{

	globalIndex--
	if(globalIndex < 0){
		globalIndex = slides.length-1
	}

	baliseImage.setAttribute("src", "./assets/images/slideshow/"+ slides[globalIndex].image);
	baliseText.innerHTML = slides[globalIndex].tagLine;

	document.querySelector(".dot_selected").classList.remove("dot_selected")


	let dotSelected = document.querySelector(`#dot${globalIndex}`)
	dotSelected.classList.add("dot_selected")

	console.log("Gauche")
	console.log(globalIndex)
});

//Création des bullet points
let dotsCont = document.querySelector(".dots");
for (let index in slides){
	let dot = document.createElement("i");
	dot.classList.add("dot")
	if(index == 0){
		dot.classList.add("dot_selected")
	}
	dot.id = `dot${index}`
	dot.dataset.id = index
	
	console.log(dot)
	dotsCont.appendChild(dot);

	console.log(dotsCont)
}

console.log(baliseImage)
console.log(globalIndex)
console.log(slides[globalIndex].image)

