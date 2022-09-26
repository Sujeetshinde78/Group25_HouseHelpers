import axios from 'axios';
import React, { useEffect } from 'react'
import { Button, ButtonGroup, Card, CardGroup } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import customer from '../images/images.jpg'
import helper from '../images/image.jpg'
import order from '../images/order.png'

 const AdminPage = () => {
    return (      
        <div>
          <CardGroup>
                <Card className='col-3 me-4 ms-3 mt-2'>
                    <Card.Img variant="top" src={customer} />
                    <Card.Body>
                        <Card.Title>Customer</Card.Title>
                        <Card.Text>
                            This is the customer crud operation for admin only.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <center>
                        <p><Link to={'/custlist'} className='btn btn-primary'>Customer CRUD</Link></p>
                        <p><small className="text-muted">Last updated 3 mins ago</small></p>
                        </center>
                    </Card.Footer>
                </Card>
                <Card className='col-3 me-4 ms-3 mt-5'>
                    <Card.Img variant="top" src={helper} />
                    <Card.Body>
                        <Card.Title>Helper</Card.Title>
                        <Card.Text>
                        This is the helper crud operation for admin only.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <center>
                        <p><Link to={'/helplist'} className='btn btn-secondary'>Helper CRUD</Link></p>
                        <p><small className="text-muted">Last updated 3 mins ago</small></p>
                        </center>
                    </Card.Footer>
                </Card>
                <Card className='col-3 me-4 ms-3 mt-5'>
                    <Card.Img variant="top" src={order} />
                    <Card.Body>
                        <Card.Title>Orders</Card.Title>
                        <Card.Text>
                        This is the order crud operation for admin only.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <center>
                        <p><Link to={'/ordlist'} className='btn btn-dark'>Order CRUD</Link></p>
                        <p><small className="text-muted">Last updated 3 mins ago</small></p>
                        </center>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    )
}

export default AdminPage;
