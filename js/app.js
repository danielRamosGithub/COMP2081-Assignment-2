// vue variable to handle the data for the assigment
var app = new Vue({
    el: '#app',
    data: {
        bookTitle: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        publisher: "Bloomsbury Children's Books; 1ª ed. edition (Sept. 1 2014)",
        synopsis: "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin! These new editions of the classic and internationally bestselling, multi-award-winning series feature instantly pick-up-able new jackets by Jonny Duddle, with huge child appeal, to bring Harry Potter to the next generation of readers. It's time to PASS THE MAGIC ON ...",
        reviews: [
            { 
                text: "This book is simply awesome, the artwork is a so well crafted and thought out. The book was well packaged and arrived sooner than I expected. The price was unbelievably low for a book of this quality. I will definitely use this seller again.",
                author: "Daniel Ramos",
                date: "27/10/2016"
            },
            { 
                text: "I'm so glad I tried this! I thought this was a series of children's books and I hope children read them because they are about choices, loyalty, good vs evil, kindness and a willingness to experience adventure that calls to all of us. Rowling writes extremely well and her ability to invent more adventures  just when it seems that all has been resolved, is matchless!",
                author: "Bruno Alves",
                date: "22/05/2015"
            },
            { 
                text: "This book is gorgeous! A great hardy feel with glossy paper. My dust jacket was completely fine unlike some of the earlier reviews so I guess Amazon improved their packing. Now, I am waiting for the first two books to go on sale.", 
                author: "Gabriel Costa",
                date: "11/02/2015"
            }
        ]
    }
  })