const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/Students",(error,client)=>{
if (error){
    return console.log("not connected")
}
console.log("Connected Sucessfully");

const db = client.db ("students");
db.collection("studentdata").find({ submission: 1 }).toArray((error, result) => {
    if (error) {
        return console.log("Unable to find the records.", error);
    }
    console.log(result);
});
client.close()
});
