const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

//**PATRONS**//

//GET route for open homeless shelter

//GET specific shelter

//GET shelter rules

//GET shelter wait

//POST route for saying im coming with name, phone number

//GET reputability

//POST reputability


//GET weather

//GET suicide line




//**Shelters**//

//POST new user came in

//POST spaces available

//POST reputability

//GET reputability


app.listen(PORT, () => console.log(`Listening on port:${PORT}`));


//databases would hold