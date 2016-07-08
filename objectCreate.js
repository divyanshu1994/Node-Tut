var person=
{
    firstName:"",
    lastName:"",
    greet:function()
    {
        console.log("HI "+this.firstName+" "+this.lastName);
    }
}

var ds=Object.create(person);
ds.firstName="Dibu";
ds.lastName="Sundriyal";
ds.greet();