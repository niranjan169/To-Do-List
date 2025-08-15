const todoList=[];

function renderlist(){
    let html='';
    for(let i=0;i<todoList.length;i++){
        
        let name=todoList[i].name;
        let date=todoList[i].date;
        let list=`
        <div>${name}</div>
        <div>${date}</div>
         
        <button onclick="
        todoList.splice(${i},1);
        renderlist();"
         class="del-btn">Delete</button>`;
        html+=list;
      
    }
      document.querySelector(".js-todoList").innerHTML=html;
}
function addTodo(){
   const inputElement=document.querySelector(".js-input");
   const inputdate=document.querySelector(".js-date");
   const name=inputElement.value;
   const date=inputdate.value;
   todoList.push({
    name,
    date
   });
  
   renderlist();
   inputElement.value=''; 
}
