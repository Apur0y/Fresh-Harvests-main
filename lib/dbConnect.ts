import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://fresh-harvests:e0bImNyY3bOqJl6X@mazerunner.l4kl7ya.mongodb.net/?retryWrites=true&w=majority&appName=MazeRunner";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

export default function dbConnet(collectionName:string){

    const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

return client.db('fresh-harvests').collection(collectionName);
}

export const allCollection={
  userCollection:"users",
  productCollection: 'products',
  categoryCollection:"categories"

}


