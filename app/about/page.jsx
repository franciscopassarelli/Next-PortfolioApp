import React from 'react';
import ExperienceIngles from '@/components/ExperienceIngles';
import Image from 'next/image';
import FrontendHerramientas from '@/components/FrontendHerramientas';
import BackendHerramientas from '@/components/BackendHerramientas';


function AboutPage() {
  return (
    <div class="container">
    <div class="encabezado">
      <Image src="https://avatars.githubusercontent.com/u/118229728?v=4" width={150} height={150} alt="Your image" className="imagen-pequeña"/>
      <h1 class='text-center'>Hello 👋 I m Francisco Nicolás Passarelli</h1>
    </div>
    <br/>
    <h2 class='text-center'>Software Developer</h2>
    <br/>
  
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="p-3 custom-background">
            <p class="text-dark">JavaScript developer, especially in Front-End with React and Next JS, my Back-end skills include Node, Express JS, My SQL and now C# .Net core. Eager to continue expanding my skills in this exciting field.</p>
            <p class="text-dark">I m looking for roles that allow me to employ and expand my knowledge in these frameworks and programming languages, accepting job opportunities in the IT market.</p>
            <p class="text-dark">During this time, I have developed websites and systems for businesses, adapting their business logic and needs. Furthermore, I have improved my skills in API integration, which has enabled me to create applications in both visual and functional quality. This has facilitated my growth towards a comprehensive position in programming, both in frontend and backend.</p>
            <p class='text-dark'>I am dedicating time to my English skills, recognizing its importance in the IT industry globally.</p>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <hr/>
    <br/>
  
    <h3 class='text-center bg-dark'>About Me</h3>
    <div>
      <ul>
        <li><strong>I m 29 years old and currently working as:</strong> Platform Manager at a company called Contactomaq. I developed a system to manage my business stock, then I finished an E-commerce for the same company using React JS and Node JS.</li>
        <li>📖 Studying a <strong>University Technical Degree in Web Technologies.</strong></li>
        <li><strong>🚀 At Coderhouse I finished:</strong> React JS Frontend Development Career. And C#</li>
        <li>✔️ Ability to adapt to different circumstances to ensure that the final product meets the clients expectations and is user-friendly.</li>
        <li>✔️ Ability to analyze and interpret requirements and translate them into good development practices.</li>
        <li> <strong> 💬 Ask me and learn more about my tools </strong> both frontend, backend as well as my interpersonal skills.</li>
        <li>🎾 To relax a bit, my passion is: <strong>Training tennis, playing and giving tennis lessons.</strong></li>
      </ul>
    </div>
    <div>
      <br/>
      <hr/>
      <br/>
  
      <h3 class='text-center bg-dark'>Tools</h3>
      <div class='container text-center'>
        <FrontendHerramientas/>
        <br/>
        <BackendHerramientas/>
      </div>
      <br/>
      <hr/>
      <br/>
  
      <h3 class='text-center bg-dark'>Work Experience</h3>
      <ExperienceIngles/>
    </div>
    <br/>
    <hr/>
    <br/>
  
    <div>
      
      <h3>Connect with me also</h3>
      <p>My Email: franciscopassarelli7@gmail.com</p>
      <p>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgf5GvxhVHYUqV9roWJ4I4xyszcLCUHxRpxXKfx6R-5gSQuxrApw2QADJwvxF6OLnM810&usqp=CAU" alt="franciscopassarelli.github.io/Myportfolio/" height={30} width={30} />
        <a href="https://github.com/franciscopassarelli" target="_blank">Visit my Github</a>
      </p>
      <p>
        <Image src="https://w7.pngwing.com/pngs/555/1002/png-transparent-computer-icons-linkedin-resume-curriculum-vitae-social-media-social-media-template-text-rectangle.png" alt="https://www.linkedin.com/in/franciscopassarelli/" height={30} width={30} />
        <a href="https://www.linkedin.com/in/franciscopassarelli/" target="_blank">Visit my Linkedin</a>
      </p>
    </div>
  </div>
  
  )
}

export default AboutPage;
