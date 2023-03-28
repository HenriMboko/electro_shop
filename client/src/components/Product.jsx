import React from 'react'
import Rating from './Rating'

import {Card, Container} from 'react-bootstrap'

const Product = ({product}) => {
  return (
    <>
        <Card className='my-3 p-3 rounded' >
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </a>

           <Container>
           <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title className='card-title' as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>

                <Card.Text as='div'>
                    <Rating value={product.rating} 
                    text={`${product.numReviews} reviews`} />
                </Card.Text>

                <Card.Text as='h3'>
                            ${product.price}
                </Card.Text>
            </Card.Body>
           </Container>

        </Card>
    </>
  )
}

export default Product