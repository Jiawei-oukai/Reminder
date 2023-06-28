import { createReminder } from './createEditReminder.js';

export function fetchReminders() {
    fetch('reminder.json')
        .then(response => response.json())
        .then(reminders => {
            const container = document.querySelector('.reminder-container');
            reminders.forEach(reminder => {
                createReminder(reminder, container);
            });
        })
        .catch(error => console.error('Error:', error));
}
