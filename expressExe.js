import express from 'express'
import { writeFile, readFile } from 'fs/promises'
const server = express();
const PORT = 3000;

server.use(express.json());

server.get('/', (req, res) => res.end("hello world"));


server.post('/', async (req, res) => {
    try {
        const fileData = await readFile('test.txt', 'utf-8');
        console.log(fileData)
        const data = (fileData) ? JSON.parse(fileData) : [];
        if (!data) res.status(500).send(`Server interenal eror!`)
        if (req.body) {
            data.push(req.body);
        }
        else {
            res.status(422).error(`no body`)
        }
        console.log(data)
        await writeFile('test.txt', JSON.stringify(data))
        res.status(201).res.end('succses')
    }
    catch (error) {
        res.status(error.status || 500).send(error.massage || `server interenal eror`)
    }

})


















server.listen(3000, () => { console.log(`listening now on port:${PORT}`) })

