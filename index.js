const form=document.querySelector('#TOFORM');
const input=document.querySelector('#input');
const task=document.querySelector('#tasks');
form.addEventListener('submit',function(e){
  e.preventDefault(); // for dont submit behavior
  if(input.value===''){
    alert('please enter your task');
    return;
  }
  const tasks=document.createElement('li');
  tasks.innerHTML=input.value;
  task.appendChild(tasks);
  input.value='';

});
