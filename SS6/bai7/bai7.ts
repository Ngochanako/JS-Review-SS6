let listStudent:{name:string;id:number;className:string} []=[
    {
       name:"ngoc",
       id: 12,
       className:"A"
    },
    {
        name:"nguyen",
        id: 13,
        className:"B"
     },
     {
        name:"nan",
        id: 14,
        className:"A"
     },
]
function student(list: {name:string;id:number;className:string}[],className:string):void{
    let arr=list.filter((item)=>{
        return item.className===className;
    })
    console.log(arr);
}
student(listStudent,"A");