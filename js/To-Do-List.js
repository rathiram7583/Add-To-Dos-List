 var enterTask =document.getElementById('enterTask');
 var addToDo=document.getElementById('addToDo');
 var activeToDo=document.getElementById('activetodo');
 var completed=document.getElementById('completed');

 
   addToDo.addEventListener('click', function(event){

    
         if(enterTask.value.length>0)
            {
               
                var checkBox=document.createElement("INPUT");
                checkBox.setAttribute("type", "checkbox",label);
                 checkBox.textContent=enterTask.value; 
                activeToDo.appendChild(checkBox);

                 var li = document.createElement("li");
                 li.textContent=enterTask.value;
                 activeToDo.appendChild(li);


            }


 });
