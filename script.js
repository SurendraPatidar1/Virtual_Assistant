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
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display="none";
    voice.style.display="block";
    // wishMe();
});

function takeCommand(message) {
    btn.style.display="flex";
    voice.style.display="none";

    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello Sir, what can I help you with?");
    } 
    else if (message.includes("Who are you")){
        speak("I am a virtual assistant, created by Mister Surendra Sir.");
    }else if(message.includes("open youtube")){
        speak("OPening youtube ....");
        window.open("https://www.youtube.com/","_blank");
    }
    else if(message.includes("open Github")){
        speak("OPening Github ....");
        window.open("https://github.com/SurendraPatidar1","_blank");
    }
    else if(message.includes("open instagram")){
        speak("OPening Instagram ....");
        window.open("https://www.instagram.com/","_blank");
    }
    else if(message.includes("open GFG")){
        speak("OPening GeeksForGeeks ....");
        window.open("https://www.geeksforgeeks.org/","_blank");
    }
    else if(message.includes("open facebook")){
        speak("OPening Facebook ....");
        window.open("https://www.facebook.com/","_blank");
    }
    else{
        speak(`This is what i found on internet regarding ${message}`);
        window.open(`https://search.yahoo.com/search?fr=mcafee&type=E211US1289G0&p=${message}`);
    }
}
