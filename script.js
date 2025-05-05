function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
  
    const li = document.createElement('li');
    li.textContent = taskText;
    li.onclick = () => li.classList.toggle('done');
  
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
  }
  