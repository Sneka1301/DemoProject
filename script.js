document.getElementById('add-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);

        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });
        li.appendChild(deleteBtn);

        // Toggle completed status when clicking on the task
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        document.getElementById('task-list').appendChild(li);
        taskInput.value = ""; // Clear the input field
    }
});
