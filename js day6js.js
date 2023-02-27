/*document.body.innerText='hello guys';
document.body.innerHTML= '<p style="color:yellow"> hello world </p>'
setTimeout(
    ()=>{//document.body.innerText='how r u';
        document.body.innerHTML=<div>hello world</div>
    document.body.style.color='teal';
    //document.body.style.fontSize='50px';
    //document.body.style.backgroundColor='pink';
},
3000
);
/*setTimeout(
    ()=>{document.body.innerText='way to go';
    document.body.style.color='';
    document.body.style.fontSize='50px';
    document.body.style.backgroundColor='pink';
},
5000
);*/
/*const body=document.getElementById('main_container');
body.innerHTML='<p>hello world</p>';
setTimeout( ()=>{ body.innerText='how r u';},
5000);
body.style.color='pink';
body.style.backgroundColor='black';*/
/*const button=document.getElementById('login');
const pTag=document.getElementById('insert');
button.addEventListener('click',(event)=>{
    pTag.innerHTML="welcome to bit";
})*/
const form=document.getElementById('form_container');
form.addEventListener('submit',(event) =>{
    event.preventDefault();
    const username_input=document.getElementById('name');
    console.log(username_input.value);
    const password_input=document.getElementById('pswd');
    console.log(password_input.value);
     
    //console.log('hello')
});
const button=document.getElementById('from_button');
button.addEventListener('click',()=>{
})