import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Card, Button, Col, Image, ListGroup, FormControl } from 'react-bootstrap'
import Rating from '../components/Rating'

import { useSelector,useDispatch } from 'react-redux'
import {getOneProductByid} from "../features/products/prodSlice"


const ProductDetails = ({history}) => {


    const [qty, setQty] = useState(0)

    const { id } = useParams();

    const dispatch = useDispatch()


    const {
        products
      } = useSelector((state)=>state.prod)

      useEffect(()=>{
        dispatch(getOneProductByid(id))
      },[dispatch, id])

      const handleChange = () =>{
        

      }


    return (
        <Container>

            <a className='btn btn-light my-3 btn_back' href='/'
            > Go Back</a>
            

            <Row>
                <Col md={6}>
                    <Image src={products.image} alt={products.name} />
                </Col>

                <Col md={3} >
                    <ListGroup variant='flush' >
                        <ListGroup.Item>
                            <h3>{products.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={products.rating}
                                text={`${products.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price : ${products.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description : {products.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price :
                                    </Col>
                                    <Col>
                                        <strong>${products.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status :
                                    </Col>
                                    <Col>
                                        <strong>{products.countInStock
                                            > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            {
                                products.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty : </Col>
                                            <Col>
                                                <FormControl as='select' value={qty}
                                                    onChange={(e) => setQty(e.target.value)}>
                                                    {
                                                        [...Array(products.countInStock
                                                        ).keys()].map(x => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        ))
                                                    }
                                                </FormControl>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )
                            }
                            <ListGroup.Item>
                                <Button
                                
                                    type='submit'
                                    className="btn btn-block"
                                    size='sm'
                                    bsStyle="info"
                                    
                                    disabled={products.countInStock === 0}
                                >Add To Card</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}
export default ProductDetails