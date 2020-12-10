import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { BsDashCircle } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';



const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.productReducer)
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {

        dispatch({ type: 'product', id: id })



    }, [id])

    
    const decquantity = () => {

        if (quantity > 1) {

            setQuantity(quantity - 1)

        }
    }


    return (
        <div className="mt-5  ">
            <div className="container mt-5 ">
                <div className="row ">
                    <div className="col-md-3 ">
                        <img src={product.image} alt="" />

                    </div>

                    <div className="col-md-3 offset-md-3 mt-5  ">
                        <h1>DETAILS</h1>
                        <div className="bg-success">
                            {product.name}
                        </div>

                        <div className="bg-danger">
                            Price: <span style={{ textDecorationLine: "line-through" }}> ${product.price}.00</span>
                        </div>
                        <div className="bg-warning">
                            discount Price: {product.discountPrice}%
                    </div>

                        <div>
                            <span className="plusMinus" onClick={decquantity}><BsDashCircle /></span>
                            <span style={{ fontSize: "20px" }}>{quantity}</span>
                            <span className="plusMinus" onClick={() => setQuantity(quantity + 1)}><AiOutlinePlus /></span>
                        </div>

                        <div>
                            <button className="bg-primary" onClick={() => dispatch({ type: "add-to-cart", payload: { product, quantity } })}>ADD TO CART</button>

                        </div>

                        <div>
                            <div>
                                <h4>{product.desc}</h4>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div >
    )
}

export default Details
