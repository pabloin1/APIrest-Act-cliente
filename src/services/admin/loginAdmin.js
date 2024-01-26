export default async function loginAdmin(usuario, contraseña) {
    try {
      const response = await fetch('http://localhost:3000/API/auth/loginAd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ correo: usuario, password: contraseña })
      });
  
      if (!response.ok) {
        throw new Error('No se pudo realizar la solicitud');
      }
  
      const data = await response.json();
      console.log('Respuesta del servidor:', data);
      return data; // Devuelve los datos de respuesta, si es necesario
    } catch (error) {
      console.error('Error al realizar la solicitud POST:', error);
      throw error; // Puedes manejar el error de otra manera si lo prefieres
    }
  }
  