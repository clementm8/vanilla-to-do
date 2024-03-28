import { getStore } from "../models/store"
import { createToDo } from "../models/toDoListModel"

let dialog
let closeButton
let exitButton
let form
let uid

export function createToDoController() {
    dialog = document.querySelector('#create-to-do')
    exitButton = dialog.querySelector('#exit')
    closeButton = dialog.querySelector('#close')
    form = dialog.querySelector('form')
    configureListeners()
    dialog.showModal()
}

function configureListeners() {
    exitButton.addEventListener('click', onCloseDialog)
    closeButton.addEventListener('click', onCloseDialog)
    form.addEventListener('submit', onCreateToDoItem)
    form.reset()
}

function onCreateToDoItem(e) {
    e.preventDefault();
    const todo = e.currentTarget.todo.value.trim()
    const category = e.currentTarget.category.value.trim()
    const status = e.currentTarget.status.value.trim()
    const uid = generateUID();
    createToDo({
        todo,category,status, uid
    })
    dialog.close();
}

function onCloseDialog(e) {
    dialog.close();
}

function generateUID() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let generatedUid = '';
    for (let i = 0; i < 20; i++) {
        if (i === 2 || i === 6) {
            uid += '-';
        } else {
            uid += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    }
    return generatedUid;
}