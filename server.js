import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 6060;

app.use(express.static(`${__dirname}/public`))

app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});