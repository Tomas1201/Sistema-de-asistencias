import express from 'express';
import mysql from 'mysql2/promise';

const app = express();

const PORT = process.env.PORT || 3000;

const dbConfig = {
  host: 'localhost',
  name: 'asistencia',
  port: 3306,
  password: '123456'
}

const connection = mysql.createPool({
  host: dbConfig.host,
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '.' });
    });

app.post('/asistencia', (req, res) => {
    const { nombre, apellido, fecha, hora } = req.body;
  res.sendFile('index.html', { root: '.' });
}   );


app.listen(PORT, () => {    
  console.log(`Server is running on http://localhost:${PORT}`);
});
