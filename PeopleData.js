var nextPersonId = 0;
var firstNames = ["Anand","Aaron","Abigail","Adam","Addison","Abhishek","Aiden","Alexa","Avinash","Alexis","Alice","Allison","Alyssa","Amelia","Andrew","Angel","Anna","Annabelle","Anthony","Aria","Ariana","Arianna","Asher","Ashley","Aubree","Aubrey","Audrey","Austin","Autumn","Ava","Avery","Ayden","Bella","Benjamin","Bentley","Bunty","Brandon","Brayden","Brianna","Brody","Brooklyn","Caleb","Capoor","Cameron","Camila","Caroline","Carson","Carter","Charles","Charlotte","Chase","Chloe","Christian","Christopher","Claire","Colton","Connor","Cooper","Daniel","David","Dominic","Dylan","Easton","Eleanor","Eli","Elijah","Elizabeth","Ella","Ellie","Emily","Emma","Eva","Evan","Evelyn","Faith","Gabriel","Gabriella","Gavin","Genesis","Gianna","Grace","Grayson","Hadley","Hailey","Hannah","Harper","Henry","Hudson","Hunter","Ian","Isaac","Isabella","Isabelle","Isaiah","Jace","Jack","Jackson","Jasmine","Jason","Jaxon","Jaxson","Jayden","Jeremiah","John","Jonathan","Jordan","Jose","Joseph","Joshua","Josiah","Juan","Julia","Julian","Justin","Katherine","Kayden","Kaylee","Kennedy","Kevin","Khloe","Kylie","Landon","Lauren","Layla","Leah","Leo","Levi","Lillian","Lily","Lincoln","Logan","London","Lucas","Lucy","Luis","Luke","Lydia","Mackenzie","Madeline","Madelyn","Madison","Matthew","Maya","Melanie","Mia","Mila","Naomi","Natalie","Nathan","Nathaniel","Nevaeh","Nicholas","Nolan","Nora","Oliver","Olivia","Owen","Paisley","Parker","Penelope","Peyton","Piper","Riley","Robert","Ruby","Ryan","Ryder","Sadie","Samantha","Samuel","Sarah","Savannah","Scarlett","Sebastian","Serenity","Skylar","Sofia","Sophia","Sophie","Stella","Taylor","Thomas","Tristan","Tyler","Victoria","Violet","Vivian","Wyatt","Xavier","Zachary","Zoe","Zoey"];
var lastNames = ["Avey", "Crofoot", "Flor", "Batthini", "Zoller", "Rosson", "Coomes", "Wilken", "Withey", "Ojeda", "Mennella", "Gade", "Puccio", "Zimmerer", "Cottrell", "Bridgman", "Gershman", "Tinoco", "Ayoub", "Fournier", "Marcella", "Melrose", "Lafontaine", "Oberoy", "Cioffi", "Sands", "Lei", "Cardoso", "Dela", "Metcalfe", "Ethridge", "Fryer", "Warden", "Madson", "Gonsales", "Tobey", "Kapoor", "Gallion", "Thibault", "Brockington", "Baney", "Haddox", "Kang", "Galyean", "Riccio", "Lake", "Mirabella", "Frechette", "Rearick", "Carmouche"];
var posterWidth = 400;
var posterHeight = 400;
var _canvas;
function makePoster(color) {
    if (!_canvas) {
        _canvas = document.createElement("canvas");
        _canvas.width = posterWidth;
        _canvas.height = posterHeight;
    }
    var ctxt = _canvas.getContext("2d");
    ctxt.fillStyle = color;
    ctxt.fillRect(0, 0, posterWidth, posterHeight);
    return _canvas.toDataURL();
}

var posterColors = [
    [68, 34, 87], [100, 66, 119], [132, 98, 151],
    [164, 162, 165], [196, 194, 197], [228, 226, 229],
    [220, 77, 6], [252, 109, 38], [255, 141, 70]
];
var posters = posterColors.map(function (color) {
    return makePoster("rgb(" + color.join(", ") + ")");
});

function randomInt(first, last) {
    return Math.round(Math.random() * (last - first)) + first;
}

function randomElement(array) {
    return array[randomInt(0, array.length - 1)];
}

function genArray(minLength, maxLength, genElement) {
    var len = randomInt(minLength, maxLength);
    var result = new Array(len);
    for (var i = 0; i < len; i++) {
        result[i] = genElement();
    }
    return result;
}

function genName() {
    return randomElement(firstNames) + " " + randomElement(lastNames);
}

function genPhoneNumber() {
    return "(919) 123-4" + randomInt(100, 199);
}
function genEmailAddress(){
    return "somemailid@outlook.com";
}
function genPerson() {
    return {
        id: nextPersonId++,
        name: genName(),
        statusHoursAgo: randomElement([2, 3, 4, 5, 6, 7, 8, 9]),
        picture: randomElement(posters),
        mobilePhone: genPhoneNumber(),
        workPhone: genPhoneNumber(),
        email: genEmailAddress()
    };
}

var personCount = 50;
var people = genArray(personCount, personCount, genPerson);

module.exports = {
    people: people
};