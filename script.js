const input = document.querySelector(".input");
const btn = document.querySelector("button");
const listContainer = document.querySelector('.list-container');
// console.log(listContainer.innerText);


btn.addEventListener('click', addTask);
listContainer.addEventListener('click',deleteTask);
input.addEventListener('keydown',AddUsingEnter)
showTask();


function addTask() {
    if (input.value == "") {
        alert("Write some task");
    }
    else {
        const li = document.createElement("li");
        li.innerText = input.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerText='\u00d7'
        li.appendChild(span);
    }
    input.value = '';
    saveTask();
}

function AddUsingEnter(e) {
    if (e.key == 'Enter') {
        addTask();
    }
}

function deleteTask(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
}



function saveTask() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML=localStorage.getItem("data");
}
