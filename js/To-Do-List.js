 var enterTask =document.getElementById('enterTask');
 var addToDo=document.getElementById('addToDo');
 var activeToDo=document.getElementById('activetodo');
 var completed=document.getElementById('complete');

function add(input){

    var input=enterTask;
  if(input.value.length>0)
  {


         var li = document.createElement("li");
         var checkBox=document.createElement("INPUT");
         checkBox.setAttribute("type", "checkbox");
         li.appendChild(checkBox);
         
         li.innerHTML+=input.value;
         activeToDo.appendChild(li);
  }
    input.value="";
}

 

 
   addToDo.addEventListener('click', function(event){

    
              add(enterTask);
          

              var checkValue=document.querySelector('#activetodo li:last-child input');
 
               checkValue.addEventListener('click',function(event)
                {
                  
              
 
               
                  var completeInput=this.parentNode;
                  //console.log(completeInput==true);
                
                  if(completeInput!= undefined )
                 {
                   
                  var li1=document.createElement("li");
                  var checkBox1=document.createElement("INPUT");
                  checkBox1.setAttribute("type","checkbox");
                  li1.appendChild(checkBox1);
                  li1.innerHTML+=completeInput.textContent;
                  completed.appendChild(li1);
                  activeToDo.remove();
                  
                }
               /* else{
                  /*var li = document.createElement("li");
                  var checkBox=document.createElement("INPUT");
                  checkBox.setAttribute("type", "checkbox");
                  li.appendChild(checkBox);
                  
                  li.innerHTML+=input.value;*/
                  

                
   
 
                });
              });

            
                

          
          


               


              
                
                 
            
          
        






