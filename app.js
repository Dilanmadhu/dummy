const express = require("express")
const app = express();

app.get('/',(req,res,next)=>{
    res.send("it is working")
})

app.get("/package/fetch/:id", (req, res, next)=>{
    const packageId = req.params.id;
    const responseObject = {
        "package": {
            "package_id" : packageId,
            "tag_id": 54215761,
            "type": "furniture",
            "package_condition": "new",
            "destination": "colombo",
            "price": 13200,
            "tracking_device_id": 1
        },
        "sender": {
            "email": "jhon.co@m.am",
            "first_name": "jhon",
            "last_name": "cina",
            "mobile_number": 771885421
        },
        "receiver": {
            "email": "brayan@g.com",
            "first_name": "brayan",
            "last_name": "adams",
            "mobile_number": 771234567
        }
    };

    res.json(responseObject);

})

app.listen(3000, ()=>{
    console.log("server is running at port 3000")
})