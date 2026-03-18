// Variables
let studentName = "Kashif";
let age = 22;
let isStudent = true;

// Object
let student = {
    name: studentName,
    age: age,
    course: "BS Computer Science",
    skills: ["HTML", "CSS", "JavaScript"]
};

// Display Data
document.getElementById("info").innerHTML =
"Name: " + student.name + "<br>" +
"Age: " + student.age + "<br>" +
"Course: " + student.course + "<br>" +
"Skills: " + student.skills.join(", ");