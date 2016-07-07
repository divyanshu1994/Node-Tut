function P()
{
    this.msg="3";
    this.show=function()
    {
        console.log(this.msg);
    }
}

//returning new objects lead to caching in require function under the hood
module.exports=new P();
