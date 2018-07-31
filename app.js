// var star = function()
// {

// 	// one();
// 	// console.log(dummyReturn("fams"));
// 	// console.log(foo())
// 	// console.log(helloWho("famady"))

// 	// console.log(isNumber(4))

// 	// console.log(contraire(false))

// 	// console.log(isEmpty(""))

// 	addClast("div.s","css")
	

// }





// var one = function()
// {
// 	alert('hello')
// };


// var dummyReturn = function(p)
// {

// 	return p

// } 

// var foo = function(){

// 	return "hello"

// }

// var helloWho = function(nom){

// 	return "salut "+nom


// }

// var isNumber = function(n){


// 	if(typeof n === "number")
// 	{
// 		return true
// 	}else
// 	{
// 		return n
// 	}


// }

// var contraire = function(b){

// 	if(b === true || b === false)
// 	{
// 		return b
// 	}else
// 	{
// 		return "Erreur"
// 	}

// }

// var isEmpty = function(p){

// 	if(Array.isArray(p) && p.length == 0)
// 	{
// 		return true
// 	}else if(typeof p === "string" && p.length == 0)
// 	{
// 		return true
// 	}else if(typeof p == 'object' && Object.keys(p) == 0){
// 		return true
// 	}else
// 	{
// 		return false
// 	}


// }

// var addClast =  function(classDefault,addClast)
// {

// 	var elements = document.querySelectorAll(classDefault);

// 	for(i=0; i < elements.length; i++)
// 	{
// 		console.log(elements[i].classList.add(addClast))
// 	}


// }


var elements = document.querySelectorAll('a');



var add = function()
{
	var titre = document.querySelector('h1.titre');

	titre.classList.add('ajoute')
}


var remove = function()
{
	var titre = document.querySelector('h1.titre');

	titre.classList.remove('ajoute')
}


elements[0].addEventListener("click",add)

elements[1].addEventListener("click",remove)


