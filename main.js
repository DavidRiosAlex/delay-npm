const Delay = require('./index');
async function testingDelay(){
    console.log('start delay');
    await new Delay({newTime:5000, newCallback:()=>{console.log('callback')}});
    console.log('delay end');
}
testingDelay();