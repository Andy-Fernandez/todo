// Selectors
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event Listener
todoForm.addEventListener('submit', addTodo);

// Functions
function addTodo(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const todoText = todoInput.value;
    if (todoText === '') return;
    
    const todoItem = document.createElement('li');

    const todoTextSpan = document.createElement('span');
    todoTextSpan.textContent = todoText;
    todoItem.appendChild(todoTextSpan);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        todoItem.remove();
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', () => {
        if(todoTextSpan.contentEditable === 'true') {
            todoTextSpan.contentEditable = 'false';
            editButton.textContent = 'Edit';
        } else {
            todoTextSpan.contentEditable = 'true';
            editButton.textContent = 'Save';
        }
    });
    
    todoItem.appendChild(deleteButton);
    todoItem.appendChild(editButton);
    todoList.appendChild(todoItem);
    
    todoInput.value = ''; // Clear input field
}
