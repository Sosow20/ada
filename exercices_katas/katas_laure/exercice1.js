//Echauffements

/*const prénom = "Sofia";
const nom = "Cherifi";
 console.log("je m'appelle", prénom, nom)

//Fonction Add

 function add(number1, number2) {
     return number1 + number2;
 }
 console.log(add(2, 3))

//Fonction Equal

function Equal(number1, number2) {
    console.log(number1,number2)
if (number1 === number2) {
    return true;
}
return false;
}
console.log(Equal(2, 3))
console.log(Equal(3, 3))


//Etape 1 : Fonction

function annoncerChoix (number) {

    return `tu as choisi le numéro ${number}`
}
console.log(annoncerChoix(3));

//Etape 2 : Condition

function servirBoisson (number) {

    if (number === 1){
        return 'Voici un jus de mangue 🥭'
    }
    else if (number === 2){
        return 'Voici un jus de pomme 🍏'
    }
    else if (number === 3){
        return 'Voici un jus de pastèque 🍉'
    }
    else {
        return "Désolé, je n'ai pas cette boisson 😢"
    }
}
console.log(servirBoisson(""))

//Etape 3 : Boucle et Tableau

const boissons = ["jus de mangue 🥭", "jus de pomme 🍏", "jus de pastèque 🍉","jus d'orange 🍊", "jus de myrtille 🫐", "jus de raisin 🍇","jus d ananas 🍍", "jus de citron vert 🍈", "jus de fraise 🍓"]

for (let i = 0; i < boissons.length; i++){
    console.log(boissons[i])
}

// Bonus

let boissons = ["jus de mangue 🥭", "jus de pomme 🍏", "jus de pastèque 🍉","jus d'orange 🍊", "jus de myrtille 🫐", "jus de raisin 🍇","jus d ananas 🍍", "jus de citron vert 🍈", "jus de fraise 🍓"]

boissons.push("jus de kiwi 🥝")
for (let i = 0; i < boissons.length; i++){
console.log(boissons[i])
}



//Etape 4 : Boucle dans une fonction

function choisirBoisson(boissonList,numberBoisson) {
    let message = boissonList[numberBoisson - 1]

    if (numberBoisson < 10 && numberBoisson > 1 ) {
        return "voici " + message
    } else {
        return "Le numéro choisi est invalide. Essaie entre 1 et 9"
    }

}

let boissons = ["jus de mangue 🥭", "jus de pomme 🍏", "jus de pastèque 🍉","jus d'orange 🍊", "jus de myrtille 🫐", "jus de raisin 🍇","jus d ananas 🍍", "jus de citron vert 🍈", "jus de fraise 🍓"]

   console.log(choisirBoisson(boissons,5))

   */

//Etape 5 : Appel de fonction dans une autre fonction
    
let boissons = ["jus de mangue 🥭", "jus de pomme 🍏", "jus de pastèque 🍉","jus d'orange 🍊", "jus de myrtille 🫐", "jus de raisin 🍇","jus d ananas 🍍", "jus de citron vert 🍈", "jus de fraise 🍓"]


function distributeurDeBoissons(liste , numero) {
     annoncerChoix(numero);
     choisirBoisson(liste, numero);
}

distributeurDeBoissons(boissons, 9);
distributeurDeBoissons(boissons, 15);
    


    







    
    





