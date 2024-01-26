export default async function getAllUser(){
    try {
        // Realizar una petición GET a http://localhost:3000/API/alumno
        const response = await fetch('http://localhost:3000/API/alumno');
    
        // Verificar si la respuesta es exitosa (código de estado 200-299)
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
    
        // Parsear la respuesta JSON
        const data = await response.json();
        return data
        // Manejar los datos obtenidos
        console.log('Datos recibidos:', data);
      } catch (error) {
        // Manejar errores
        console.error('Error en la solicitud:', error.message);
      }

}