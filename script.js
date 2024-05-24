// Selectors
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event Listener
todoForm.addEventListener('submit', addTodo);

// Functions
function addTodo(event) {
    event.preventDefault(); // Prevent form from submitting
    
    const todoText = todoInput.value;
    if (todoText === '') return;
    
    const todoItem = document.createElement('li');
    todoItem.textContent = todoText;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        todoItem.remove();
    });
    
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
    
    todoInput.value = ''; // Clear input field
}
