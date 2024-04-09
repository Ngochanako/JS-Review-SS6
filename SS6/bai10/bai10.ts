let obj={
    a:"John",
    b:"",
    c:null,
    d:undefined,
    e:5
}
function removeFalsy(obj:{[key:string]:any}):void{
    for(let index in obj){
        if(!obj[index]){
            delete(obj[index])
        }
    }
    console.log(obj);
}
removeFalsy(obj);