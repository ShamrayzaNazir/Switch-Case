// Ternory Opperators
var student = true; // false b likh skty
var message = student ? "student" : "not student";
//        conditions     if          else
console.log("i am ".concat(message));
// swith case
var day = "Monday";
switch (day) {
    case "Sunday":
        console.log("today is holiday");
        break;
    case "Monday":
        console.log("today is working day");
        break;
    default:
        console.log("case not match");
        break;
}
///// Practice
var Name = "Sherry";
switch (Name) {
    case "Shamrayza":
        console.log("Shamrayza");
        break;
    case "Sherry":
        console.log("Yes Sherry");
        break;
    case "Laiba":
        console.log("Laiba");
        break;
    default:
        console.log("Atif");
        break;
}
var Friend = "Iqra";
switch (Friend) {
    case "Iqra":
        console.log("Beat Friend");
        break;
    case "Bisma":
        console.log("Just Friend");
        break;
    case "Mehak":
        console.log("This Is Czn");
        break;
    case "Mehwish":
        console.log("Also Czn");
        break;
    default:
        console.log("No One Here.");
        break;
}