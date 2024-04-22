"use client"
// Componente BackendHerramientas.js
import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

const BackendHerramientas = () => {
  const herramientas = [
  
      { nombre: 'Express', logoUrl: 'https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png' },
      { nombre: 'MySQL', logoUrl: 'https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png' },
      { nombre: 'C# .NET', logoUrl: 'https://logodix.com/logo/1803732.png' },
      { nombre: 'Node.js', logoUrl: 'https://logodix.com/logo/374732.png' },
      { nombre: 'Git', logoUrl: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
      { nombre: 'SQL Server', logoUrl: 'https://logodix.com/logo/542137.jpg' }
    ];
    // Agrega más herramientas según sea necesario


  return (
    <Container className='border border-4 border-dark p-3'>
      <h3 className='mb-5' style={{ color: 'darkred', fontSize: '35px' }}>Backend</h3>
      <Row>
        {herramientas.map((herramienta, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2}  className="text-center mb-3">
           
              <Image src={herramienta.logoUrl} alt={herramienta.nombre} width={70} height={70} className='border border-4 border rounded-lg' />
            
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BackendHerramientas;
