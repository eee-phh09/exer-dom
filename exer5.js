const messageElement = document.getElementById('message');


document.addEventListener('keydown', function(event) {
        
 messageElement.innerText = `Eu pressionei: {event.key}`;
});