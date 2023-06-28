# Reminders App

## Overview

The Reminders App is a simple web application that allows users to create and manage reminders. It features a clean user interface with colorful reminder cards. Each reminder card contains the reminder's title, description, and scheduled time. Users can also mark a reminder as complete, and the color of the reminder card changes accordingly.

## Features

- Fetch initial reminders from a JSON file.
- Create new reminders with a title, description, and scheduled time.
- Edit existing reminders.
- Mark reminders as complete.
- Random background colors for reminder cards.

## Project Structure

The project is structured into three main JavaScript modules:

- `main.js`: This module initializes the application and handles UI events such as opening and closing the modals.
- `fetchReminders.js`: This module is responsible for fetching the initial reminders from a JSON file and creating reminder cards using the `createReminder` function from the `createEditReminder.js` module.
- `createEditReminder.js`: This module contains the function for creating reminder cards and appending them to the main container.
- `Modal.js`: This module contains the function for button events.

The application also includes an HTML file for the structure and a CSS file for styling.

## Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Safari).
- Basic understanding of HTML, CSS, and JavaScript.

### Running the App

1. Clone this repository or download it as a zip file.
2. Open the `index.html` file in your preferred web browser.
3. You will see a list of reminders fetched from the JSON file.
4. Use the "Add Reminder" button to create new reminders.
5. Click on a reminder card to edit its details.
6. Check the box in the reminder card to mark it as complete.

## Customization

You can customize the app by editing the HTML, CSS, and JavaScript files. For example, you can change the color scheme, add more fields to the reminders, or integrate it with a backend to persist the data.

## Contributing

Contributions are welcome! Feel free to fork this project and submit your enhancements through pull requests.

## License

This project is open source and available under the [MIT License](LICENSE).
