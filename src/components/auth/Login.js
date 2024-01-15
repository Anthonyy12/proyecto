import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = () => {
  return (
    <Container>
      <Row className='px-4 my-5'>
        <Col><h1>Iniciar Sesión</h1></Col>
      </Row>
      <Row className='px-4 my-5'>
        <Col sm={6}>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='Email'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type='password' minLenght='9' placeholder='Contraseña'/>
            </Form.Group>
            <Button variant='primary' type='submit'>Iniciar Sesión &gt;&gt;</Button>&nbsp;
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
