'use client';

import { useState } from 'react';

export default function HomePage() {
  const [cuenta, setCuenta] = useState(0);
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white p-8 max-w-3xl mx-auto space-y-16">

      {/* TÍTULO PRINCIPAL */}
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2">Implementación de los Componentes de Next.js</h1>
      </header>

      {/* IMPLEMENTACIÓN 1: CONTADOR */}
      <section className="bg-gray-900 p-6 rounded-lg shadow border border-gray-700">
        <h2 className="text-2xl font-bold mb-4">Implementación 1: Componentes Funcional Contador</h2>
        <p className="text-lg mb-3">
          Clicks: <span className="text-green-400 font-semibold">{cuenta}</span>
        </p>
        <button
          onClick={() => setCuenta(cuenta + 1)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          Incrementar
        </button>
      </section>

      {/* IMPLEMENTACIÓN 2: MODAL */}
      <section className="bg-gray-900 p-6 rounded-lg shadow border border-gray-700 relative">
        <h2 className="text-2xl font-bold mb-4">Implementación 2:Componente Modal emergente</h2>
        <button
          onClick={() => setMostrarModal(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition"
        >
          Abrir Modal
        </button>

        {mostrarModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-xl font-semibold mb-4">¡Hola!</h3>
              <p className="mb-4">Este es un modal de ejemplo en Next.js con Tailwind.</p>
              <button
                onClick={() => setMostrarModal(false)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
