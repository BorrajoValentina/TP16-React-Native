export async function obtenerAlumno() {
    try {
        const alumnos = await fetch('http://192.168.1.45:8080/');
        const data = await alumnos.json();
        return data;
    } catch(e) {
        return e.message;
    }
}