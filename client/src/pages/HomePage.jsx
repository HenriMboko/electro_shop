import React,{useEffect} from 'react'
import { Container } from 'react-bootstrap'

import {Row, Col} from "react-bootstrap"
import Product from '../components/Product'
import {useDispatch, useSelector} from 'react-redux'
import {getAllProduct, resetProd} from "../features/products/prodSlice"
import LoginSpinner from '../components/Spinner'







const HomePage = () => {


  const dispatch = useDispatch()

  const {
    products, isLoading, isSuccess
  } = useSelector((state)=>state.prod)


useEffect(()=>{
  if(isSuccess){
    dispatch(resetProd())     
   }

dispatch(resetProd())
},[isSuccess, dispatch])


useEffect(()=>{
  dispatch(getAllProduct())

},[dispatch])

  return (
    <div>
      <Container>
      <h1 className='text-md-center' style={{ fontSize : 30}}>Latest Product</h1>
          <Row>
          {
            isLoading ? (<LoginSpinner/>):(
              <>
              
              {products.map((product) => {
                return (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                )
            })}
              
              </>
            )
          }
          </Row>
      </Container>
      </div>
  )
}

export default HomePage