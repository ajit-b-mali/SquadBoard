import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_, res) => res.send('Server is ready'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});