
import React from 'react';


const Experience = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="rounded border border-light p-3 experience mb-3">
          <div className="row">
            <div className="col-md-4">
              <div id="simple-list-example" className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center border rounded p-3">
                <h3 className='text-white'>Trabajos</h3>
                <a className="p-1 rounded bg-light text-dark" href="#simple-list-item-1">CONTACTOMAQ gestion ML, Web Developer</a>
                <a className="p-1 rounded bg-light text-dark" href="#simple-list-item-2">Entrenador de tenis</a>
                <a className="p-1 rounded bg-light text-dark" href="#simple-list-item-3">La Cueva /Comercio</a>
                <a className="p-1 rounded bg-light text-dark" href="#simple-list-item-4">TARTAGAL SRL</a>
                <a className="p-1 rounded bg-light text-dark" href="#simple-list-item-5">SHELL DILUBCO SRL</a>
              </div>
            </div>
            <div className="col-md-8">
              <div className="overflow-auto border rounded p-3" style={{ maxHeight: '300px' }}>
                <h4 id="simple-list-item-1" className='ExperienceOne'>Gestor de la Plataforma de Mercado Libre</h4>
                <br/>
                <div className="date">Octubre 2023 - Presente</div>
                <br/>
                <h5 className='ExperienceTwo'>Contactomaq</h5>
                <p>• Desarrollé una página web dinámica y responsive para Contactomaq. Mejorando su presencia online y facilitando el acceso a información crucial para sus usuarios. Utilicé Next JS, Talwind CSS y Node JS como base de datos.
                  Y tambien un sistema para gestionar el stock del negocio en un sector en especifico.
                </p>
                <p>• Coordiné y gestioné la presencia de productos de la empresa en la plataforma de Mercado Libre.</p>
                <p>• Optimicé la visibilidad de los productos mediante estrategias de SEO y técnicas de marketing digital.</p>
                <p>• Cargué y actualicé regularmente la información de productos, asegurando la precisión de los detalles y la coherencia con la estrategia de la marca.</p>
                <p>• Supervisé el inventario, gestionando eficientemente el stock para evitar agotamientos y excedentes.</p>
      
                <h4 id="simple-list-item-2" className='ExperienceOne' >Profesor Nacional de Tenis</h4>
                <br/>
                <div className="date">feb. 2020 - actualidad · 4 años 2 meses</div>
                <br/>
                <h5 className='ExperienceTwo'>El Campito tenis club</h5>
                <p>• Enseñanza de los principios y las reglas del deporte.</p>
                <p>• Adaptación del entrenamiento según la edad, tanto para jugadores jóvenes como adultos.</p>
                <p>• Clases de tenis para grupos e individuales en todos los niveles.</p>
                <p>• Planificación de horarios para las distintas clases.</p>
                <p>• Preparación física para los alumnos que deseen mejorar su condición.</p>
                <p>• Asesoramiento a los alumnos para adquirir el equipamiento deportivo, incluyendo la raqueta, más adecuado a sus características y nivel.</p>
                <p>•Servicios y mantenimiento de raquetas u otros.</p>

                <h4 id="simple-list-item-3" className='ExperienceOne'>La Cueva ventas, repositor</h4>
                <br/>
                <div className="date">mar. 2017 - jun. 2021 · 4 años 4 meses</div>
                <br/>
                <h5 className='ExperienceTwo'>La Cueva</h5>
                <p>• Repositor y vendedor de repuestos del automotor.</p>
                <p>• Atención telefónica y gestión del correo electrónico de la empresa.</p>
                <p>• Conteo y gestion de stock de los productos.</p>
                <p>•Venta al cliente ofreciendo un servicio de calidad, adaptando las soluciones al mismo.</p>

                <h4 id="simple-list-item-4" className='ExperienceOne'>Fabrica de productos alimenticios</h4>
                <br/>
                <div className="date">mar. 2015 - feb. 2017 · 2 años</div>
                <br/>
                <h5 className='ExperienceTwo'>Tartagal srl</h5>
                <p>• Fábrica de productos alimenticios.</p>
                <p>• Trabajo en equipo para facilitar el cumplimiento de objetivos.</p>
                <p>• Coordinación con diferentes departamentos.</p>
                <p>• Control y monitoreo de información.</p>

                <h4 id="simple-list-item-5" className='ExperienceOne'>Servicio de atención al cliente estación de servicios SHELL</h4>
                <br/>
                <div className="date">ene. 2013 - mar. 2015 · 2 años 3 meses</div>
                <br/>
                <h5 className='ExperienceTwo'>Shell</h5>
                <p>• Registro de datos e información en el sistema de la empresa.</p>
                <p>• Desempeño de tareas específicas del cargo y solicitadas por el superior.</p>
                <p>• Apertura y cierre del local, gestión y arqueo de caja.</p>
                <p>• Manejo de posnet.</p>
                <p>•Venta de lubricantes y combustibles.</p>
                <p>• Cumplimiento de los protocolos de la empresa y las medidas de seguridad y salud laboral.</p>
                <p>• Control de stock y trato periódico con proveedores para el reabastecimiento de suministros.</p>
                <p>• Manejo de inventario, incluyendo la recepción de suministros y el mantenimiento de registros.</p>
                <p>•Cumplimentación de documentación y presentación de reportes periódicos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
