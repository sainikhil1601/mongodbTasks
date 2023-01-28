const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/Students2",(error,client)=>{
if (error){
    return console.log("unable to connect")
}
console.log("Connected Sucessfully");

const db = client.db ("students2");
db.collection ("details").insertMany([
    {
        Id: 101,
        Name: "Alex",
        Marks: 90,
        Grade: "A",
        Date: new Date(2023-11-10)
    },
    {
        Id: 102,
        Name: "John",
        Marks: 80,
        Grade: "B",
        Date: new Date(2023-10-11)
    },
    {
        Id:103,
        Name:"Sam",
        Marks:92,
        Grade:"A",
        Date:new Date(2023-11-10)
    },
    {
        Id:104,
        Name:"Rob",
        Marks:74,
        Grade:"C",
        Date:new Date(2023-11-10)
    },
    {
        Id:105,
        Name:"Jax",
        Marks:93,
        Grade:"A",
        Date:new Date(2023-10-11)
    }
    
],(error,result)=>{
    if (error){
        return console.log("unable to insert",error);
    }
    console.log(JSON.stringify(result.ops));
});
client.close();
});