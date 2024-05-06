// pages/index.js

import BackendHerramientas from '@/components/BackendHerramientas';
import Experience from '@/components/Experience';
import FrontendHerramientas from '@/components/FrontendHerramientas';
import Image from 'next/image';
import SmallCarousel from '@/components/Carrousel';
import Proyects from '@/components/Proyects';
import Link from 'next/link';





function IndexPage() {

  const images = [
    { src: '/Certificado1.png', alt: 'Descripción de la imagen 1', caption: 'Título de la imagen 1', description: 'Descripción detallada de la imagen 1' },
    { src: '/Certificado2.png', alt: 'Descripción de la imagen 2', caption: 'Título de la imagen 2', description: 'Descripción detallada de la imagen 2' },
    { src: '/Certificado3.png', alt: 'Descripción de la imagen 3', caption: 'Título de la imagen 3', description: 'Descripción detallada de la imagen 3' },
    { src: '/Certificado4.png', alt: 'Descripción de la imagen 4', caption: 'Título de la imagen 4', description: 'Descripción detallada de la imagen 4' },
    { src: '/Certificado5.png', alt: 'Descripción de la imagen 5', caption: 'Título de la imagen 5', description: 'Descripción detallada de la imagen 5' },
    { src: '/Certificado6.png', alt: 'Descripción de la imagen 6', caption: 'Título de la imagen 6', description: 'Descripción detallada de la imagen 6' }
  ];
  
  


  return (
    <div className="container">
    <div className="encabezado">
      <Image src="https://avatars.githubusercontent.com/u/118229728?v=4" width={150} height={150} alt="Tu imagen" className="imagen-pequeña"/>
      <h1 className='text-center'>Hola 👋 Soy Francisco Nicolás Passarelli</h1>
    </div>
    <br/>
    <h2 className='text-center'>Desarrollador de software</h2>
    <br/>

    <div className="container">
<div className="row">
  <div className="col">
    <div className="p-3 custom-background"> {/* Aquí aplicas la clase de fondo */}
      <p className="text-dark">Desarrollador JavaScript, especialmente en Front-End con React y Next JS, mis habilidades de Back-end son Node, Express JS, My SQL y ahora C# .Net core. Ansioso por seguir expandiendo mis habilidades en este apasionante campo.</p>
      <p className="text-dark">Busco roles que me permitan emplear y ampliar mi conocimiento en estos frameworks y lenguajes de programación, aceptando oportunidades laborales en el mercado de IT.</p>
      <p className="text-dark">Durante este tiempo, he desarrollado páginas web y sistemas para comercios, adaptando su lógica de negocio y necesidades. Además, he mejorado mis habilidades en la integración de APIs, lo que me ha capacitado para crear aplicaciones tanto en su calidad visual como funcional. Esto ha facilitado mi crecimiento hacia una posición integral en programación, tanto en el frontend como en el backend.</p>
      <p className='text-dark'>Estoy dedicando tiempo para mis habilidades en Inglés, reconociendo su importancia en el rubro IT globalmente.</p>

    </div>
  </div>
</div>
</div>
<br/>
<hr/>
<br/>

<h3 className='text-center bg-dark'>Sobre mí</h3>
    <div>
      <ul>
        <li><strong> Tengo 29 años y estoy trabajando como:</strong> Gestor de la Plataforma de Mercado Libre en una empresa llamada Contactomaq. Desarrollé un sistema para mantener mi stock del negocio, luego terminé un E-commerce para la mísma empresa utilizando React JS y Node JS.</li>
        <li>📖 Estudiando una<strong> Tecnicatura Universitaria en Tecnologías Web.</strong></li>
        <li><strong>🚀 En Coderhouse terminé:</strong> Carrera desarrollo Frontend React JS. Y C#</li>
        <li>✔️ Facilidad de adaptarme a distintas circunstancias para que el producto final sea lo que realmente espere el cliente y amigable al usuario final.</li>
        <li>✔️ Habilidad para analizar e interpretar requerimientos y plasmarlo con las buenas practicas de desarrollo. </li>
        <li> <strong> 💬 Consultame y conocé mas sobre mis herramientas </strong> de frontend, backend como también mis habilidades iterpersonales.</li>
        <li>🎾 Para distraerme un poco mi pasión es: <strong>Entrenar tenis, jugar y dar mis clases de tenis.</strong></li>
      </ul>
    </div>
<div>
<br/>

<hr />
<br/>

<h3 className='text-center bg-dark'>Herramientas</h3>
<div className='container text-center'>

<FrontendHerramientas/>
<br/>
<BackendHerramientas/>

</div>

<br/>

<hr />
<br/>

<h3 className='text-center bg-dark'>Experiencia laboral</h3>
<Experience/>
</div>



<br/>
<hr />

<div className="container">
<div className="row">
  <div className="col">
    <h3 className='text-center bg-dark'>Certificados</h3>
    <div className="carousel-container">
      <SmallCarousel images={images} className="carousel" />
    </div>
  </div>
</div>
</div>

<br/>
<hr/>
<br/>
<div className='container'>

<h3 className='text-center bg-dark'>Proyectos</h3>
<br/>
<Proyects/>
</div>
<hr/>
<br/>

<div className='container'>
    
      <h3>Conéctate conmigo</h3>
      <p>Mi Email: franciscopassarelli7@gmail.com</p>
<p>
        <Link className='btn btn-info' href="https://drive.google.com/file/d/1LKlVsBWm5zRI3rjRhNcVc3DwiVJ8ZeR4/view?usp=sharing" target="_blank"><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgf5GvxhVHYUqV9roWJ4I4xyszcLCUHxRpxXKfx6R-5gSQuxrApw2QADJwvxF6OLnM810&usqp=CAU" alt="franciscopassarelli.github.io/Miportafolio/" height={30} width={30} /> Curriculum Vitae</Link>
        </p>
      
      <p>
        
        <Link className='btn btn-warning' href="https://github.com/franciscopassarelli" target="_blank"><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgf5GvxhVHYUqV9roWJ4I4xyszcLCUHxRpxXKfx6R-5gSQuxrApw2QADJwvxF6OLnM810&usqp=CAU" alt="franciscopassarelli.github.io/Miportafolio/" height={30} width={30} /> Visitar mi Github</Link>
      </p>
      <p>
        
        <Link className='btn btn-success' href="https://www.linkedin.com/in/franciscopassarelli/" target="_blank"><Image src="https://w7.pngwing.com/pngs/555/1002/png-transparent-computer-icons-linkedin-resume-curriculum-vitae-social-media-social-media-template-text-rectangle.png" alt="https://www.linkedin.com/in/franciscopassarelli/" height={30} width={30} /> Visitar mi Linkedin</Link>
      </p>
    </div>
  </div>
  )
}

export default IndexPage;
