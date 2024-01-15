import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Proyectos = () => {
  return (
    <Container>
      <Row className='px-4 my-5'>
        <Col><h1>Proyectos</h1></Col>
      </Row>
      <Row>
        <Col className='px-2 my-2'>
          <Card style={{width: '12rem'}}>
            <Card.Img src='/img/proyecto_1.jpg' variant='top'/>
            <Card.Body>
              <Card.Title>uTech</Card.Title>
              <Card.Text>
                Juan Carlos Bodoque
                <br/>14/01/2024
                <br/>26/06/2024
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Proyectos
