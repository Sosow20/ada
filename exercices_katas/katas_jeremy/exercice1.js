// Écrire une fonction qui prend en paramètre
// un moment de la journée (soit "matin", "midi", "après-midi", "soir")
// "matin" -> "J'ai trop hâte de continuer de coder !"
// "midi" -> "J'ai faim, j'en ai marre des bugs..."
// "après-midi" -> "Tchao les copins"
// "soir" -> "ZzzzZZZzzz"
// Appeler la fonction pour tester tous les cas possibles

// function showEmotion(time_of_day) {
//     if (time_of_day === "matin" ) {
//         console.log(`j'ai trop hâte de continuer de coder !`)
//     }
//     if (time_of_day === "midi") {
//         console.log("j'ai faim, j'en ai marre des bugs...")
//     }
//     if(time_of_day === "après-midi") {
//         console.log("Tchao les copins")
//     }
//     if (time_of_day === "soir")
//         console.log("ZzzzZZZzzz")
// }

// showEmotion("matin")
// showEmotion("midi")
// showEmotion("après-midi")
// showEmotion("soir")


// Écrire une fonction qui prend en paramètre une heure (ex: 9, 12, 18, etc.)
// et qui RETOURNE le moment correspondant
// getMomentFromHour(12) -> "midi"
// getMomentFromHour(18) -> "après-midi"


// function getMomentFromHour(hour){
//     if (hour === 12) {
//         return "midi"
//     }
//       if (hour === 18) {
//         return "après-midi"
//     }
// }
// console.log(getMomentFromHour(12))
// console.log(getMomentFromHour(18))


// function getMomentFromHour(hour) {
//     if (hour <= 12) {
//         return "Morning"
//     }
//     if (hour >= 12) {
//         return "Afternoon"
//     }
// }

// console.log(getMomentFromHour(24) )



// const d = new Date("June 05, 2025 16:18:00");
// let hour = d.getHours();
// let h = addZero(d.getHours());
// let m = addZero(d.getMinutes());
// let s = addZero(d.getSeconds());
// let time = h + ":" + m + ":" + s;





