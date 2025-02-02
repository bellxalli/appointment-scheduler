import express from "express";

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;
const orders = [];
app.get('/', (req, res) =>
{
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/submit-apt', (req, res) =>
{
    const order = {
        fname: req.body.fname,
        lname: req.body.lname,
        date: req.body.date,
        time: req.body.time,
    };
    orders.push(order);
    res.send(`<h1>Appointment Submitted!</h1>`);
});

app.get('/admin/orders', (req, res) => {
    res.send(orders);
});

app.listen(PORT, () =>
{
    console.log(`Server is running at http://localhost:${PORT}`);
});
