// Removed the audio element and sound functions

function showDialog() {
    const overlay = document.getElementById('overlay');
    const dialog = document.getElementById('dialog');
    const message = document.getElementById('message');

    overlay.classList.add('show');
    dialog.classList.add('show');
    message.style.display = 'none'; // Hide the message initially
}

function handleResponse(response) {
    const overlay = document.getElementById('overlay');
    const dialog = document.getElementById('dialog');
    const message = document.getElementById('message');
    const errorMessage = document.getElementById('error-message');
    const dialogParagraph = dialog.querySelector('p');

    if (response === 'notYet') {
        errorMessage.innerText = "Wrong option!";
        errorMessage.style.display = 'block';
    } else if (response === 'startConversation') {
        dialogParagraph.innerText = "Are you sure?";
        dialog.innerHTML = `
            <p>${dialogParagraph.innerText}</p>
            <button onclick="handleSecondResponse('yesYes')">Yes Yes</button>
            <button onclick="handleSecondResponse('no')">No!</button>
            <div id="error-message"></div>
        `;
    }
}

function handleSecondResponse(response) {
    const overlay = document.getElementById('overlay');
    const dialog = document.getElementById('dialog');
    const message = document.getElementById('message');
    const errorMessage = document.getElementById('error-message');

    if (response === 'no') {
        errorMessage.innerText = "Wrong option!";
        errorMessage.style.display = 'block';
    } else if (response === 'yesYes') {
        dialog.classList.remove('show');
        overlay.classList.remove('show');
        message.innerText = "AWESOME, LIFE IS GOOD.";
        message.style.display = 'block'; // Show the message
    }
}

window.onload = showDialog;
