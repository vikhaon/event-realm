import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5002;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('--- Database Connection: Successful! ---'))
  .catch((err) => console.log(err.message));

app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use('/posts', postRoutes);
// app.use('/api/auth', authRoute);
// app.use('/api/users', userRoute);
// app.use('/api/products', productRoute);
// app.use('/api/carts', cartRoute);
// app.use('/api/orders', orderRoute);
// app.use('/api/checkout', stripeRoute);

app.listen(PORT, () => console.log(`--- Node server is running on port: ${PORT} ---`));
