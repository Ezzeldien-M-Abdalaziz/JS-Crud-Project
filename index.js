let add = document.querySelector('.add');
let taskContainer= document.querySelector('.content');
// let deleteBut = document.querySelectorAll('.delete');
// let checkBut = document.querySelectorAll('.check');
// let editBut = document.querySelectorAll('.edit');
// let deletee = document.querySelectorAll('#delete');


let format = `${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`;    //time format

let tasks = [     // an array of objects
    {
        "title" : "Reading a book",
        "date" : format,
        "isDone" : false
    },
    {
        "title" : "Finish A project",
        "date" : format,
        "isDone" : false
    },
    {
        "title" : "leetcode for 1 hour",
        "date" : format,
        "isDone" : false
    },
    {
        "title" : "finish course",
        "date" : format,
        "isDone" : false
    }
];


//list all the tasks in the window
function addTasks(){
    taskContainer.innerHTML = '';    // empty the container first 
    
    let index = 0;
    tasks.forEach(e => {  //for loop to add all the tasks
        let task = `
        <div class="content__task" data-index=${index}>
            <!-- task info  -->
                <div class="task-info">
                    
                    <h2>${e.title}</h2>
    
                    <div class="task-info-date">
                        <span class="material-symbols-outlined">
                            calendar_month
                            </span>
                        <span>${e.date}</span>
                    </div>
                </div>
            <!-- task info  -->
            
    
            <!-- task actions  -->
                <div class="task-actions">
                    <button class="circular delete"><span class="material-symbols-outlined">
                        delete
                        </span></button>
                    <button class="circular check"><span class="material-symbols-outlined">
                        check
                        </span></button>
                    <button class="circular edit"><span class="material-symbols-outlined">
                        edit
                        </span></button>
                </div>
            <!-- task actions  -->

        </div>`
    taskContainer.innerHTML += task;
    index++;
    });
}


// Initial call to addTasks to populate the tasks list
addTasks();

//add butt 
add.addEventListener('click' , function(e){
    let taskName = prompt('enter the task name');
    let taskObj = {
        "title" : taskName,
        "date" : format,
        "isDone" : false
    };
    if(taskName){
        tasks.push(taskObj);
    }
    
    addTasks();   
    
})

//handeling the delete button
taskContainer.addEventListener('click', function (e) {
    let target = e.target.closest('.delete');
    if (target) {
        let taskElement = target.closest('.content__task');
        let taskIndex = taskElement.getAttribute('data-index');
        let conf = confirm('do you want to delete this task ? ')
        if(conf){
            tasks.splice(Number(taskIndex), 1);
            addTasks();
        }
    } 
});

//handeling the edit button
taskContainer.addEventListener('click', function (e) {
    let target = e.target.closest('.edit');
    if (target) {
        let taskElement = target.closest('.content__task');
        let taskIndex = taskElement.getAttribute('data-index');

        let conf = confirm('do you want to edit this task ? ')
        if(conf){
            let value = prompt('write the task',tasks[taskIndex].title)
            tasks[taskIndex].title = value;
            if(value){
                addTasks();
            }
        }
    }
});



//handeling the check button
taskContainer.addEventListener('click', function (e) {
    let target = e.target.closest('.check');
    if (target) {
        let taskElement = target.closest('.content__task');
        let taskIndex = taskElement.getAttribute('data-index');
        if(tasks[taskIndex].isDone === false){
            target.innerHTML = 'X';
            taskElement.classList.add('done');
            target.classList.add('done-butt');
            tasks[taskIndex].isDone = true;
        }else{
            taskElement.classList.remove('done')
            target.classList.remove('done-butt');
            target.innerHTML = '<span class="material-symbols-outlined">check</span>';
            tasks[taskIndex].isDone = false
        }
    }
});

