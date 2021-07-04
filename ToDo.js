let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
var blue = "#7EBB94";

addToDoButton.addEventListener('click', function() {
    if (inputField.value != "") {
        inputField.placeholder = "Thêm ghi chú mới ở đây!"
        var paragraph = document.createElement('div') ;
        toDoContainer.appendChild(paragraph);
        paragraph.innerText  = "." + inputField.value;
        paragraph.classList.add('newTask');
        inputField.value = "";
        paragraph.addEventListener('click', function() {
            paragraph.classList.add('complete');

        })

    } else {
        inputField.placeholder = "ơ kìa viết gì đó đi chứ!"
        setTimeout(function() {
            inputField.placeholder = "Nhanh lên nào!!";
        },3000)
    }
})
