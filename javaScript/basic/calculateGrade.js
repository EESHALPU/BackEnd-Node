let getMyGrade=function(currentMarks,totalMarks)
{
    let per=(currentMarks/totalMarks)*100;

let myGrade='';

if(per>=90)
{
    myGrade='A';
}
else if(per>=80)
{
    myGrade='B'
}
else if(per>=70)
{
    myGrade='C';
}
else
{
    myGrade='F';
}

return 'Your Grade is '+myGrade+' And Percentage='+per;

}

let yourResult=getMyGrade(498,500);
console.log(yourResult);