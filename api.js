let express = require("express");
require("./config");
let User = require("./user");
let app = express();
app.use(express.json());
// app.post("/create",async(request,response)=>{
//     let data = new User(request.body);
//     let result =  await data.save(); 
//     console.log(result);
//     response.send("data");

// })
// app.get("/show",async(request,response)=>{
//     let data = new User.find();
//     response.send(data);

// })
app.delete("/delete/:_id",async(request,response)=>{
    let data = await User.deleteOne(request.params);
    response.send("delete");

})
app.update("/update/:_id",async(request,response)=>{
    let data = await User.updateOne(request.params);
    response.send("update");

})




app.listen(5000);