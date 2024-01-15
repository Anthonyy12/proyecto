import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Register = () => {
  return (
    <Container>
      <Row className='px-4 my-5'>
        <Col><h1>Regístrate</h1></Col>
      </Row>
      <Row className='px-4 my-5'>
        <Col sm={6}>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='Email'/>
              <Form.Text className='text-muted'>
                Nunca compartas tu Email!
              </Form.Text>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formPassword'>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type='password' minLength='9' placeholder='Contraseña'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formConfirm'>
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control type='password' minLength='9' placeholder=' Confirmar Contraseña'/>
            </Form.Group>
            <Button variant='primary' type='submit'>Registrarse &gt;&gt;</Button>&nbsp;
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
