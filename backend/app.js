const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PostData = require('./models/postData');
const app = express();


app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({
    extended: true,
    limit: '5mb'
}))

mongoose.connect('mongodb+srv://<USERNAME:PASSWORD>@cluster0.qkqim.mongodb.net/formData?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('Database Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('express http server: for posting data make a post request to /form');
});

app.post('/form', async (req, res) => {
    const data = req.body;
    const imageData = data.fileData.split(',');
    await PostData.create({ firstName: data.firstName, lastName: data.lastName, emailId: data.emailId, phoneNumber: data.phoneNumber, image: { contentType: imageData[0], data: imageData[1] } })
    res.sendStatus(200);
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on port ${process.env.PORT || 5000}`);
});


