import { toElement } from "./../utils/toElement";

function toDoItemTemplate(todo, status, startDate) {
    const template = `
    <section class="mx-auto max-w-screen-sm flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
    <ul class="list-disc list-inside text-gray-800 dark:text-white space-y-2">
        <li class="flex items-start">\
                <p>Task: ${todo}</p>
                <p>Status: ${status}</p>
                <p>Date Started: ${startDate}</p>
        </li>
    </ul>
</section>
    `
    return toElement(template);
}

export {toDoItemTemplate}