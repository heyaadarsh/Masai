const library = {
  books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

  addBook(book) {
    if (!book || typeof book !== "object") {
      console.log("Invalid book data.");
      return;
    }

    const { title, author, year } = book;

    if (!title || !author || !year) {
      console.log("Book information is incomplete.");
      return;
    }

    this.books.push({ title, author, year });
    console.log(`Book '${title}' added successfully.`);
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title) || "Book not found.";
  },

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);

    if (index !== -1) {
      console.log(`Book '${this.books[index].title}' removed successfully.`);
      this.books.splice(index, 1);
    } else {
      console.log("Book not found.");
    }
  }
};

// Testing
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
console.log("Total books:", library.books.length);
