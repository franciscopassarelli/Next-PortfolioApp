"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Proyects = () => {
  // Estado para mantener el índice de la imagen activa
  const [activeIndex, setActiveIndex] = useState(0);

  // Función para cambiar al siguiente slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  // Función para cambiar al slide anterior
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  // Array con los contenidos de los slides
  const slides = [
    {
      image: "/NextApp.png",
      text: (
        <div className="clearfix rounded-lg text-dark bg-white custom-background p-4">
        <Image src="/NextApp.png" width={500} height={500} className="img-fluid float-md-end mb-3 ms-md-3 col-md-6" alt="..."/>
        <h4>FrannTenis</h4>
        <p className="col-md-6">
        Te presentamos un E-commerce autoadministrable desarrollado con Next JS, enfocado en mi tienda de tenis. Ofrece un formulario de inscripción y compra para los usuarios, una sección de administración para gestionar datos de compra, inventario para crear, modificar y borrar productos. También podes leer mensajes y comentarios de los usuarios. Simplifica tu experiencia de comercio electrónico con nuestra plataforma eficiente y fácil de usar."
        </p>
        <p className="col-md-6">
          Para este proyecto se usó, Next JS, Tailwind CSS y Firebase.
        </p>
      
        
          <Link className='btn btn-primary' href={"https://next-aplication-henna.vercel.app/"}>Mostrar proyecto</Link>
    
      </div>
      ),
    },
    {
      image: "/Sofi.png",
      text: (
        <div className="clearfix rounded-lg text-dark bg-white custom-background p-4">
        <Image src="/Sofi.png" width={500} height={500} className="img-fluid float-md-end mb-3 ms-md-3 col-md-6" alt="..."/>
        <h4>SofiShop</h4>
        <p className="col-md-6">
          Web, tienda ficticia de ropa femenina. Cuenta con una galeria de imagens para contactar directamente con la vendedora, donde brindará mas información acerca de sus productos.
        </p>
        <p className="col-md-6">
        Esta Web esta creada con HTML, CSS, JavaScript y Boostrap.
        </p>
      
        
          <Link className='btn btn-primary' href={"https://franciscopassarelli.github.io/Sofi-Shop/"}>Mostrar proyecto</Link>
    
      </div>
      

      ),
    },


    {
      image: "/contacto.png",
      text: (
        <div className="clearfix rounded-lg text-dark bg-white custom-background p-4">
        <Image src="/contacto.png" width={500} height={500} className="img-fluid float-md-end mb-3 ms-md-3 col-md-6" alt="..."/>
        <h4>Contactomaq</h4>
        <p className="col-md-6">
        página web dinámica y responsive para Contactomaq. Mejorando su presencia online y facilitando el acceso a información crucial para sus usuarios. 
        Se trata de un negocio de repuestos e insumos de jardineria y motoimplemntos.
        </p>
        <p className="col-md-6">
        Utilicé Next JS, Talwind CSS para este proyecto. La pagina esta vinculada hacia las ventas de Mercado Libre.
        </p>
      
        
          <Link className='btn btn-primary' href={"https://contactomaq.vercel.app/"}>Mostrar proyecto</Link>
    
      </div>
      

      ),
    },

    {
      image: "/Burger.png",
      text: (
        <div className="clearfix rounded-lg text-dark bg-white custom-background p-4">
    
       <Image src="/Burger.png" width={500} height={500} className="img-fluid float-md-end mb-3 ms-md-3 col-md-6" alt="..." />
      

        <h4>BurgerBeer</h4>
        <p className="col-md-6">
          Pagina Web De un Bar. Donde podras ver nuestras increibles hamburguesas y cervezas. Podes asistir a lugar y ordenar tus pedidos en la seccion de compras. También cuenta con su galeria de imagenes para visualizar mejor nuestras especialidades.
        </p>
        <p className="col-md-6">
          Este proyecto esta creado con HTML, CSS, JavaScript y J-QUERY.
        </p>
      
        
          <Link className='btn btn-primary' href={"tu_link_aquí"}>Mostrar proyecto</Link>
    
      </div>
      

      ),
    },

    {
      image: "/Crud.png",
      text: (
        <div className="clearfix rounded-lg text-dark bg-white custom-background p-4">
    
       <Image src="/Crud.png" width={500} height={500} className="img-fluid float-md-end mb-3 ms-md-3 col-md-6" alt="..." />
      

        <h4>Simple CRUD</h4>
        <p className="col-md-6">
       Simple CRUD, para practicas de Backend. Donde se pueden crear, visualizar, editar y borrar usuarios. Para almacenarlos en una base de datos.  
        </p>
        <p className="col-md-6">
          Este proyecto esta creado con hbs motores de plantillas. Node JS, Express JS y MY SQL utilizando boostrap. 
        </p>
      
        
          <Link className='btn btn-primary' href={"https://github.com/franciscopassarelli/FrannApp-CRUD"}>Mostrar proyecto</Link>
    
      </div>
      

      ),
    }
    // Puedes agregar más objetos de slides aquí según sea necesario
  ];

  // Total de slides
  const totalSlides = slides.length;

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div className={`carousel-item ${index === activeIndex ? 'active' : ''}`} key={index}>
            {slide.text}
          </div>
        ))}
      </div>
      
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary m-3" onClick={prevSlide}>Previous</button>
        <button className="btn btn-primary m-3" onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Proyects;
