import React,{useEffect, useState} from 'react'
import {Form, Button,Card, Col, Row, Container, } from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import {loginUser,loadUser} from "../features/auth/authSlice"
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import LoginSpinner from '../components/Spinner'

const LoginPage = () => {


const [formData, setFormData] = useState({
  email : '',
  password : ''
})



const dispatch = useDispatch()

const navigate = useNavigate()

const {user, isError,
   isSuccess, message, isLoading} = useSelector((state)=>state.auth)

const {email, password} = formData

const onChange = (ev) =>{
  setFormData({...formData, [ev.target.name] : ev.target.value})
}

useEffect(()=>{

  if(isError){
    toast.error(message)
  }

  if(isSuccess || user){
  toast.success('Welcom Back ')
   navigate('/')

  }



},[isError, dispatch, navigate, user, isSuccess, message])

const onSubmit = (ev) =>{
  ev.preventDefault()

  const userData = {
    email, password
  }

  dispatch(loginUser(userData))
}

if(isLoading){
  <LoginSpinner />
}

  return (
    <>
      <Container>
      <h1  className='text-md-center' style={{ fontSize : 30}}>Sign In</h1>
        <Row className='justify-content-md-center'>
          <Col xs={12} md={6}>
          <Card style={{ width: '40rem', height : '20rem', backgroundColor :'rgba(229, 232, 247, 0.993)' }}>
          <Card.Body>
          <Form onSubmit={onSubmit}>
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
   
              <Button type='submit' 
              variant='primary'
               size="lg"  className="btn btn-block d-grid gap-2 btn-custom">Valider</Button>


          </Form>

          <Row className='py-3'>
                <Col>
                    New Customer?{' '}
                    <Link to={'/register'}>Register User</Link>
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

export default LoginPage