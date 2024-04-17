import Experience from '@/components/Experience';
import Image from 'next/image';

function ServicesPage() {
  return (
    <div className="container">
      <div className="encabezado">
        <Image src="https://avatars.githubusercontent.com/u/118229728?v=4" width={70} height={70} alt="Tu imagen" className="imagen-pequeña"/>
        <h1 className='text-center'>Hola 👋, Soy Francisco Nicolás Passarelli</h1>
      </div>
      <br/>
      <h3>Desarrollador Frontend React JS</h3>
      <br/>

      <div className="container">
  <div className="row">
    <div className="col">
      <div className="p-3 custom-background"> {/* Aquí aplicas la clase de fondo */}
        <p className="text-dark">Hola! Soy un desarrollador JavaScript, me especialízo en el desarrollo Front-End con React y Next JS, mejorando mis habilidades de Back-end como Node JS, Express en Coderhouse. Ansioso por seguir expandiendo mis habilidades en este apasionante campo.</p>
        <p className="text-dark">Busco roles que me permitan emplear y ampliar mi conocimiento en estos frameworks y lenguajes de programación, aceptando oportunidades laborales en el mercado de IT.</p>
      </div>
    </div>
  </div>
</div>


      <div>
        <ul>
          <li>🔭 Actualmente estoy trabajando como: <strong>Gestor de la Plataforma de Mercado Libre en Contactomaq. También desarrollando un sistema y un E-commerce para la mísma empresa.</strong></li>
          <li>🌱 Proximamente <strong>Tecnicatura Universitaria en Tecnologías Web.</strong></li>
          <li>🚀 Estudiante en <strong>Coderhouse. Desarrollo Front-End React, NEXT JS / C# .NET.</strong></li>
          <li>🤝 Estoy disponible para <strong></strong></li>
          <li>✔️Tengo la facilidad de adaptarme a distintas circunstancias para que el producto final sea lo que realmente espere el cliente y amigable al usuario final.
          ✔️También tengo habilidad para analizar e interpretar requerimientos y plasmarlo con las buenas practicas de desarrollo. 

          Busco roles que me permitan emplear y ampliar mi conocimiento en frameworks populares y o lenguajes de programación como JavaScript, React, Node.js, bases de datos etc. Facilitando mi crecimiento hacia una posición integral en desarrollo web.
          Me gustaría compartir áreas de trabajo con personas aportando mis valores.</li>
          <li>💬 Pregúntame sobre <strong>React JS y JavaScript.</strong></li>
          <li>🎾 Para cortar un poco <strong>Entréno tenis, juego y doy clases de tenis.</strong></li>
        </ul>
      </div>
<div>
<Experience/>
</div>


<div>
        <p>Mi Email: franciscopassarelli7@gmail.com</p>
        <h3>Conéctate conmigo también</h3>
        <p>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgf5GvxhVHYUqV9roWJ4I4xyszcLCUHxRpxXKfx6R-5gSQuxrApw2QADJwvxF6OLnM810&usqp=CAU" alt="franciscopassarelli.github.io/Miportafolio/" height={30} width={30} />
          <a href="https://github.com/franciscopassarelli" target="_blank">Visitar mi Github</a>
        </p>
        <p>
          <Image src="https://w7.pngwing.com/pngs/555/1002/png-transparent-computer-icons-linkedin-resume-curriculum-vitae-social-media-social-media-template-text-rectangle.png" alt="https://www.linkedin.com/in/franciscopassarelli/" height={30} width={30} />
          <a href="https://www.linkedin.com/in/franciscopassarelli/" target="_blank">Visitar mi Linkedin</a>
        </p>
      </div>
    </div>
  )
}

export default ServicesPage;
