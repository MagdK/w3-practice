// Function/fuggveny, amiben ket egesz szamot osszeadunk. Function name: addTwoIntegers. parameterek: firstInteger, secondInteger. Maga az object az a kapcsos zarojele elejenel kezdodik es a vegevel vegzodik. 

//  function addTwoIntegers(firstInteger, secondInteger) {
    // a log paranccsal megmondjuk, hogy a consolba irja ki 
//     // console.log(firstInteger + secondInteger)

// A return szo a parancs vege, ezutan nem fut tovabb, akarmi kovetkezik is
//     // return firstInteger + secondInteger
//     // return "Hello"

// if else fuggveny/function - logikat adunk hozza, a harom egyenlosegjel osszehasonlitja es meg arra is ranez, hogy mi a primitiv tipusa. 
// Ket & jel && : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
// Logical AND (&&) evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are truthy, the value of the last operand is returned.

//     if(typeof firstInteger === "number" && typeof secondInteger === "number"){
//         return firstInteger + secondInteger
//     } else{
//         return "valamelyik argumentum nem szam ezert a muvelet nem elvegezheto"
//     }
// }

// Mivel az egyik primitiv nem szam, igy nem fogja oket osszeadni
// console.log( addTwoIntegers(12, "13") );

// Mivel mindket primitiv szam, ezert ossze fogja oket adni. Odafenn a return-nel mar meghataroztuk, hogy mit csinaljon. Megmondtuk neki, hogy az addTwoIntergers mit jelent
// console.log( addTwoIntegers(1920, 85) );
// console.log( 0 === "0" )


function loadEvent(eventObject){
    // console.log(eventObject)
    const roootElement = document.getElementById("root");
    // console.dir(document);
    console.dir(roootElement);

    const listOfSectionElements = document.querySelectorAll("section")
    console.log(listOfSectionElements);

    // roootElement.classList.add("newClass");
    // listOfSectionElements[0].classList.add("newClass");
    // listOfSectionElements[1].classList.add("newClass");
    // listOfSectionElements[2].classList.add("newClass");
    // listOfSectionElements[3].classList.add("newClass");


    // Variable-be ures stringeket is menthetunk
    let anchors = "";

    for (const sectionElement of listOfSectionElements) {
        sectionElement.classList.add("newClass"); 
        // anchors = anchors + `<a> ${ sectionElement.id} </a>`;
         // The addition assignment operator (+=) adds the value of the right operand to a variable and assigns the result to the variable. The types of the two operands determine the behavior of the addition assignment operator. Addition or concatenation is possible.
        anchors += `<a href="#${sectionElement.id}"> ${ sectionElement.id} </a>`;
    }
    console.log(anchors);
    roootElement.insertAdjacentHTML("afterbegin", `<header>${anchors}</header>`)
}

window.addEventListener("load", loadEvent);