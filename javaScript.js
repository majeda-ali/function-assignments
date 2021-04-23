/*                  Assignment 1 JS 
          -------------------------------------- 
    The Geometrizer
    Create 2 functions that calculate properties of a circle, using the definitions here.
    Create a function called calcCircumfrence:
    Pass the radius to the function.
    Calculate the circumference based on the radius, and output "The circumference is NN".
    Create a function called calcArea:
    Pass the radius to the function.
    Calculate the area based on the radius, and output "The area is NN".
*/
function calaCircumfrence(radius){
    let Circumfrence = Math.PI * radius  *2 ;
    console.log(`The calaCircumfrence is ${Circumfrence} .`);
}

function CalaArea(radius){
    let Area= Math.PI * (radius * radius)  ;
    console.log(`The Area is ${Area} .`)
}
calaCircumfrence(2);
CalaArea(10);

//============================================== =================== ===========================  ============ 
/*                  Assignment 2 JS 
          -------------------------------------- 
Day Switching
declare a variable named day whose value represents a day in a week.
The code outputs the name of the day based on the value of the day variable by using the switch statement.
so, if the day equals to 5 then the alert function appears with Thursday

Assume that the week days start from Sunday

*/

function dayOfWeek(day){
    let dayName=" ";
switch(day){
  
        case 1: dayName = "Sunday" 
        break;
        case 2: dayName = "Monday";
        break;
        case 3:dayName = "Tuesday";
        break;
        case 4: dayName = "Wednesday";
        break;
        case 5: dayName = "Thursday";
        break;
        case 6: dayName = "Friday"; 
         break;
        case 7:  dayName = "Saturday";
         break;
default :
dayName ="NOT ACCEPT-WRONG ";

}
        console.log(dayName) ;
}

dayOfWeek(8);
//============================================== =================== ===========================  ============ 

/*                  Assignment 3 JS 
          -------------------------------------- 
First Word
 Write an function named the first word accepts one argument named first 
it returns the first word in a string which passed to the function
call the function and alert the result

*/
function firstWord (first){
  
    alert(first.split(" ")[0]);
}

firstWord("JavaScript Assignments ");

//============================================== =================== ===========================  ============ 
/*                  Assignment 4 JS 
          -------------------------------------- 
Primitive Types
Create an anonymous function(arrow) and set it equal to a variable named type1.

The function should:
If passed a number, return the tripled value.
If passed a string, return the string "ARRR!"
If NOT passed a number or string, return the data unchanged.
Show the  value of the variable in the log


 */
let type1 = (input)=>
{
   if (typeof input === "number")
   {
   console.log( input *3);
   } else if (typeof input === "string"){
       console.log("ARRR!");
   } else 
   {
       console.log (input);
   }


}
type1(3);
//============================================== =================== ===========================  ============ 
/*                  Assignment 5 JS 
          -------------------------------------- 
Home Security
Mohammad is outside his home, and he wants to open the door to enter his home
The door has two types of security
a camera to check if he is Mohammad
a key to check if he has the correct key
You have to write a code to check if the door will open or not
Write three functions named key, person, security
key function
accepts a boolean argument named check
inside the function you will check if it accepted a true key or not
return true if the key is the correct key and false if the key is not
person function
accepts one string argument named check
it checks if the function accepted a string its value "Mohammad" or not
it will returns true if the person is "Mohammad" and false if he/she is not
security function
The function accepts two boolean arguments keyVar, nameVar
it will check if keyVar and nameVar is true or not
 if the key is correct and the person is Mohammad (both are true), then it will return a string "Welcome"
if one or both of the security types are false, then, the function will return a string "You can't access"
-> After the functions
call the function security  using this code snippet  and alert the result
const result = security(key(true), person('Mohammad'))
alert (result)


 */

function key(check){
    if (check === true){
    return true;}
    else {
        return false;
    }
}


function person(check){
    if (check === 'Mohammad'){
        return true;}
        else {
            return false;
        }
}
function security(keyVar , nameVar){

    if (keyVar === true && nameVar === true){
        return "Welcome";
    }
    else {
        return "You Cant access";
    }



    
}

const result = security(key(true), person('Mohammad'));
alert (result);