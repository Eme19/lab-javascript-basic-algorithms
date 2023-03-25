// Iteration 1: Names and Input
let Hacker1= "Emeka";
let Hacker2= "Leftt";
// Iteration 2: Conditionals


console.log("The driver's name is Emeka")
console.log("The navigator's name is Leftt")

if (Hacker1.length > 5) {
console.log("The driver hagits the longest name, it has E character")
}
else if (Hacker2.length < 5) {
console.log("It seems that the navigator has the longest name, it has T character")
} else {
   console.log ("Wow, you both have equally long names, EE characters!")
}


// Iteration 3: Loops

Hacker1= "Emeka";
const splitString= Hacker1.split('');
const arrayjoin
= splitString.join(' ');
const upperCasem = arrayjoin.toUpperCase();
console.log(upperCasem)



Hacker2= "Leftt";
const mysplitString= Hacker2.split("");
const arrayreverse
= mysplitString.reverse();
const joinarray = arrayreverse.join(" ");
console.log(joinarray)


//Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie magna et dignissim facilisis. Aliquam vitae augue ornare, pulvinar nulla at, scelerisque quam. Ut malesuada fringilla massa, blandit dapibus nisl varius vel. Aenean vel venenatis augue, et suscipit dui. Mauris eleifend varius nisi ac pellentesque. In hendrerit, diam vel tempus vulputate, odio mi pellentesque augue, sed bibendum sem nisl id ipsum. Sed vel lectus sit amet enim tincidunt dapibus. Vestibulum semper, felis quis aliquam tristique, lectus felis ornare est, sodales cursus nunc justo sed dolor. Sed accumsan a augue nec luctus. Integer volutpat leo odio, vitae sollicitudin mauris auctor eget. Cras ullamcorper, nunc ac varius lobortis, dolor turpis elementum justo, quis dictum diam sem id turpis. Vivamus pretium pellentesque dolor, et eleifend sapien feugiat id. Donec et diam ut lectus condimentum semper sed id elit. Quisque id sodales libero. Etiam fermentum sagittis ultrices. Curabitur pulvinar ullamcorper accumsan. Pellentesque ac leo viverra, scelerisque nulla non, congue justo. In velit arcu, elementum eu condimentum vitae, scelerisque id lectus. Donec convallis lacus eget ipsum placerat, ut semper lorem sollicitudin. Suspendisse eget facilisis sapien. Cras eu scelerisque augue. Mauris condimentum elit et lacinia mattis. Maecenas at augue auctor, consequat nulla vel, lobortis urna. Donec gravida, dolor ut sollicitudin euismod, dui nibh blandit purus, nec blandit urna erat eget leo. Nullam tortor quam, laoreet consequat urna in, scelerisque consequat nisl. Vestibulum massa nisl, luctus et nibh non, consequat imperdiet diam. Nullam velit neque, imperdiet ac quam sit amet, aliquet aliquam risus. Proin sed dolor sed velit aliquam convallis. Sed et libero enim. In a mi dictum, laoreet lorem vel, scelerisque urna. Donec diam felis, condimentum in lectus eu, faucibus vehicula lectus. Duis luctus urna mauris, quis hendrerit nisi hendrerit et. Proin vitae interdum metus, vitae maximus nibh. Suspendisse potenti. Integer tincidunt urna dui, vitae aliquam ipsum faucibus id. Nunc mollis dui metus, id cursus arcu scelerisque a. Sed augue mi, feugiat a semper at, lacinia sit amet dolor. Sed elementum est eu nisi molestie ultricies. Integer non dolor eu quam lacinia porttitor."

const counT = longText.split('et').length
console.log(longText.length); 
console.log(counT)


//Bonus 2

function phraseToCheck(strng) {
   const lengg = strng.length;
     
   for (let i = 0; i < lengg / 2; i++){
     
   if ( strng[i] !== strng[lengg - 1 - i]) {
   return false
     }
    } 
     return true;
   }
   
   const str1 = "A man, a plan, a canal, Panama!";
   const str2 = "Amor, Roma";
   const str3 = "race car";
   const str4= "stack cats";
   const str5= "step on no pets";
   const str6= "taco cat";
   const str7= "nursesrun";
   
   
   console.log(phraseToCheck(str1))
   console.log(phraseToCheck(str2))
   console.log(phraseToCheck(str3))
   console.log(phraseToCheck(str4))
   console.log(phraseToCheck(str5))
   console.log(phraseToCheck(str6))
   console.log(phraseToCheck(str7))
   
