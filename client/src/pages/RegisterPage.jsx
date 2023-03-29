import React,{useEffect, useState} from 'react'
import {Form, Button,Card, Col, Row, Container, } from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import {Link} from 'react-router-dom'
import {registerUser} from "../features/auth/authSlice"
import { toast } from 'react-toastify'
import {useNavigate} from 'react-router-dom'


const RegisterPage = () => {


  const [formData, setFormData] = useState({
    name: '',
    email : '',
    password : '',
    passConfirm : '' 
  })

 
  const dispatch = useDispatch()

  const navigate = useNavigate()
  
  const {user, isError, isSuccess, message} = useSelector((state)=>state.auth)
  
  const {name, email, password, passConfirm} = formData

  
  const onChange = (ev) =>{
    setFormData({...formData, [ev.target.name] : ev.target.value})
  }

  
  useEffect(()=>{

    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
      toast.success('user create ' + name)
     navigate('/')

    }

  },[isError, dispatch, navigate, user, isSuccess, message, name])
  

  
  const handleSubmit = (ev) =>{
    ev.preventDefault()

    if(password !== passConfirm){
      toast.error('password not match')
    }else{

      const userData = {
        name, email, password
      }

      dispatch(registerUser(userData))
    }

  }



  return (
    <>
      <Container>
      <h1  className='text-md-center' style={{ fontSize : 30}}>Sign In</h1>
        <Row className='justify-content-md-center'>
          <Col xs={12} md={6}>
          <Card style={{ width: '40rem', height : '28rem', backgroundColor :'rgba(229, 232, 247, 0.993)' }}>
          <Card.Body>
          <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
              <Form.Label style={{ fontSize : 15}}>name</Form.Label>
              <Form.Control
              type='text'
              placeholder='enter your name'
              value={name}
              name = "name"
              onChange={onChange}
              style={{ border : '1px solid black', borderRadius : '10px' }}
              >
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label style={{ fontSize : 15}}>Email</Form.Label>
              <Form.Control
              type='email'
              placeholder='enter your email'
              value={email}
              name = "email"
              onChange={onChange}
              style={{ border : '1px solid black', borderRadius : '10px' }}
              >
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="password" className='my-3'>
              <Form.Label style={{ fontSize : 15}}>Password</Form.Label>
              <Form.Control
              type='password'
              placeholder='enter your password'
              value={password}
              name = "password"
              onChange={onChange}
              style={{ border : '1px solid black', borderRadius : '10px' }}
              >
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="passConfirm" className='my-3'>
              <Form.Label style={{ fontSize : 15}}>Confirm Password</Form.Label>
              <Form.Control
              type='password'
              placeholder='Confirm your password'
              value={passConfirm}
              name = "passConfirm"
              onChange={onChange}
              style={{ border : '1px solid black', borderRadius : '10px' }}
              >
              </Form.Control>
            </Form.Group>
              <Button type='submit' 
              variant='primary'
               size="lg"  className="btn btn-block d-grid gap-2">
                Valider</Button>

               
          </Form>

          <Row className='py-3'>
                <Col>
                    Login Customer?{' '}
                    <Link to={'/login'}>login</Link>
                </Col>
            </Row>
          </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default RegisterPage