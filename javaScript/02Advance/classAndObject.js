class User{
    constructor(firstname,lastname,credit)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.credit=credit;

    }
    getFullName()
    {
        return 'My Name is '+this.firstname+" "+this.lastname;
    }

    editName(newname)
    {
        const myname=newname.split(" ");
        this.firstname=myname[0];
        this.lastname=myname[1];
    }
}

class Teacher extends User{
    constructor(firstname,lastname,credit,subject)
    {
        super(firstname,lastname,credit);
        this.subject=subject;
    }

    getFullName()
    {
        return 'My Name is '+this.firstname+" "+this.lastname+"I teach "+this.subject;
    }

}

const john =new Teacher('Md',"Eesha","44","Python");
// const john=new User('John',"Anderson",43)
// console.log(john);
console.log(john.getFullName());

// john.editName("jony Anderson");
// console.log(john.getFullName());