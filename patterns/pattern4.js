function P()
{
    this.msg="4";
    this.show=function()
    {
        console.log(this.msg);
    }
}

//return function constructor
module.exports=P;