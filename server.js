require('dotenv').config()
const express = require('express')
const QRCode = require('qrcode')
const app = express()


app.get('/generate-qr-code', async function (req, res) {

    let { data } = req.query
    let dataUrl = await QRCode.toDataURL(String(data));
    res.json({ code: dataUrl })

})



app.listen(process.env.PORT, () => {
    console.log("Server started on port" + process.env.PORT);
})