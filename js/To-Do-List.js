 var enterTask =document.getElementById('enterTask');
 var addToDo=document.getElementById('addToDo');
 var activeToDo=document.getElementById('activetodo');
 var completed=document.getElementById('completed');

 
   addToDo.addEventListener('click', function(event){

    
    if(enterTask.value.length>0)
          {

                 var li = document.createElement("li");
                 var checkBox=document.createElement("INPUT");
                 checkBox.setAttribute("type", "checkbox");
                 li.appendChild(checkBox);
                 li.innerHTML+=enterTask.value;
                 activeToDo.appendChild(li);
          }
        

               var checkValue=document.querySelector('#activetodo li:last-child input');
               checkValue.addEventListener('click',function(event)
                {
                  var parentLi=this.parentNode;
                  console.log(parentLi==true);
                
                  if(parentLi != undefined )
                 {
                   
                  var li1=document.createElement("li");
                  var checkBox1=document.createElement("INPUT");
                  checkBox1.setAttribute("type","checkbox");
                  li1.appendChild(checkBox1);
                  li1.innerHTML+=parentLi.textContent;
                  completed.appendChild(li1);

                
                }

                  
                });


              });
                

          
          


               


              
                
                 
            
          
        






