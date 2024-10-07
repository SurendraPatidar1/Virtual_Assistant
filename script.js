let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-IN"; // Updated language code to "hi-IN"
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }
}

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    console.log(transcript);
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase().trim());
};

btn.addEventListener("click", () => {
    recognition.start();
    // speak("I'm listening...");
    btn.style.display = "none";
    voice.style.display = "block";
    // wishMe(); // Optionally greet when listening
});

function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";

    // Greeting Commands
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
        speak("Hello Sir, what can I help you with?");
    } 
    else if (message.includes("who are you") || message.includes("hu r u")) {
        speak("I am a virtual assistant, created by Mister Surendra Sir.");
    } 
    // Opening websites
    else if (message.includes("open youtube")) {
        speak("Opening YouTube ....");
        window.open("https://www.youtube.com/", "_blank");
    } 
    else if (message.includes("open github")) {
        speak("Opening GitHub ....");
        window.open("https://github.com/SurendraPatidar1", "_blank");
    } 
    else if (message.includes("open instagram")) {
        speak("Opening Instagram ....");
        window.open("https://www.instagram.com/", "_blank");
    } 
    else if (message.includes("open facebook")) {
        speak("Opening Facebook ....");
        window.open("https://www.facebook.com/", "_blank");
    } 
    else if (message.includes("open google")) {
        speak("Opening Google ....");
        window.open("https://www.google.com/", "_blank");
    } 
    else if (message.includes("open news")) {
        speak("Opening Google News ....");
        window.open("https://news.google.com/", "_blank");
    } 
    // Opening apps or utilities
    else if (message.includes("open calculator")) {
        speak("Opening Calculator ....");
        window.open("calculator://", "_blank"); // Note: some custom app URLs may not work directly in browsers
    }
    else if (message.includes("open whatsapp")) {
        speak("Opening WhatsApp ....");
        window.open("https://web.whatsapp.com/", "_blank");
    }
    else if (message.includes("open spotify")) {
        speak("Opening Spotify ....");
        window.open("https://www.spotify.com/", "_blank");
    }
    // Time and Date commands
    else if (message.includes("time")) {
        let time = new Date().toLocaleTimeString(undefined, { hour: "numeric", minute: "numeric" });
        speak("The time is " + time);
    } 
    else if (message.includes("date")) {
        let date = new Date().toLocaleDateString(undefined, { day: "numeric", month: "short" });
        speak("Today's date is " + date);
    } 
    // Music command
    else if (message.includes("play music")) {
        speak("Playing music on Spotify ....");
        window.open("https://www.spotify.com/", "_blank"); // Open Spotify or YouTube for music
    } 
    // Error handling for unknown commands
    else {
        speak("Sorry, I couldn't understand. Here's what I found on the internet for " + message);
        window.open(`https://search.yahoo.com/search?fr=mcafee&type=E211US1289G0&p=${message}`);
    }
}
