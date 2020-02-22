var inputValue = document.querySelector(".input");
const buttonAdd = document.querySelector(".buttonAdd");
const tasks = document.querySelector(".tasks")

class task{
    constructor(taskText){
        this.create(taskText);
    }
    create(taskText){
        let input = document.createElement('input');
        input.value = taskText;
        input.classList.add('inputText');
        input.type = "text";

        let taskBox = document.createElement('div');
        taskBox.classList.add('task');

        let buttonRemove = document.createElement('button');
        buttonRemove.setAttribute("class", "fa fa-trash");
        buttonRemove.classList.add('buttonRemove');
        buttonRemove.style.cssText = "color: red";

        let buttonDone = document.createElement('button');
        buttonDone.setAttribute("class", "fa-check-square-o");
        buttonDone.classList.add('buttonDone');

        tasks.appendChild(taskBox);

        taskBox.appendChild(input);
        taskBox.appendChild(buttonRemove);
        taskBox.appendChild(buttonDone);

        buttonRemove.addEventListener('click',() => this.remove(taskBox));
        buttonDone.addEventListener('click', () => this.draw(input));
    }

    draw(input){
        //if (){
            input.style.cssText = "text-decoration: line-through";
        //}

    }
    remove(task){
        tasks.removeChild(task);
    }
}

function check(){
    if(inputValue.value !== ""){
        new task(inputValue.value);
        inputValue.value="";
    }
}
buttonAdd.addEventListener('click', check);

