import mongoose from 'mongoose';

const connectDatabase = async () => {
  if (!process.env.MONGODB_URI) {
    console.error('MONGODB_URI is not set in backend/.env');
    console.error('');
    console.error('  Option 1 — Start local MongoDB:');
    console.error('    mongod');
    console.error('  The default URI in .env points to mongodb://localhost:27017/selfcart');
    console.error('');
    console.error('  Option 2 — Use MongoDB Atlas (cloud, no install needed):');
    console.error('    1. Create a free cluster at https://mongodb.com/atlas');
    console.error('    2. Get your connection string from Atlas');
    console.error('    3. Update MONGODB_URI in backend/.env with your Atlas URI');
    console.error('');
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB at:', process.env.MONGODB_URI);
    console.error(err.message);
    console.error('');
    if (process.env.MONGODB_URI.includes('localhost') || process.env.MONGODB_URI.includes('127.0.0.1')) {
      console.error('  Local MongoDB is not running. Start it with:');
      console.error('    mongod');
      console.error('');
      console.error('  Or switch to MongoDB Atlas (see .env for instructions).');
    } else {
      console.error('  Check that your MongoDB Atlas URI is correct in backend/.env');
      console.error('  Make sure your IP address is whitelisted in Atlas Network Access.');
    }
    console.error('');
    process.exit(1);
  }
};

export default connectDatabase;
