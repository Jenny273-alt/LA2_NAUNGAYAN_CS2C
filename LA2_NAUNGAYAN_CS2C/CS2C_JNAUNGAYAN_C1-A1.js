// Persona 1: Student's Information
const name1 = "[Jenny Saquiton Naungayan]";
const birthDate1 = "[June 20, 2004]";
const birthPlace1 = "[Oaig Daya, Candon City, Ilocos Sur, Philippines 2710]";
const address1 = "[Oaig Daya, Candon City, Ilocos Sur, Philippines 2710]";
const course1 = "[Bachelor Of Science in Computer Science]";
const year1 = "2";
const dreamJob1 = "[Software Engineer]";

// Persona 2: Classmate's Information
const name2 = "[Karryle Banasan Lagrimas]";
const birthDate2 = "[July 20, 2005]";
const birthPlace2 = "[San Fernando City, La Union, Philippines 2500]";
const address2 = "[Bugnay, Candon City, Ilocos Sur, Philippines 2710]";
const course2 = "[Bachelor Of Science in Computer Science]";
const year2 = "2";
const dreamJob2 = "[Data Analysis]";

// Persona 3: Classmate's Information
const name3 = "[Renz Galcon Valdez]";
const birthDate3 = "[April 13, 2005]";
const birthPlace3 = "[Resonable Hospital, Candon City, Ilocos Sur, Philippines 2710]";
const address3 = "[Oaig Daya, Candon City, Ilocos Sur, Philippines 2710]";
const course3 = "[Bachelor Of Science in Computer Science]";
const year3 = "2";
const dreamJob3 = "[Game Developer]";


const Name1= "Jenny Saquiton Naungayan";
const classmate2Name = "Karryle Banasan Lagrimas";
const classmate3Name = "Renz Galcon Valdez";

const name1Rearrange = name1.split(" ");
const c1NameRearrange = classmate2Name.split(" ");
const c2NameRearrange = classmate3Name.split (" ");


const studentNameAddC1AddC2 = Name1 + " " + classmate2Name + " " + classmate3Name;
const name1Addname2Addname3 = name1 + " " + classmate2Name +" " + classmate3Name;

//Print Student's Information
console.log(name1.toUpperCase() + " was born " + birthDate1 + " at " + birthPlace1.toUpperCase() + ", and currently living at " + address1.toUpperCase()+".");
console.log(name1.toLowerCase() + " is taking up " + course1.toLowerCase() + " and dreams to be " + dreamJob1 + " after graduation."); 
console.log(name2.toUpperCase() + " was born " + birthDate2 + " at " + birthPlace2.toUpperCase() + ", and currently living at " + address2.toUpperCase()+".");
console.log(name2.toLowerCase() + " is taking up " + course2.toLowerCase() + " and dreams to be " + dreamJob2 + " after graduation."); 

console.log(name3.toUpperCase() + " was born " + birthDate3 + " at " + birthPlace3.toUpperCase() + ", and currently living at " + address3.toUpperCase()+".");
console.log(name3.toLowerCase() + " is taking up " + course3.toLowerCase() + " and dreams to be " + dreamJob3 + " after graduation.");
