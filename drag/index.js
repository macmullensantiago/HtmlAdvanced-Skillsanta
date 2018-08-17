
function drag(event){
    console.log(event);
    event.dataTransfer.setData('image',event.target.id);
}


function drop(event){
    event.preventDefault();
    var image = event.dataTransfer.getData('image');

    event.target.appendChild(document.getElementById(image));
}


function enableDrop(event) {
    event.preventDefault();
}

