class Subject {
    constructor(id, name, credit, grade) {
        this._id = id;
        this._name = name;
        this._credit = credit;
        this._grade = grade;
    }
}

class Student {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }
}

class Calculate {
    constructor(subject) {
        this._subject = subject;
    }

    getTotalCredits(){
        let total = 0;
        for(i of this._subject){
            total += i._credit;
        }
        return total;
    }

    getGPA(){
        let gpa = 0;
        let totalCredit = 0
        for(i of this._subject){
            totalCredit += i._credit;
        }
        for(i of this._subject){
            let grade = 0;
            switch(i._grade.toLowerCase()) {
                case "a": grade = 4; break;
                case "b+": grade = 3.5; break;
                case "b": grade = 3; break;
                case "c+": grade = 2.5; break;
                case "c": grade = 2; break;
                case "d+": grade = 1.5; break;
                case "d": grade = 1; break;
                case "f": grade = 0; break;
            }
            gpa += i._credit*grade;
        }
        let gpax = gpa/totalCredit;
        return gpax.toFixed(2)
    }
}

let me = new Student("62130500040","Noppasorn Techarungruengwit");
let subject = [ gen101 = new Subject("GEN101", "Physical Education", 1, "A"),
                gen121 = new Subject("GEN121", "Learning and Problem Solving Skills", 3, "B"),
                int100 = new Subject("INT100", "IT Fundamental", 3, "A"),
                int101 = new Subject("INT101", "Computer Programming I", 3, "C"),
                int102 = new Subject("INT102", "Web Technology", 1, "B+"),
                int114 = new Subject("INT114", "Discrete Mathematics for Information Technology", 3, "B+"),
                lng220 = new Subject("LNG220", "Academic English", 3, "B"),
            ];

let idTag = document.getElementById("student-id");
idTag.innerText = "Student Id : " + me._id;
let nameTag = document.getElementById("student-name");
nameTag.innerText = "Student Name : " + me._name;

let teble1 = document.getElementsByClassName("list-regis-courses");
for (i = 0; i<subject.length; i++){
    let row = teble1[0].insertRow(i+1);
    let cellId = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellCredit = row.insertCell(2);
    let cellGrade = row.insertCell(3);
    cellId.innerHTML = subject[i]._id;
    cellName.innerHTML = subject[i]._name;
    cellCredit.innerHTML = subject[i]._credit;
    cellGrade.innerHTML = subject[i]._grade;
}

let teble2 = document.getElementsByClassName("semester-regis-courses")[0].lastElementChild;
let row = teble2.insertRow(1);
let cellTotal = row.insertCell(0);
cellTotal.innerHTML = new Calculate(subject).getTotalCredits() ;
let cellGPA = row.insertCell(1);
cellGPA.innerHTML = new Calculate(subject).getGPA();