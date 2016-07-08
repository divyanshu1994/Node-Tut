function Emitter()
{
    this.events={

        //type : [listener1 , listener2 ,listener 3]

    }  // define an empty object
}

// define prototypes on and emit

Emitter.prototype.on=function(type,listener)
{
    this.events[type]=this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit=function(type)
{
    if(this.events[type])  // if name type appears in events object
    {
        // loop through listeners array
        this.events[type].forEach(function(item)
        {
            item();
        }); 
    }
}

module.exports=Emitter;