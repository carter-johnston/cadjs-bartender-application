const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://cartermin:<password>@cartercluster.ynvukh5.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("sample_training").collection("grades");

  // perform actions on the collection object
  client.close();
});