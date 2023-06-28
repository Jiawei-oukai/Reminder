import { fetchReminders } from './fetchReminders.js';
import { openEditModal } from './Modal.js';
import { getRandomColor } from './createEditReminder.js';

// Initialize the app
fetchReminders();

// UI event handling
// Get the modal
var modal = document.getElementById("myModal");
var editModal = document.getElementById("editModal");

// Get the <span> element that closes the modal
var modalSpan = modal.querySelector(".close");
var editModalSpan = editModal.querySelector(".close");

// When the user clicks on <span> (x), close the modal
modalSpan.onclick = function () {
    modal.style.display = "none";
}
editModalSpan.onclick = function () {
    editModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == editModal) {
        editModal.style.display = "none";
    }
}

document.getElementById('saveBtn').onclick = function () {
    var name = document.getElementById('edit-name').value;
    var description = document.getElementById('edit-description').value;
    var timeString = document.getElementById('edit-time').value;

    var timestamp = Date.parse(timeString); // 转换为时间戳

    // 获取要更新的reminder div内部的元素
    var titleP = editModal.element.querySelector('.reminder-title p'); // 注意，这里需要选择 'p' 元素
    var descriptionP = editModal.element.querySelector('.reminder-description p'); // 注意，这里需要选择 'p' 元素

    // 更新reminder div的内容
    titleP.textContent = name;
    descriptionP.textContent = description;
    editModal.element.dataset.time = timeString; // 存储新的时间戳
    editModal.element.querySelector('.reminder-date').textContent = new Date(timestamp).toLocaleString(); // 显示新的日期时间
    editModal.element.querySelector('.reminder-date').style.fontSize = '22px';

    // 隐藏模态框
    editModal.style.display = "none";
}

//add new modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function (event) {
    event.preventDefault();
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle the submission of the form
var submitButton = document.getElementById("submitReminder");
submitButton.onclick = function (event) {
    event.preventDefault();

    const newReminderName = document.getElementById("name").value;
    const newReminderDescription = document.getElementById("description").value;
    const newReminderTime = document.getElementById("time").value;

    const newReminder = {
        id: Math.floor(Math.random() * 10000), // generate a random id
        name: newReminderName,
        description: newReminderDescription,
        time: newReminderTime // Keep as string
    };

    // Create the new reminder HTML
    const reminderDiv = document.createElement('div');
    reminderDiv.className = 'reminder';
    reminderDiv.style.backgroundColor = getRandomColor();
    reminderDiv.dataset.time = newReminder.time; // Keep as string
    reminderDiv.addEventListener('click', () => {
        openEditModal(reminderDiv); // 传递reminder div
    });

    const titleDiv = document.createElement('div');
    const title = document.createElement('p');
    titleDiv.className = 'reminder-title';
    title.textContent = newReminder.name;
    titleDiv.style.marginRight = '40px'
    reminderDiv.style.overflow = 'hidden';
    titleDiv.appendChild(title);
    reminderDiv.appendChild(titleDiv);

    const descriptionDiv = document.createElement('div');
    const description = document.createElement('p');
    descriptionDiv.className = 'reminder-description';
    description.textContent = newReminder.description;
    descriptionDiv.appendChild(description);
    reminderDiv.appendChild(descriptionDiv);

    const dateDiv = document.createElement('div');
    const date = document.createElement('p');
    dateDiv.className = 'reminder-date';
    date.textContent = new Date(newReminder.time).toLocaleString(); // Convert string to local date string for display
    dateDiv.appendChild(date);
    reminderDiv.appendChild(dateDiv);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'reminder-complete';
    checkbox.addEventListener('click', (event) => {
        event.stopPropagation(); // 阻止事件冒泡
    }, true); // 在捕获阶段处理事件

    checkbox.addEventListener('change', (event) => {
        if (checkbox.checked) {
            reminderDiv.style.backgroundColor = '#4CAF50'; // Green color
            reminderDiv.style.transform = 'scale(0.9)'; // Scale down
            reminderDiv.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)'; // Add shadow

            let congratsText = reminderDiv.querySelector('.congrats-text');
            if (!congratsText) {
                congratsText = document.createElement('p');
                congratsText.className = 'congrats-text';
                congratsText.textContent = 'Congratulations！Mission Completed!';
                congratsText.style.color = 'white';
                congratsText.style.fontWeight = 'bold';
                congratsText.style.textAlign = 'center';
                congratsText.style.marginTop = '10px';

                reminderDiv.appendChild(congratsText);
            }
            congratsText.style.display = '';

            // Optionally add a transition effect
            reminderDiv.style.transition = 'all 0.3s';
        } else {
            reminderDiv.style.backgroundColor = getRandomColor();
            reminderDiv.style.transform = 'scale(1)';
            reminderDiv.style.boxShadow = 'none';

            let congratsText = reminderDiv.querySelector('.congrats-text');
            if (congratsText) {
                congratsText.style.display = 'none';
            }
        }
    });

    reminderDiv.appendChild(checkbox);
    reminderDiv.style.position = 'relative';
    checkbox.style.position = 'absolute';
    checkbox.style.top = '10px';
    checkbox.style.right = '10px';
    checkbox.style.width = '24px';
    checkbox.style.height = '24px';

    // Add to the container
    const container = document.querySelector('.reminder-container');
    container.appendChild(reminderDiv);

    // Close the modal
    modal.style.display = "none";
}
