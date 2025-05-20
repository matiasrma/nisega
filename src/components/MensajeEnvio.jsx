// components/MensajeEnvio.jsx
import { useEffect, useState } from 'react';

export default function MensajeEnvio() {
    const [envio, setEnvio] = useState('');
    const [nombre, setNombre] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const envioParam = urlParams.get("envio") ?? "";
    const nombreParam = urlParams.get("nombre") ?? "";

    setEnvio(envioParam);
    setNombre(nombreParam);

    if (envioParam != "") {
      const target = document.getElementById("envio");
        if (target) {
        // Pequeño delay para asegurar que todo esté cargado
        setTimeout(() => {
            target.style.display = "block"; // Mostrar si estaba oculto
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
        }
    }
  }, []);

    if (envio === 'Exito'){
        return(
        <div id="envio" class="bg-green-100 text-green-800 p-4 rounded mb-4 text-center">
            {nombre != '' ? nombre + ', Gracias por tu contacto. ' : ''} ¡Mensaje enviado con éxito!
        </div>
        )
    }
    else if (envio === 'Error'){
        return (
        <main id="envio">            
            <div class="bg-red-100 text-red-800 p-4 rounded mb-4 text-center">
                {nombre != '' ? nombre + ', nos disculpamos, ' : 'Nos disculpamos,'} hubo un error al enviar el mensaje.
            </div>
            <div class="p-4 rounded mb-4 text-center">
                Podes contacte por email a: <a href="mailto:contacto@nisega.com" target="_blank" class="text-blue-600 hover:underline">contacto@nisega.com</a>
                <br />
                o por WhatsApp a: <a href="https://wa.me/5492995110789" target="_blank" class="text-blue-600 hover:underline">5492995110789</a>
            </div>  
        </main>  
        );      
    }
    else {
        return(

        <main class="max-w-4xl mx-[100px] px-4 py-10 max-sm:mx-0 slide-up">
            <form id="contacto-form" action="/contacto.php" method="POST" class="space-y-4 w-full">
                <div>
                    <label class="block font-semibold">Nombre y Apellido</label>
                    <input type="text" name="nombre" class="w-full border border-gray-300 p-2 rounded" required />
                </div>
                <div>
                    <label class="block font-semibold">Email</label>
                    <input type="email" name="email" class="w-full border border-gray-300 p-2 rounded" required />
                </div>
                <div>
                    <label class="block font-semibold">Mensaje</label>
                    <textarea name="mensaje" class="w-full border border-gray-300 p-2 rounded h-32" required></textarea>
                </div>
                <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer">
                Enviar
                </button>
            </form>
        </main>
        );
    }
    
}
