
const books = [
    {
        title: "Book 1",
        author: "Author 1",
        genre: "Fiction",
        pages: 150,
        cover: "p1.jpeg"
    },
    {
        title: "Book 2",
        author: "Author 2",
        genre: "Mystery",
        pages: 220,
        cover: "p2.jpeg"
    },
    {
        title: "Book 3",
        author: "Author 3",
        genre: "Fiction",
        pages: 150,
        cover: "p3.jpeg"
    },
    {
        title: "Book 4",
        author: "Author 4",
        genre: "Mystery",
        pages: 220,
        cover: "p4.jpeg"
    }, {
        title: "Book 5",
        author: "Author 5",
        genre: "Fiction",
        pages: 150,
        cover: "p5.jpeg"
    },
    {
        title: "Book 6",
        author: "Author 6",
        genre: "Mystery",
        pages: 220,
        cover: "p6.jpeg"
    }, {
        title: "Book 7",
        author: "Author 7",
        genre: "Fiction",
        pages: 150,
        cover: "p7.jpeg"
    },
     {
        title: "Book 8",
        author: "Author 8",
        genre: "Fiction",
        pages: 150,
        cover: "p8.jpeg"
    },
    {
        title: "Book 9",
        author: "Author 9",
        genre: "Mystery",
        pages: 220,
        cover: "p9.jpeg"
    }, {
        title: "Book 10",
        author: "Author 10",
        genre: "Fiction",
        pages: 150,
        cover: "p10.jpeg"
    },
    {
        title: "Book 11",
        author: "Author 11",
        genre: "Mystery",
        pages: 220,
        cover: "p11.jpeg"
    }, {
        title: "Book 12",
        author: "Author 12",
        genre: "Fiction",
        pages: 150,
        cover: "p12.jpeg"
    },
    {
        title: "Book 13",
        author: "Author 13",
        genre: "Mystery",
        pages: 220,
        cover: "p13.jpeg"
    },
    {
        title: "Book 14",
        author: "Author 14",
        genre: "Mystery",
        pages: 220,
        cover: "p14.jpeg"
    }, {
        title: "Book 15",
        author: "Author 15",
        genre: "Fiction",
        pages: 150,
        cover: "p15.jpeg"
    },
    {
        title: "Book 16",
        author: "Author 16",
        genre: "Mystery",
        pages: 220,
        cover: "p16.jpeg"
    },
    {
        title: "Book 17",
        author: "Author 17",
        genre: "Mystery",
        pages: 220,
        cover: "p17.jpeg"
    },
    {
        title: "Book 18",
        author: "Author 18",
        genre: "Mystery",
        pages: 220,
        cover: "p18.jpeg"
    },
    {
        title: "Book 19",
        author: "Author 19",
        genre: "Mystery",
        pages: 220,
        cover: "p19.jpeg"
    },
    {
        title: "Book 20",
        author: "Author 20",
        genre: "Mystery",
        pages: 220,
        cover: "p20.jpeg"
    },
    
];

let currentIndex = 0;

const bookCover = document.getElementById("book-cover");
const bookTitle = document.getElementById("book-title");
const author = document.getElementById("author");
const genre = document.getElementById("genre");
const pages = document.getElementById("pages");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function displayBook(index) {
    const book = books[index];
    bookCover.src = book.cover;
    bookTitle.textContent = book.title;
    author.textContent = book.author;
    genre.textContent = book.genre;
    pages.textContent = book.pages;
}

displayBook(currentIndex);

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + books.length) % books.length;
    displayBook(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % books.length;
    displayBook(currentIndex);
});
