let tasklist = [];

function submithandler(){
   event.preventDefault();
   const newTask = document.getElementById("input-box").value;
   tasklist.push(newTask);
   console.log(tasklist);

   const taskListInString = JSON.stringify(tasklist);
   localStorage.setItem("tasklist", taskListInString);

   renderList();
}

function renderList() {
    const tasksInString = localStorage.getItem("tasklist");
    const tasksInArray = JSON.parse(tasksInString);
  
    const noOfTask = tasksInArray.length;
    console.log(noOfTask);
  
    let tasks = "";
    for (i = 0; i < noOfTask; i++) {
      const _task = tasksInArray[i];
      let newTask = " <li class='list-group-item'> " + _task + " </li> ";
      tasks = tasks + newTask;
    }
  
    const ulTag = document.getElementById("taskLists");
    ulTag.innerHTML = tasks;
  }
  
  renderList();