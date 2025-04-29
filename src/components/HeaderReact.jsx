import { useState } from 'react';

export default function HeaderReact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <a href="/nisega" className="flex items-center space-x-2">
            <img src="/nisega/logo.png" alt="Logo NSG" className="h-12 w-auto m-1" />
            <span className="font-bold text-4xl">NISEGA</span>
            </a>

            {/* Botón hamburguesa */}
            <button
            type="button"
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>

            {/* Menú principal */}
                <nav className="hidden md:flex flex-wrap gap-4 text-sm md:text-base text-right">
                    <a href="/nisega/formacion" class="text-gray-700 hover:text-blue-600 transition">Formación</a>
                    <a href="/nisega/servicios" class="text-gray-700 hover:text-blue-600 transition">Servicios</a>
                    <a href="/nisega/mediciones" class="text-gray-700 hover:text-blue-600 transition">Mediciones</a>
                    <a href="/nisega/sobre" class="text-gray-700 hover:text-blue-600 transition">Sobre nosotros</a>
                    <a href="/nisega/contacto" class="text-gray-700 hover:text-blue-600 transition">Contacto</a>
                </nav>
        </div>

        {/* Menú móvil */}
        {isOpen && (
        <div className="absolute top-full pt-3 left-0 w-full bg-white shadow-md px-4 pb-4 flex flex-col gap-2 text-sm z-40">
            <a href="/nisega/formacion" className="text-gray-700 hover:text-blue-600 transition">Formación</a>
            <a href="/nisega/servicios" className="text-gray-700 hover:text-blue-600 transition">Servicios</a>
            <a href="/nisega/mediciones" className="text-gray-700 hover:text-blue-600 transition">Mediciones</a>
            <a href="/nisega/sobre" className="text-gray-700 hover:text-blue-600 transition">Sobre nosotros</a>
            <a href="/nisega/contacto" className="text-gray-700 hover:text-blue-600 transition">Contacto</a>
        </div>
        )}
    </header>
  );
}
