import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Skeleton from 'react-loading-skeleton';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const componentMounted = true

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch('https://fakestoreapi.com/products')
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json())
                setLoading(false)
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>

            </>
        )
    }
    const filterProduct = (cate) => {
        const updatedList = data.filter(x => x.category === cate);
        setFilter(updatedList)
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="button d-flex justify-content-center mb-5">
                    <Button variant="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</Button>
                    <Button variant="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</Button>
                    <Button variant="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothig</Button>
                    <Button variant="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jawelery</Button>
                    <Button variant="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</Button>
                </div>
                {filter.map(product => {
                    return (
                        <div className="col-md-3 mb-4" key={product.id}>
                            <Card style={{ width: '18rem' }} className="h-100 text-center p-4">
                                <Card.Img variant="top" src={product.image} alt={product.title} height="250px" />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text className="lead fw-bold">
                                        ${product.price}
                                    </Card.Text>
                                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
                }

            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products