import React from 'react';
import ExperienceInglés from '@/components/ExperienceIngles';
import Image from 'next/image';

function AboutPage() {
  return (
    <div className="container">
      <div className="encabezado">
        <Image src="https://avatars.githubusercontent.com/u/118229728?v=4" width={70} height={70} alt="Your image" className="imagen-pequeña"/>
        <h1>Hello 👋, I&apos;m Francisco Nicolás Passarelli</h1>
      </div>
      <br/>
      <h3>Frontend Developer React JS</h3>
      <br/>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="p-3 custom-background"> {/* Apply background class here */}
              <p className="text-dark">Hi! I&apos;m a JavaScript developer, specializing in Front-End development with React and Next JS, improving my Back-end skills like Node JS, Express at Coderhouse. Eager to continue expanding my skills in this exciting field.</p>
              <p className="text-dark">I&apos;m looking for roles that allow me to employ and expand my knowledge in these frameworks and programming languages, accepting job opportunities in the IT market.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ul>
          <li>🔭 I&apos;m currently working as: <strong>Manager of the Mercado Libre Platform at Contactomaq. Also developing a system and an E-commerce for the same company.</strong></li>
          <li>🌱 Soon <strong>University Degree in Web Technologies.</strong></li>
          <li>🚀 Student at <strong>Coderhouse. Front-End Development React, NEXT JS / C# .NET.</strong></li>
          <li>🤝 I&apos;m available for <strong></strong></li>
          <li>✔️ I have the ability to adapt to different circumstances so that the final product is what the client really expects and user-friendly.
          ✔️ I also have the ability to analyze and interpret requirements and translate them into good development practices. 

          I&apos;m looking for roles that allow me to employ and expand my knowledge in popular frameworks and programming languages such as JavaScript, React, Node.js, databases, etc. Facilitating my growth towards a comprehensive position in web development.
          I would like to share work areas with people contributing my values.</li>
          <li>💬 Ask me about <strong>React JS and JavaScript.</strong></li>
          <li>🎾 To cut a bit <strong>I train tennis, play, and give tennis classes.</strong></li>
        </ul>
      </div>
      <div>
        <ExperienceInglés/>
      </div>
      <div>
        <p>My Email: franciscopassarelli7@gmail.com</p>
        <h3>Connect with me also</h3>
        <p>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgf5GvxhVHYUqV9roWJ4I4xyszcLCUHxRpxXKfx6R-5gSQuxrApw2QADJwvxF6OLnM810&usqp=CAU" alt="franciscopassarelli.github.io/Miportafolio/" height={30} width={30} />
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
