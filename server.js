const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.post('/send-email', async (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: 'your-email@gmail.com', pass: 'your-password' }
    });
    
    await transporter.sendMail({
        from: 'your-email@gmail.com',
        to: 'your-email@gmail.com',
        subject: 'She Said YES! 🎉',
        text: 'She accepted! You did it! ❤️'
    });
    
    res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));