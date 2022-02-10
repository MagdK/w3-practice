// function addTwoIntegers(firstInteger, secondInteger) {
//     // console.log(firstInteger + secondInteger)
//     // return firstInteger + secondInteger
//     // return "Hello"
//     if(typeof firstInteger === "number" && secondInteger === "number"){
//         return firstInteger + secondInteger
//     } else{
//         return "valamelyik argumentum nem szam ezert a muvelet nem elvegezheto"
//     }
// }

// console.log( addTwoIntegers(12, "13") );
// console.log( addTwoIntegers(1920, 85) );
// console.log( 0 === "0" )





function loadEvent(eventObject) {
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


    let anchors = "";

    for (const sectionElement of listOfSectionElements) {
        // sectionElement.classList.add("newClass"); 
        // anchors = anchors + `<a> ${ sectionElement.id} </a>`;
        anchors += `<a href="#${sectionElement.id}"> ${ sectionElement.id} </a>`;
    }
    console.log(anchors);
    roootElement.insertAdjacentHTML("afterbegin", `<header>${anchors}</header>`)
}
window.addEventListener("load", loadEvent)