const days=['MON','TUES','WED','THUR','FRI','SAT'];
console.log(days);


// let sayHello=function()
// {
//     console.log("Hello Welcome Users");
// }


days.forEach(function(day,index)
{
    console.log(index+1+"--->"+day);
});