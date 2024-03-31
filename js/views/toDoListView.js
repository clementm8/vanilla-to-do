import { toDoItemTemplate } from "../templates/toDoItemTemplate";
import { subscribe } from "../models/toDoListModel";
import { deleteToDoController } from "../controllers/deleteToDoController";
import { updateToDoController } from "../controllers/updateToDoController";
import { createToDoController } from "../controllers/createToDoController";

let view;

export function toDoListView() {
    view = document.querySelector('#to-do-list');
    subscribe(render);
    view.addEventListener('click', onHandleClick)
}

function render(data) {
    const div = document.createElement('div');
    const toDoList = document.querySelector('#item-container');
    toDoList.replaceChildren();
    data.forEach(item => {
        div.prepend(toDoItemTemplate(item));
    });
    toDoList.append(div);
}

// determine which button was clicked and pass the id to the Controller
function onHandleClick(e){
    switch (e.target.id){
        case 'delete':
            deleteToDoController(e.target.dataset.uid)
            break
        case 'edit':
            updateToDoController(e.target.dataset.uid)
            break
        case 'add':
            createToDoController()
            break
        default:
            null
    }
}