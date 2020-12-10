import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { BsDashCircle } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiTwotoneDelete } from 'react-icons/ai';




const Cart = () => {

    const { products, totalPrice, totalQuanties } = useSelector(state => state.cartReducer)
 

    const dispatch = useDispatch();

    return (
        <div style={{ marginTop: "100px" }}>
            {products.length > 0 ? <>
                <h1>Your Cart</h1>

                <div className="container-fluid mt-5  ">
                    <div className="row ">

                        <div className="col-md-9 ">

                            {/* i have used it but it have troubles on small screen thats why i wrote indivisual below  */}

                            {/* <div className="row">

                                <div className="col-md-2 ">
                                    Picture

                            </div>
                                <div className="col-md-2 ">
                                    Name

                            </div>

                                <div className="col-md-2 ">

                                    Price

                            </div>
                                <div className="col-md-2 ">
                                    Inc/Dec

                            </div>
                                <div className="col-md-2 ">
                                    Total Price

                            </div>
                                <div className="col-md-2 ">
                                    Remove

                            </div>

                            </div> */}


                            {products.map((v, i) => {
                                return (
                                    <div className="row" key={v.id}>
                                        <div className="col-md-2">
                                            <img src={v.image} alt="" width="100px" height="100px" />

                                        </div>

                                        <div className="col-md-2">
                                            <p>NAME</p>
                                            <h2>{v.name}</h2>
                                        </div>
                                        <div className="col-md-2">
                                            <p>PRICE</p>
                                            <h2>${v.discountPrice}</h2>

                                        </div>
                                        <span className="col-md-2 " >
                                            <p>INC/DEC</p>
                                            <BsDashCircle onClick={() => dispatch({ type: "dec", payload: v.id })} />{v.quantity}<AiOutlinePlus onClick={() => dispatch({ type: "inc", payload: v.id })} />

                                        </span>
                                        <span className="col-md-2">
                                            <p>TOTAL PRICE</p>
                                            <h2>${v.discountPrice * v.quantity}</h2>

                                        </span>


                                        <span className="col-md-2">
                                            <p>REMOVE</p>

                                            <AiTwotoneDelete onClick={() => dispatch({ type: "remove", payload: v.id })} />


                                        </span>

                                    </div>
                                )
                            })}






                        </div>

                        <div className="col-md-3 ">

                            <h2>Summary</h2>

                            <h1>Total Items:{totalQuanties}</h1>
                            <h1>Total Price: ${totalPrice}</h1>
                            <button style={{ width: "100px" }} type="button" class="btn btn-info">CHECK OUT</button>


                        </div>









                    </div>
                </div>
            </> : <h1 className="mt-5">no item found</h1>

            }







        </div>
    )
}

export default Cart 
