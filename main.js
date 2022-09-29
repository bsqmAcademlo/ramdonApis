const text = document.querySelector(".text");
const author = document.querySelector(".author");
const box = document.querySelector(".box");

async function getQuotes() {
    try {
        const data = await fetch("./db.json");
        const { quotes, colors } = await data.json();

        const numberQuote = numberRandom(quotes.length);
        const numberColor = numberRandom(colors.length);

        text.innerHTML = `<i>"${quotes[numberQuote].text}"</i>`;
        text.style.color = colors[numberColor];

        author.textContent = quotes[numberQuote].author;
        author.style.color = colors[numberColor];

        document.body.style.background = colors[numberColor];

        setTimeout(() => {
            box.style.transform = "scale(1)";
        }, 500);
    } catch (error) {
        console.log(error);
    }
}

function numberRandom(max) {
    return Math.trunc(Math.random() * (max - 0) + 0);
}

box.addEventListener("click", () => {
    box.style.transform = "scale(0)";
    getQuotes();
});

box.style.transform = "scale(1)";
getQuotes();
