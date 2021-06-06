import React, { useEffect, useState } from 'react'
import { useParams,useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { BsDashCircle } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';



const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.productReducer)
    const [quantity, setQuantity] = useState(1)
    const history = useHistory()

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
                <div className="row  ">
                    <div style={{ marginTop: "100px" }} className="col-md-5  text-center ">
                        <img width="100%" src={product.image} alt="" />

                    </div>

                    <div style={{ fontFamily: "cursive" }} className="col-md-5 offset-md-1 mt-5  text-center  ">
                        <h1>DETAILS</h1>




                        <button type="button" class="btn btn-warning m-3">
                            <h4>{product.name}</h4> <br />
                            <h4> Price: <span style={{ textDecorationLine: "line-through" }}> ${product.price}.00</span><br /></h4>
                            <h4>  discount Price: {product.discountPrice}%</h4>
                        </button>

                        <div>
                            <h4>
                                <span className="plusMinus" onClick={decquantity}><BsDashCircle /></span>
                                <span style={{ fontSize: "20px" }}>{quantity}</span>
                                <span className="plusMinus" onClick={() => setQuantity(quantity + 1)}><AiOutlinePlus /></span></h4>
 
                        </div>

                        <div onClick ={()=>{history.push("/cart")}}>

                            <button onClick={() => dispatch({ type: "add-to-cart", payload: { product, quantity } })} type="button" class="btn btn-outline-info">ADD TO CART</button>



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
