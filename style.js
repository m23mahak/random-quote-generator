const quotes = [
    {
      quote: "AND THOSE WHO WERE SEEN DANCING WERE THOUGHT TO BE INSANE BY THOSE WHO COULD NOT HEAR THE MUSIC.",
      author: "~FRIEDRICH NIETZSCHE"
    },
    {
      quote: "I NEVER ONCE FELT IT WAS WRONG TO HAVE SUCH A CAPACITY TO FEEL UNTIL I SAW JUST HOW MANY WERE WILLING TO USE IT AGAINST ME.",
      author: "~SAMIRA VIVETTE"
    },
    {
      quote: "THE WOMAN WHO DOES NOT REQUIRE VALIDATION FROM ANYONE IS THE MOST FEARED INDIVIDUAL ON THE PLANET.",
      author: "~MOHADEAS NAJUMI"
    },
    {
      quote: "PEOPLE WHO LIVE ON SURFACE AND THINK THEY ARE LIVING... LITTLE DO THEY KNOW THAT LIFE LIES IN THE DEPTH OF SELF",
      author: "~THE GOOD QUOTE"
    },
    {
      quote: "SOME MISTAKES TAKE US TO RIGHT PLACE.",
      author: "~CURLY TALES"
    },
    {
      quote:"wake up to reality Nothing ever goes as planned in this accursed world the longer you live the more you will realise that the only things that truely exist in this reality are merely pain suffering and futility",
      author: "Masashi Kishimoto"
    }
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    document.getElementById("quote").textContent = `${randomQuote.quote}`;
    document.getElementById("author").textContent = `${randomQuote.author}`;
  }