import { Book } from "../models/bookModel.js";

// Save new book
const saveNewBook = async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const newBook = {
      title,
      author,
      publishYear,
    };

    const book = await Book.create(newBook);

    return res.status(201).send({ book });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};

// Get all books
const getAllBooks = async (req, res) => {
  console.log("gett all books");
  return res.status(200).send("get all books");
};

// Get one book by id
const getOneBook = async (req, res) => {
  console.log("get one book");
  return res.status(200).send("get one book");
};

// Update book using id
const updateBook = async (req, res) => {
  console.log("update book");
  return res.status(200).send("update book");
};

// Delete book using id
const deleteBook = async (req, res) => {
  console.log("delete book");
  return res.status(200).send("delete book");
};

export { saveNewBook, getAllBooks, getOneBook, updateBook, deleteBook };
