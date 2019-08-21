class Library {

  constructor (libraryId, address) {
      this.address = address;
      this.libraryId = libraryId;
      this.books = new Map();
      this.users = new Map();
  }

  setAddress (address) {
      this.address = address;
  }

  addBook (book) {
      const { books } = this;

      if (!books.has(book)) {
          books.set(book.id, book);
          return true;
      }
      return false;
  }

  deleteBook (book) {
      const { books } = this;

      if (!books.has(book)) {
          delete book.id;
          return true;
      }
      return false;
  }

  addUser (user) {
      const { users } = this;

      if (!users.has(user)) {
          console.log("Added user - " + user.id);
          users.set(user.id, user);
          return true;
      }
      console.log("Unable to add user - " + user.id);
      return false;
  }

  deleteUser ( user) {
      const { users } = this;

      if (!users.has(user)) {
          delete user.id;
          return true;
      }
      return false;
  }

  findUser (userId) {
      const { users } = this;

      return users.get(userId);
  }

  findBook (bookId) {
      const { books } = this;

      return books.get(bookId);
  }

}

class Book {

  constructor (id, title, category, author) {
      this.id = id;
      this.title = title;
      this.category = category;
      this.author = author;
  }

  setDueDate (date) {
      this.dueDate = date;
  }

}

class User {

  constructor (id, address) {
      this.id = id;
      this.address = address;
      this.booksBorrowed = new Array();
  }

  getBooksBorrowed () {
      for (let book of this.booksBorrowed) {
          console.log(" Id - " + book.id +  ", title - " + book.title);
      }
  }

  borrowBook (book) {
      if (lateFee > 0.00) {
          console.log("Please return/renew old books and pay late fee, before borrowing new book!");
          return false;
      }
      book.setDueDate(new Date());
      this.booksBorrowed.add(book);
      return true;
  }

  returnBook (book) {
      if (this.booksBorrowed.indexOf(book) >= 0) {
          overDueBy = overDueByDays(book);
          if (overDueBy > 10) {
              lateFee = lateFee + ((overDueBy-10)*1.00);
          }
          this.booksBorrowed.remove(book);
          return true;
      }
      return false;
  }

  overDueByDays (book) {
      let today = new Date();
      let diffInMS = Math.abs(today.getTime() - book.dueDate.getTime());
      let diffInDays = diffInMS / (24 * 60 * 60 * 1000);
      return parseInt(diffInDays);
  }

}

class Address {

  constructor (name, streetNumber, streetName,
          city, state, zipcode) {
      this.name = name;
      this.streetNumber = streetNumber;
      this.streetName = streetName;
      this.city = city;
      this.state = state;
      this.zipcode = zipcode;
  }

  getAddress () {
      return this;
  }
}