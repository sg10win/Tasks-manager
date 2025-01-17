const addBtns = document.querySelectorAll('.push')
addBtns.forEach(element => {
    element.onclick = function(){addTask(element)}
    
});
function deleteTask(deleteBtn){
    deleteBtn.parentNode.remove()
}
function changeMode(modeBtn){
    let colors = ['', 'red', 'yellow', 'green']
    let taskColors = ['', 'rgb(252, 184, 175)', 'rgb(250, 240, 153)', '#a6fca6']
    modeBtn.value = (parseInt(modeBtn.value)+1)%4
    modeBtn.textContent = `Mode_${modeBtn.value}`
    modeBtn.style.backgroundColor = colors[modeBtn.value]
    modeBtn.parentNode.style.backgroundColor = taskColors[modeBtn.value]
}


// element => Add button (.push)
function addTask(element){
    var className = element.classList[1]
    var inputField = document.getElementsByClassName(`input ${className}`)[0];
    var inputVal = inputField.value
    if (inputVal.length == 0){
        alert('Enter a task')
        return
    }
    inputField.value = ''
    var tasks = document.getElementsByClassName(`tasks ${className}`)[0]
    tasks.innerHTML += (`
                    <div class="task ${className}">
                        <span id="taskname">
                        ${inputVal}
                        </span>
                        <button class="delete">Delete</button>
                        <button class="mode" value=0>Mode_0</button>
                    </div>
                    `)
    const deleteBtns = document.getElementsByClassName('delete')
    const modeBtns = document.getElementsByClassName('mode')
    for(var i=0;i<deleteBtns.length;i++){
        deleteBtns[i].onclick = function(){deleteTask(this)}
        modeBtns[i].onclick = function(){changeMode(this)}
    }
    
}

