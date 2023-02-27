
//const sum=(num1,num2) => num1+num2;
/*const coding_plat={}
const setvalue=(key,value)=>{
    coding_plat[key] =value
}
//setvalue(2,5)
console.log(coding_plat);
const add =(n1,n2) => n1+n2;
const sub =(n1,n2) => n1-n2;
const div =(n1,n2) => n1/n2;
const mul =(n1,n2) => n1*n2;
const calculate =(n1,n2,operation)=>{
    return operation(n1,n1);
}
const value=calculate(2,20,mul)
console.log('high',value)
const str=[1,'string',{name:'keeri'},true]
console.log(str.length);
console.log(str[1].name);
const fruits=['app'];
fruits.push('cat');
fruits.unshift('ban');
fruits.shift();
fruits.pop();
    console.log(fruits);*/
    /*const array=["h","i","iam","kee","be"];
    const comparator = (array)=> array==="kee";
    //return "valid";
   const res= array.findIndex(comparator);
   console.log(res);*/
   //const strarr=["ban","app","jack","car"];
   //strarr.splice(1,1);//deltionfrom index from index to del num
   //strarr.splice(2,1,"hell","hi","div","sum");//adding from,delfromstring,add
   //strarr.splice(1,1,"hello");
   //console.log(strarr);
   //const array=[1,2,3,4,5];
   /*const res=[];
   for(let i in array){
    res[i]=array[i]*5;
   } 
   console.log(res);*/
  /*const multipleoffive = (item)=>item*5;
  const resarr= array.map(multipleoffive);
  console.log(resarr)*/
 /* object destructring
  const todo={
    "uderid":1,
    "id":2,
    "title":"delectus aut",
    "completed":false
  };
  let{title:todo_title}=todo;
  let{id:todo_id}=todo;
  console.log(todo_title);
  console.log(todo_id);*/
  //array  destrucuturing
  const arr=['string',10,'str2',{name:"kjuebhj"},()=>0,]
  let[,,str_val,n1,str_num]=arr;
  console.log(str_num());
  console.log({str_val,n1,str_num});
  document.body.innerText='hello world'
  /*************** */
  import { togettodolist as geti} from "./newjs.js"; 
  console.log(geti());