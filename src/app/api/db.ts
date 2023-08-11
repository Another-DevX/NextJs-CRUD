import mongoose, { connection } from 'mongoose';

let alreadyConnected = 0;

export default async function connectDB() {
  console.log('alreadyConnected', alreadyConnected);
  if (alreadyConnected) return;
  const cluster = await mongoose.connect(
    process.env.MONGODB_URL ||
      'mongodb+srv://anotherDevX:eMuLXOSBO5IJt936@cluster0.52l9krd.mongodb.net/?retryWrites=true&w=majority'
  );
  console.log(cluster.connection.db.databaseName);
  alreadyConnected = cluster.connections[0].readyState;
}

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected');
});

mongoose.connection.on('Error', (error) => {
  console.error('Mongoose has an error', error);
});
