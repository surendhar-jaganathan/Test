

const MongoClient = require("mongodb")
const ServerApiVersion = require("mongodb")

const url = "mongodb+srv://jsurendhar11:VJrQO31awtVQN5W1@cluster0.ytrth0c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {

  async function asyncCall() {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
  }
  asyncCall()



} catch(err) {
  console.error(err);
}

let db = client.db("student_info");

