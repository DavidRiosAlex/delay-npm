
const defaultTime = 1000;
const defaultCallback = ()=>{}

class AsyncDelay{
    time=1000;
    callback=()=>{};

    constructor({newTime=defaultTime, newCallback = defaultCallback}){
        this.time = newTime;
        this.callback = newCallback;
        return this.useDelay();
    }
    useDelay(newTime=this.time, newCallback=this.callback){
        return new Promise( (res) => {
            setTimeout(()=>{
                res(
                    newCallback()
                    )
            }, newTime)
        })
    }
    setTime(newTime){
        this.time = newTime;
    }
    setCallback(newCallback){
        this.callback = newCallback;
    }
}

module.exports = AsyncDelay;