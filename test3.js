let a = parseFloat(prompt("Бірінші санды енгізіңіз:"));
let b = parseFloat(prompt("Екінші санды енгізіңіз:"));


if (a > b) {
    alert(`${a} саны ${b} санынан үлкен.`);
} else if (a < b) {
    alert(`${a} саны ${b} санынан кіші.`);
} else {
    alert("Сандар тең.");
}


let average = (a + b) / 2;
alert(`Орташа мәні: ${average}`);