const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const all = [
    { "id": 101, "title": "Clean code", "author": "Robert C.Martin", "available": true },
    { "id": 102, "title": "The Alchemist", "author": "Paulo Coelho", "available": false },
]


//get all book 
app.get('/books', (req, res) => {
    res.json(all);
});



//add new book
app.post('/books', (req, res) => {

    let arrlegn = all[all.length - 1].id;

    const newData = {

        id: arrlegn + 1,
        title: req.body.title,
        available: true
    };
    all.push(newData);
    res.json(newData);
});


//get single book
app.get('/books/:id', (req, res) => {

    const singleId = all.find(k => k.id === parseInt(req.params.id));

    if (!singleId) return res.status(404).send('book not found');
    res.json(singleId);
});



// update book
app.put('/books/:id', (req, res) => {
    const change = all.find(t => t.id === parseInt(req.params.id));
    if (!change) return res.status(404).send('task not found');

    change.title = req.body.title || change.title;
    change.available = req.body.available !== undefined ? req.body.available : change.available;

    res.json(change);
});


//delete book
app.delete('/books/:id', (req, res) => {
    const one = all.findIndex(t => t.id === parseInt(req.params.id));
    if (one === -1) return res.status(404).send('task not found');

    const deleteOne = all.splice(one, 1);

    res.json(deleteOne);
});


//borrow 


app.post('/borrow', (req, res) => {
    const userID = req.body.userId;
    const bookID = req.body.bookId;
    const book = all.find(k => k.id === parseInt(bookID));
    console.log(book);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }
    if (!book.available) {
        return res.status(400).json({
            message: "Book already borrowed"
        });
    }



    
    res.json({
        message: "Book borrowed successfully",
        userId: userID,
        bookId: book.id,
        status: "not available"
    });
    book.available = false;
});


app.post('/return', (req, res) => {
    const userID = req.body.userId;
    const bookID = req.body.bookId;
    const book = all.find(k => k.id === parseInt(bookID));



    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    res.json({
        message: "Book returned successfully",
        userId: userID,
        bookId: book.id,
        status: "available"
    });
    book.available = true;
});
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});