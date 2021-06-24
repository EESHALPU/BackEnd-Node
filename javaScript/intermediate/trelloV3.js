let myTodos={
    day: 'Monday',
    meetings:0,
    meetDone:0,

    addMeeting:function(num)
    {
        this.meetings=this.meetings+num; // this keyword is indacting the current object 
        return this.meetings;
    }
}



let myTodosTwo={
    day: 'Tuesday',
    meetings:3,
    meetDone:2,

    addMeeting:function()
    {
        console.log(this) // this keyword is indacting the current object 
    }
}

let result=myTodos.addMeeting(5);
console.log('Total Meeting '+result);
myTodosTwo.addMeeting();