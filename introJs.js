const titi = "phrase1";
const tutu = 'phrase2';

// console.log(titi, tutu)

const variableArray = ['elem1', 'elem2', titi];

//console.log(variableArray)
//console.log(variableArray[1])


const exemple1 = 5 + 5
const exemple2 = "5" + "5"
const exemple3 = "a" + "a"

//console.log("exemple1 :", exemple1)
//console.log("exemple2 :", exemple2)
//console.log("exemple3 :", exemple3)

function disBonjour(prenom, nom) {
//	return 'Bonjour ' + prenom + ' ' + nom
  	return `Bonjour ${prenom} ${nom}`
}

// console.log(disBonjour('loan', 'denblyden'))
//console.log(disBonjour('mehdi , willems'))
//console.log(disBonjour('Allan'))


 // < : inférieur
 // <= : inférieur ou egale
 // > : suppérieur
 // >= : suppérieur ou egale
 // == : egale
 // === : strictement egale

const nombre = 4

if (nombre < 5) {
	//console.log(nombre, 'est inférieur a 5')
} else {
//	console.log(nombre, 'est supérieur a 5')
}



function bigger(nombre1, nombre2) {

	if (nombre1 > nombre2) {
  	return `${nombre1} est plus grand que ${nombre2}`
  } else if (nombre1 == nombre2)  {
    return `${nombre2} et ${nombre1} sont égaux`
  } else {
    return `${nombre2} est plus grand que ${nombre1}`
  }
  
}

// console.log(bigger(5545, 11455)) // 15 est plus grand que 5
// console.log(bigger(25, 15)) // 25 est plus grand que 15

// console.log(bigger(25, 25)) // 25 et 25 sont egales

let i = 0
while (i <= 10) {
	 // console.log("boucle n°", i)
  i += 1
}


function sayMany(nombre1, phrase1) {
  let i = 1
 	while (i <= nombre1) {
  	//console.log(phrase1)
    i += 1  
	}
}

function removeFirstChar(nombre, phrase) {
 return phrase.slice(nombre)
}

function removeLastChar(nombre, phrase) {
 return phrase.slice(0, nombre)
}


function removeTortue(villes) {
return villes.filter(word => word.length > 6)
}

const removeTortue2 = (villes) => {
	// return villes.filter(ville => ville.length )
	
  return villes.filter(ville => {
  	console.log("ville:",ville)
  	return ville.length 
  })

} 
 

const tableau = ['paris', 'bruxelles', 'lille', 'tortue']
console.log('resultat', removeTortue2(tableau))



function hello(prenom) {
	console.log("hello" + prenom)
}

const hello2 = prenom => {
	console.log('hello2' + prenom)
}



 // < : inférieur
 // <= : inférieur ou egale
 // > : suppérieur
 // >= : suppérieur ou egale
 // == : egale
 // === : strictement egale
 // != : différent
 // !== : strictement différent


const removeTortue2 = (villes) => {
	// return villes.filter(ville => ville.length )
  
  return villes.filter((ville) => {
		return ville !== 'tortue' && ville !== 'bruxelles' // condition
  })

} 
 
const tableau = ['paris', 'bruxelles', 'lille', 'tortue']
console.log('resultat', removeTortue2(tableau))

// || = OU
// && = ET

if ((1 < 2 && 5 < 3 && 5 > 1) || 5 > 1) {
	console.log("toto")
}


if (51 > 2 || 1 < 0) {
  console.log("tata")
}

