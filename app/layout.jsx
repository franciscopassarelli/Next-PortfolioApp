import './globals.css'
import Navigation from '@/components/Navigation'



export const metadata = {
  title: 'Francisco Passarelli',
  description: 'Este es mi Portfolio',
  keywords: "next,react,app"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<head>
  <link rel='stylesheet' href='https://bootswatch.com/5/vapor/bootstrap.min.css'/>
</head>
      <body>
     <div>

     <Navigation/>
     <br/>
   
 
     <div className='container p-4'>     

  {children}
  <hr />
  <p>Espero que hayas encontrado la información y los proyectos presentados interesantes y relevantes para tus necesidades. Si tienes alguna pregunta adicional, comentario o sugerencia, no dudes en ponerte en contacto conmigo.</p> Gracias nuevamente por tu visita y por considerar mi trabajo. ¡Saludos! Francisco Passarelli.</div>
  </div>
     </body>

     
    </html>
  )
}
