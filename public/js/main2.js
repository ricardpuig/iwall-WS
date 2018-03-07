var messageDiv;
var statusDiv;
var button;
var button2;
var button3;
var textField;


ws = new WebSocket('ws://mango.iwallinshop.com:8080');

ws.onerror = () => showMessage('WebSocket error');
ws.onopen = () => showMessage('WebSocket connection established');
ws.onclose = () => showMessage('WebSocket connection closed');

//emitir mensajes
function addMessage1(e) {

	message = document.getElementById("message");
	message.value = "1";

//	socket.emit('new-message', message.value);
  ws.send("1");
  return false;
}

//emitir mensajes
function addMessage3(e) {


	message = document.getElementById("message");
	message.value = "2";
  ws.send("2");


//socket.emit('new-message', message.value);
  return false;
}

/*

// send value from text input
function sendMessageForm(){
	socket.send(message.value);
	message.value = "";
}

// setup web socket


/*
function setupSocket(){

	// setup websocket
	// get_appropriate_ws_url is a nifty function by the libwebsockets people
	// it decides what the websocket url is based on the broswer url
	// e.g. https://mygreathost:9099 = wss://mygreathost:9099


	// setup!
	socket = new WebSocket( get_appropriate_ws_url());

	// open
	try {
		socket.onopen = function() {
			statusDiv.style.backgroundColor = "#40dd40";
			statusDiv.textContent = " Connected";
		}

		// received message
		socket.onmessage =function got_packet(msg) {
			messageDiv.innerHTML = msg.data + "<br />" + messageDiv.innerHTML;
		}

		socket.onclose = function(){
			statusDiv.style.backgroundColor = "#ff4040";
			statusDiv.textContent = " Closed ";
		}
	} catch(exception) {
		alert('<p>Error' + exception);
	}
}

*/
