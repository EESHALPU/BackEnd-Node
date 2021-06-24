let myTodos={
    day: 'Monday',
    meetings:0,
    meetDone:0
}

let addMeeting=function(todo,meet=0)
{
    todo.meetings=todo.meetings+meet
}

let doneMeeting=function(todo,meet=0)
{
    todo.meetDone=todo.meetDone-meet;
}

let meetReset=function(todo){
    todo.meetings=0;
    todo.meetDone=0;
}

let getSummaryOfDay=function(todo)
{
    let meetLeft=todo.meetings+todo.meetDone;
    console.log(meetLeft)

    return 'You have '+meetLeft+' Left Today'
}


addMeeting(myTodos,4);
addMeeting(myTodos,2);
doneMeeting(myTodos,5);

console.log(getSummaryOfDay(myTodos));
