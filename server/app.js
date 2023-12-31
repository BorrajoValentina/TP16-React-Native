import express from 'express';
import { PORT } from './config.js';
import cors from 'cors';
import { actualizarAlumnoById, borrarAlumnoById, getAlumnos, getAlumnosById, insertarRegistro } from "./database.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    const respuesta = await getAlumnos();
    res.status(200).send(respuesta);
});

app.get('/alumno/:id', async (req, res) => {
    const respuesta = await getAlumnosById(req.params.id);
    res.status(200).send(respuesta);
});

app.post('/alumno', async (req, res) => {
    const {apellido, nombre, email, fnac, movil, dni} = req.body;
    const respuesta = await insertarRegistro(apellido, nombre, email, fnac, movil, dni);
    res.status(200).send(respuesta);
});

app.put('/alumno/actualizar', async (req, res) => {
    const {id,apellido,nombre,email,fnac,movil,dni} = req.body;
    const respuesta = await actualizarAlumnoById(id, apellido, nombre, email, fnac, movil, dni);
    res.status(200).send(respuesta);
});

app.delete('/alumno/eliminar/:id', async (req, res) => {
    const respuesta = await borrarAlumnoById(req.params.id);
    res.status(200).send(respuesta);
});

app.listen(PORT, ()=>{
    console.log('El servidor esta corriendo en el puerto '+ PORT);
});