const addBtn = document.querySelector('#push')
addBtn.addEventListener('click',function(event){add(event)})
addBtn.onclick(add())

// At the beginning I have to do post request of all the data
// how to save the data
// how to get it from server in a propper way 
 


function add (event){
    event.preventDefault()
    const newTaskInput = document.querySelector('#newtask input')
    const newTaskValue = newTaskInput.value
    if (newTaskValue.length == 0){
        alert('Please Enter a Task')
    }
    else{
        tasks = document.querySelector('#tasks');
        tasks.innerHTML
        += `<div class="task">
                <span id="taskname">
                    ${newTaskValue}
                </span>
                <button class="delete">Delete</button>
            </div>`;
        var currentTasks = document.querySelectorAll(".delete");
        console.log(currentTasks.length)
        for(var i=0;i<currentTasks.length;i++){
            var current = currentTasks[i]
            current.onclick = function(){
                this.parentNode.remove()
            }
        }
        newTaskInput.value = ''
    }
}
