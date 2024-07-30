const quotes =[
    "The time is always right to do what is right.",
    "If you\'re offered a seat on a rocket ship, don\'t ask what seat. Just get on.",
    "Winning isn't everything, but wanting to win is.",
    "You have within you, right now, everything you need to deal with whatever the world can throw at you.",
    "Character is power.",
    "Never be limited by other people's limited imaginations.",
    "Only a life lived for others is a life worthwhile.",
    "The only impossible journey is the one you never begin.",
    "If you fell down yesterday, stand up today",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it."
]
// math.floor(math.randon() * (max-min+1)) +(min)

const newQuote = document.querySelector("#new-quote");
newQuote.addEventListener("click", () => {
    let index= Math.floor(Math.random() * 10);
    document.querySelector("#quote").innerHTML = quotes[index];
});