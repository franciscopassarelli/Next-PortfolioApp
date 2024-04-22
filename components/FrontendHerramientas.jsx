"use client"
import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

const FrontendHerramientas = () => {
  const herramientas = [
    { nombre: 'Herramienta 1', logoUrl: 'https://cdn.worldvectorlogo.com/logos/react-1.svg' },
    { nombre: 'Herramienta 2', logoUrl: 'https://logodix.com/logo/374704.png' },
    { nombre: 'Herramienta 3', logoUrl: 'https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg' },
    { nombre: 'Herramienta 4', logoUrl: 'https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg' },
    { nombre: 'Herramienta 5', logoUrl: 'https://assets.codepen.io/t-954/internal/avatars/teams/default.png?fit=crop&format=auto&height=512&version=1653252283&width=512' },
    { nombre: 'Herramienta 6', logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7oKZSqoVwEUthCHK2y97QS-umtt9JPU_zUrq2J22t6ig21ZxLTCsLs3aXN1pdT80wQtI&usqp=CAU' },
  ];

  return (
    <Container className='border border-4 border-dark p-3'>
       <h3 className='mb-5' style={{ color: 'darkgreen' , fontSize: '35px'}}>Frontend</h3>
      <Row>
        {herramientas.map((herramienta, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2} className="text-center mb-3">
           
             
              <Image src={herramienta.logoUrl} alt={herramienta.nombre} width={70} height={70} className='border border-4 border rounded-lg' />
      
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FrontendHerramientas;
