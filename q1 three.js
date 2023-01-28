const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/Students",(error,client)=>{
if (error){
    return console.log("not connected")
}
console.log("Connected Sucessfully");

const db = client.db ("students");
db.collection("studentdata").updateMany({
    submission:1
},{
    $set:{
        Grade:"A"
    }
},{
    returnOriginal:false
}).then ((result)=>{
    console.log(result);
});
client.close()
});
