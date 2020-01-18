// Variables

const reminderList = document.getElementById('reminder-list');

// Event Listeners
eventListeners();

function eventListeners(){
    document.querySelector("#form").addEventListener('submit', newReminder);
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

    //console.log(reminder);
}