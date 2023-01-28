const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/Students2",(error,client)=>{
if (error){
    return console.log("not connected")
}
console.log("Connected Sucessfully");

const db = client.db ("students2");
db.collection("details").find().sort({ Name: 1 }).toArray((error, result) => {
    if (error) {
        return console.log("Unable to query the collection.", error);
    }
    console.log(result);
});

client.close()
});
