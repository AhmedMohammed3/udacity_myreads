# MyReads Project

A bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application

App Functionality
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

1. Currently Reading
2. Want to Read
3. Read

The homepage of the MyReads App shows the title "MyReads" and then three shelves, which are named "Currently Reading," "Want to Read," and "Read." There are books on each shelf. Each book has a green circle in the bottom right-hand corner. The app has a green plus sign icon in the bottom right-hand corner.

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

The green circle in the right-hand cover of the first book is clicked. You see a menu that has the following options: "Move To," "Currently Reading," "Want to Read," Read," and "None." The "Move to" option is greyed out. There is a checkmark next to the "Currently Reading" option.

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

The search page also has a link to / (the root URL), which leads back to the main page.

## Backend Server

There are a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [MyReads Project](#myreads-project)
  - [Backend Server](#backend-server)
    - [`getAll`](#getall)
    - [`get(bookId)`](#getbookid)
    - [`update`](#update)
    - [`search`](#search)
  - [Important](#important)
  - [Contribute](#contribute)
    - [Adding new features or fixing bugs](#adding-new-features-or-fixing-bugs)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `get(bookId)`

Method Signature:

```js
get(bookId);
```

- Returns a Promise which resolves to a JSON object containing a book object.
### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contribute

### Adding new features or fixing bugs

1. Open your terminal and clone the repository<br/>
   `git clone https://github.com/AhmedMohammed3/udacity_myreads.git`
2. Create your branch<br/>
   `git checkout -b {YOUR_BRANCH_NAME}`
3. run `npm start` to start development server (It's automatically building and restarting).
4. Make your edits and review it well.
5. Commit your changes with appropriate message. Follow [these git style guides](https://udacity.github.io/git-styleguide/)<br/>
   `git commit -m {YOUR_COMMIT_MSG}`
6. Push your changes<br/>
   `git push origin {YOUR_BRANCH_NAME}`
7. Create a pull request