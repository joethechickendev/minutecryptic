let n = {
    character: 0,
    answer: "bid",
    clue: [
        {   
            string : "Birds",
            type : "fodder"
        },
        {   
            string : "without",
            type : "ind"
        },
        {   
            string : "worms",
            type : "fodder"
        },
        {   
            string : "still",
            type : "none"
        },
        {   
            string : "add value.",
            type : "def"
        },
    ]
};

function getShare(a) {
    let b = {...a};
    b.clue = "";

    for(const word of a.clue) {
        if(word.type == "none") {
            b.clue += `${word.string}\n`;
        } else {
            b.clue += `<span class="${word.type}">${word.string}</span>\n`;
        }
    }

    b.clue += `<span class="numHint" style="font-style: normal;"></span>`;

    return btoa(JSON.stringify(b));
}

console.log(getShare(n));