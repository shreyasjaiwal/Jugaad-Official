console.log("HEllo");
let teamSize=document.getElementById('teamSelector');
let teamMemebers=document.getElementById('teamMembers');
console.log(teamSize.value)
teamSize.addEventListener('select',()=>{
    for(let i=1;i<teamSize.value;i++){
        teamMemebers.innerHTML+='<div class="mb-3 exform">
        <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="Team Members">
    </div>;'
    }
})