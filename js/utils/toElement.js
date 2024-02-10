
// Module converts an HTML template to an element
function toElement(template){
    return document.createRange().createContextualFragment(template).children[0];
}

export {toElement}