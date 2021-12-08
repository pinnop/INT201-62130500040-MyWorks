let profiles = [
    {
        id: "kit",
        name: "กฤตย์ จีรพัฒนานุวงศ์",
        img: "./imgs/kit.jpg",
        info: [
            "Name: กฤตย์ จีรพัฒนานุวงศ์",
            "NickName: Kit",
            "Age: 26 years old",
            "Position: Vocalist"
        ],
    },

    {
        id: "ohm",
        name: "กิจฎิเมธ ชาญพานิช",
        img: "./imgs/ohm.jpg",
        info: [
            "Name: กิจฎิเมธ ชาญพานิช",
            "NickName: Ohm",
            "Age: 26 years old",
            "Position: Bass"
        ],
    },

    {
        id: "seng",
        name: "วิศรุต ปฐมสิริไพศาล",
        img: "./imgs/seng.jpg",
        info: [
            "Name: วิศรุต ปฐมสิริไพศาล",
            "NickName: Seng",
            "Age: 26 years old",
            "Position: Synthesizer"    
        ],
    },

    {
        id: "te",
        name: "เตธนันท์ วงศ์ปรีชาโชค",
        img: "./imgs/te.jpg",
        info: [
            "Name: เตธนันท์ วงศ์ปรีชาโชค",
            "NickName: Te",
            "Age: 26 years old",
            "Position: Drums"     
        ],
    },

    {
        id: "toon",
        name: "พีรพล เอี่ยมจำรัส",
        img: "./imgs/toon.jpg",
        info: [
            "Name: พีรพล เอี่ยมจำรัส",
            "NickName: Te",
            "Age: 25 years old",
            "Position: Drums" 
        ],
    }
];

function onlyAlpha(event) {
    let letterCode = event.keyCode;
    if (letterCode > 31 && (letterCode < 48 || letterCode > 57)) return true;
    return false;
}

let currentPage = 0;

function previousPage() {
    currentPage--;
    if (currentPage < 0) {
        currentPage = 4;
    }
}

function nextPage() {
    currentPage++;
    if (currentPage > 4) {
        currentPage = 0;
    }
}

function randomPage() {
    let newPage;
    while (true) {
        newPage = parseInt(Math.random() * 5);
        if (currentPage != newPage) {
            currentPage = newPage;
            break;
        }
    }
}

document.getElementsByClassName("surprised-btn")[0].addEventListener("click", () => insertInfo("rand"));
document.getElementsByClassName("next-btn")[0].addEventListener("click", () => insertInfo("next"));
document.getElementsByClassName("prev-btn")[0].addEventListener("click", () => insertInfo("prev"));

function insertInfo(para) {
    switch (para) {
        case "rand": randomPage(); break;
        case "next": nextPage(); break;
        case "prev": previousPage(); break;
    }
    let newName = profiles[currentPage];
    document.getElementById("name").innerHTML = newName.Name;
    let aca = document.getElementById("info");
    aca.innerHTML = "";
    for (let i of newName.info) {
        let newList = document.createElement("li");
        newList.innerHTML = i;
        aca.insertBefore(newList, null);
    }
    document.getElementById("img-container").setAttribute("src", newName.img);
    changethumb();
}

function changethumb() {
    for(let i =1; i <= 4; i++){
        nextPage();
        let nextName = document.getElementsByClassName(`thumbnail${i}`)[0];
        nextName.setAttribute("id", profiles[currentPage].id);
        nextName.getElementsByTagName("img")[0].setAttribute("src", profiles[currentPage].img);
        nextName.getElementsByTagName("p")[0].innerHTML = profiles[currentPage].Name;
    }
    nextPage();
}

function search(){
    let result = document.getElementById("name-value").value;
    console.log(result);
    for(let i = 0; i < profiles.length; i++){
        if(profiles[i].name.includes(result)){
            currentPage = i;
            insertInfo("");
        }
    }
}