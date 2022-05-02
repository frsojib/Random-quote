let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes =
    [
    ' "May God shower his choicest blessings on Eid. Wish you a Happy Eid ul Fitr!" ',
    ' "May peace, safety, good health and prosperity be yours. Eid Mubarak!" ',
    ' "The month of Ramadan has left us my friend, and the joyous occasion of Eid is present before us once more. May we all enjoy the festivities of Eid." ',
    ' "May the light of the moon fall directly on you and Allah bless you with everything you desire today. Happy Eid!" ',
    ' "May Allah flood your life with love and happiness on this occasion, your heart with care and your mind with wisdom, wishing you Eid Mubarak." ',
    ' "The most beautiful thing for me is to see you smiling. You are so close to my heart that no one can even beat you. Enjoy this Eid to the fullest. Eid Mubarak!" ',
    ' "I hope your life is as spicy as biryani and sweet as kheer. Savour the joys of Eid." ',
    ' "We have been bestowed with a beautiful day by Allah. Our month-long wait is over. I hope you enjoy this day and be grateful for Allahs blessings. Eid Mubarak!" ',
];

btn.addEventListener('click', function () {
    var randomQuote = quotes[Math.floor(Math.random() *quotes.length)]
    output.innerHTML = randomQuote;
})