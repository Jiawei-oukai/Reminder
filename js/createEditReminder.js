import { openEditModal } from './Modal.js';

export function createReminder(reminder, container) {
    // 创建一个新的 reminder div
    const reminderDiv = document.createElement('div');
    reminderDiv.className = 'reminder';
    reminderDiv.style.backgroundColor = getRandomColor();
    reminderDiv.dataset.time = reminder.time;
    reminderDiv.addEventListener('click', () => {
        openEditModal(reminderDiv);
    });

    // 创建并设置 reminder-title div
    const titleDiv = document.createElement('div');
    const title = document.createElement('p');
    titleDiv.className = 'reminder-title';
    title.textContent = reminder.name;
    titleDiv.style.marginRight = '40px'
    reminderDiv.style.overflow = 'hidden';
    titleDiv.appendChild(title);
    reminderDiv.appendChild(titleDiv);

    // 创建并设置 reminder-description div
    const descriptionDiv = document.createElement('div');
    const description = document.createElement('p');
    descriptionDiv.className = 'reminder-description';
    description.textContent = reminder.description;
    descriptionDiv.appendChild(description);
    reminderDiv.appendChild(descriptionDiv);

    // 创建并设置 reminder-date div
    const dateDiv = document.createElement('div');
    const date = document.createElement('p');
    dateDiv.className = 'reminder-date';
    date.textContent = new Date(reminderDiv.dataset.time).toLocaleString();
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
            checkbox.style.borderColor = 'red';

            let congratsText = reminderDiv.querySelector('.congrats-text');
            if (!congratsText) {
                congratsText = document.createElement('p');
                congratsText.className = 'congrats-text';
                congratsText.textContent = 'Congratulations！Mission!';
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
            checkbox.style.borderColor = '';

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


    // 把新的 reminder div 添加到容器中
    container.appendChild(reminderDiv);
}

export function getRandomColor() {
    let r, g, b;
    let isDark;
    do {
        r = Math.floor(Math.random() * 256); // Random between 0-255
        g = Math.floor(Math.random() * 256); // Random between 0-255
        b = Math.floor(Math.random() * 256); // Random between 0-255
        isDark = (Math.sqrt(0.299 * (r ** 2) + 0.587 * (g ** 2) + 0.114 * (b ** 2)) < 128);
    } while (isDark); // Loop until a non-dark color is generated
    return `rgb(${r},${g},${b})`; // Collect all to an RGB color string
}
