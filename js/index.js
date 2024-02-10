import { toDoItemTemplate } from "./templates/toDoitem";
import { getToDoData } from "./lib/firebase/api";

/* 
      Display templating
	  toDoItems.forEach((todo)=>{
		document.querySelector('#root').insertAdjacentHTML('afterbegin',todo)
	})
	console.log(toDoItems)
	
	Interactive Templating
	const div= document.createElement('div');
	toDoItems.forEach((markup)=>{
		div.appendChild(markup);
	})
	document.querySelector('main').append(div)
	console.log(div)
			  
*/

async function appInit() {
	const appData= await getToDoData();
	const toDoItems= Object.values(appData).map((obj)=>{
		return toDoItemTemplate(obj.todo,obj.status,obj.startDate);
	})
	const div= document.createElement('div');
	const firstTen= toDoItems.splice(0,10);
	firstTen.forEach((markup)=>{
		div.appendChild(markup);
	})
	document.querySelector('main').append(div)
	console.log(div)	
}
appInit();