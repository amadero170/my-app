import { useEffect } from 'react';

const Accordion = () => {
  useEffect(() => {
    const headings = document.querySelectorAll('.accordion-container h2');
    headings.forEach((heading) => {
      heading.addEventListener('click', () => {
        if(heading.nextElementSibling)
            {heading.nextElementSibling.classList.toggle('hidden')};
      });
    });
  }, []);

  return (
    <div className="accordion-container">
        <h2 className="bg-gray-500 hover:bg-grey-700 text-white font-bold py-1 px-4 my-1 rounded">Generales </h2>
        <p className="hidden">TOYOTA, 4 RUNNER Limited, 2005, V8 – 4.7, Automática, 4X2. Precio: $ 160,000 pesos.</p>
        <h2 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 my-1 rounded">Legal</h2>
        <p className="hidden">Nacional, Factura de agencia, todo pagado hasta 2023, certificado de verificación responsable de Jalisco 2022 y 2023, placas de Jalisco (se hace cambio de propietario en Vallarta o se entrega con baja, no presto placas, sin excepción)</p>
        <h2 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 my-1 rounded"> Comodidades </h2>
        <p className="hidden">Quemacocos, ventanas y espejos eléctricos, asientos de piel gris, desempañante en 3 ventanas, Aire acondicionado DUAL tan frio como quieras, calefacción en asientos, retrovisor electrónico con indicador de rumbo y botón para evitar deslumbramiento, indicador de rendimiento digital, iluminación interior led, 4 porta-vasos en centro y 4 porta-botella de 1.5 litros en puertas.</p>
        <h2 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 my-1 rounded">Seguridad </h2>
        <p className="hidden">6 Bolsas de aire, sistema de frenado ABS, sistema Auto LSD (diferencial de deslizamiento limitado), faros de niebla en 3 colores, blanco, amarillo y azul hielo, Burrera frontal, frenos nuevos 8/10, sensor de reversa.</p>
        <h2 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 my-1 rounded">Suspensión </h2>
        <p className="hidden">Barras estabilizadoras, rotulas y otras piezas de desgaste nuevas con menos de 1,000 km de uso, amortiguadores KYB Excel-G con menos de 4,000 km de uso.</p>
        <h2 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 my-1 rounded">Transmisión </h2>
        <p className="hidden">Sin ningún tema, se le hace servicio preventivo cada año.</p>
        <h2 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 my-1 rounded">Ventajas adicionales que quizás no encuentres en otro vehículo </h2>
        <p className="hidden">Todos los servicios se le han realizado en la agencia TOYOTA, cada 6 meses se le da servicio preventivo, (comprobable con sellos y facturas).
        A los 230,000 Kilómetros por proceso, no por falla, la agencia recomendó cambiar el cambio del conjunto de variación de tiempo de árbol de levas, TUBE ASSY, CAMSHAFT, así como cambiar los empaquetes de todo el motor y sus sellos y retenes, se le realizó el cambio (comprobable con facturas), Km Actual. 233,500
        Motor 2UZ-FE (de los más duraderos de Toyota)
        Llantas Yokohama ¾ de vida.</p>
        <h2 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 my-1 rounded">Detalles estéticos </h2>
        <p className="hidden">Pintura exterior, asiento del conductor necesita tapicera en una parte y el asiento del copiloto necesita costura.</p>
        <h2 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 my-1 rounded">Detalles mecánicos </h2>
        <p className="hidden">Ninguno, tu mecánico es bienvenido a revisar la unidad.</p>
        <h2 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 my-1 rounded">Detalles generales simples </h2>
        <p className="hidden">El botón para bajar la ventana del copiloto no siempre funciona.</p>
        <h2 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 my-1 rounded">Contacto </h2>
        <p className="hidden">Rubén Contreras, 322-266-6158 (de preferencia contactar por WhatssApp)</p>
    </div>
  );
};

export default Accordion;
