const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/Students",(error,client)=>{
if (error){
    return console.log("unable to connect")
}
console.log("Connected Sucessfully");

const db = client.db ("students");
const newStudent = {
    Id: 812,
    Email: "e@e.com",
    Name: "Rick",
    submission: 1,
    Grade: "N.A"
};

db.collection("studentdata").insertOne(newStudent, (error, result) => {
    if (error) {
        return console.log("Unable to insert the document.", error);
    }
    console.log("Document inserted successfully.", result.ops);
});

client.close();
});