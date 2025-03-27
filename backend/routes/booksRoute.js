import express from "express";
import {
  saveNewBook,
  getAllBooks,
  getOneBook,
  updateBook,
  deleteBook,
} from "../controllers/booksController.js";
const router = express.Router();

// Route to save a new Book
router.post("/", saveNewBook);

// Route for Get All Books from database
router.get("/", getAllBooks);

// Route for Get One Book from database by id
router.get("/:id", getOneBook);

// Route for Update a Book
router.put("/:id", updateBook);

// Route for Delete a book
router.delete("/:id", deleteBook);

export default router;
