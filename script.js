function speak() {
    var word = document.getElementById("speak").value;
    var utterance = new SpeechSynthesisUtterance();
    utterance.text = word;
    window.speechSynthesis.speak(utterance);
}

function speak() {
    var word = document.getElementById("speak").value;
    var utterance = new SpeechSynthesisUtterance(word);

    var voices = window.speechSynthesis.getVoices();
    var femaleVoice = voices.find(voice => voice.gender === 'female') || voices.find(voice => voice.name.includes('Female')) || voices.find(voice => voice.name.includes('woman')) || voices[0];

    if (femaleVoice) {
        utterance.voice = femaleVoice;
    }

    window.speechSynthesis.speak(utterance);
}

// Ensuring voices are loaded before trying to speak
window.speechSynthesis.onvoiceschanged = function() {
    speak(); // This will not speak immediately but will ensure voices are loaded
};


// document.addEventListener("DOMContentLoaded", function() {
//     // Example function to fetch market data from an API
//     async function fetchMarketData() {
//         try {
//             // Replace with your actual API endpoint
//             const response = await fetch('https://api.example.com/market-data');
//             if (!response.ok) {
//                 throw new Error('Network response was not ok ' + response.statusText);
//             }
//             const data = await response.json();
//             return {
//                 portfolioValue: data.portfolioValue,
//                 marketTrends: data.marketTrends
//             };
//         } catch (error) {
//             console.error('There has been a problem with your fetch operation:', error);
//             return {
//                 portfolioValue: 'Error fetching data',
//                 marketTrends: 'Error fetching data'
//             };
//         }
//     }

//     // Function to update the dashboard with fetched data
//     function updateDashboard(data) {
//         document.querySelector(".card:nth-child(1) p").textContent = data.portfolioValue;
//         document.querySelector(".card:nth-child(2) p").textContent = data.marketTrends;
//     }

//     // Fetch and update data on load
//     fetchMarketData().then(updateDashboard);
// });

const menuBtn = document.querySelector('.menu-btn');
const navlinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navlinks.classList.toggle('mobile-menu')

});