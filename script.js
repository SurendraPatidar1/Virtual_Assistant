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

// window.addEventListener('load', () => {
//     wishMe();
// });

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
    btn.style.display="none";
    voice.style.display="block";
    // wishMe();
});

function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";

    if (message.includes("hello") || message.includes("hi") || message.includes("hey") {
        speak("Hello Sir, what can I help you with?");
    } 
    else if (message.includes("who are you") || message.includes("hu r u")) { // Make sure to use lowercase
        speak("I am a virtual assistant, created by Mister Surendra Sir.");
    }    
    else if (message.includes("open youtube")) {
        speak("Opening YouTube ....");
        window.open("https://www.youtube.com/", "_blank");
    } 
    else if (message.includes("open Github")) {
        speak("Opening GitHub ....");
        window.open("https://github.com/SurendraPatidar1", "_blank");
    } 
    else if (message.includes("open instagram")) {
        speak("Opening Instagram ....");
        window.open("https://www.instagram.com/", "_blank");
    } 
    else if (message.includes("open gfg") || message.includes("open geeks for geeks")) {
        speak("Opening GeeksForGeeks ....");
        window.open("https://www.geeksforgeeks.org/", "_blank");
    }     
    else if (message.includes("open facebook")) {
        speak("Opening Facebook ....");
        window.open("https://www.facebook.com/", "_blank");
    } 
    else if (message.includes("open Calculator")) {
        speak("Opening Calculator ....");
        window.open("calculator://", "_blank");
    } 
    else if (message.includes("open Whatsapp")) {
        speak("Opening WhatsApp ....");
        window.open("whatsapp://", "_blank");
    } 
    else if (message.includes("open word")) {
        speak("Opening Word ....");
        window.open("word://", "_blank");
    } 
    else if (message.includes("open spotify")) {
        speak("Opening Spotify ....");
        window.open("spotify://", "_blank");
    } 
    else if (message.includes("time")) {
        let time = new Date().toLocaleTimeString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time);
    } 
    else if (message.includes("date")) {
        let date = new Date().toLocaleDateString(undefined, { day: "numeric", month: "short" });
        speak(date);
    } 
    else {
        let finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
        window.open(`https://search.yahoo.com/search?fr=mcafee&type=E211US1289G0&p=${message}`);
    }
}
