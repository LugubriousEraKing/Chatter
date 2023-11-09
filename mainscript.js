function sendMessage() {
    const userMessage = document.getElementById("user-input").value;
    addMessage("You", userMessage, "sent");
    
    // Here, you can process the user's input and generate a response
    // For a simple example, let's just echo the user's input
    addMessage("Chatter", userMessage, "received");
    
    // Clear the user's input
    document.getElementById("user-input").value = "";
    
    // Scroll to the bottom of the chat
    const chatBox = document.getElementById("chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addMessage(sender, message, messageType) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = "message " + messageType;
    messageElement.innerHTML = `<p><strong>${sender}:</strong> ${message}</p>`;
    chatBox.appendChild(messageElement);
}
