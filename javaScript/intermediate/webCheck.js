let userName='mdeesha123@gmail.com'
let password='1234'
console.log(password.length);

let userChecker=function(myString){
    if((myString.includes(123)) && (myString.length>6))
    {
        return true;
    }
    else
    {
        return false
    }
}


console.log(userChecker(userName));