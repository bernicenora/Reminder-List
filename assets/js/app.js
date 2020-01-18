// Variables

const reminderList = document.getElementById('reminder-list');

// Event Listeners
eventListeners();

function eventListeners(){
    document.querySelector("#form").addEventListener('submit', newReminder);

    // Remove reminder from the list
    reminderList.addEventListener('click', removeReminder);
}


// Functions

function newReminder(e){
    e.preventDefault();

    // Read the textarea value
    const reminder = document.getElementById('reminder').value;

    //Create the remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-reminder';
    removeBtn.textContent = "X";
    
    // Create a list item i.e <li> element
    const li = document.createElement('li');
    li.textContent = reminder;

    //Adding the remove Button to each reminder that is generated
    li.appendChild(removeBtn);

    // Add to the Reminder List
    reminderList.appendChild(li);

    //Add Reminder to the Local Storage so that you do not lose the data while doing a refresh on the page
    addReminderLocalStorage(reminder);
}

// Using Delegation to remove the reminder from the list
function removeReminder(e){
    if (e.target.classList.contains('remove-reminder')){
        e.target.parentElement.remove();
    }
}

//Function - Add Reminder to the Local Storage so that you do not lose the data while doing a refresh on the page

function addReminderLocalStorage(reminder){
    let reminders = getRemindersFromStorage();
    
    // Add the reminder into the Array
    reminders.push(reminder);

    //Converet the Reminder array into a string
    localStorage.setItem('reminders', JSON.stringify(reminders));
}

function getRemindersFromStorage(){
    let reminders;
    const remindersLS = localStorage.getItem('reminders');

    // Get the values. If null is returned then we create an empty array
    if (remindersLS === null){
        reminders = [];
    }else{
        reminders = JSON.parse(remindersLS);
    }
    return reminders;
}