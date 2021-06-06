import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { BsDashCircle } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiTwotoneDelete } from 'react-icons/ai';




const Cart = () => {

    const { products, totalPrice, totalQuanties } = useSelector(state => state.cartReducer)
    // const [indivisualTotalPrice,setIndivisualTotalPrice] = useState()


    var Tp = String(totalPrice);
    var Tp = Tp.substring(0, 7);
    console.log(Tp)


    const dispatch = useDispatch();

    return (
        <div className="mainCart" style={{ marginTop: "100px" }}>
            {products.length > 0 ? <>
                <h1 className="text-center">Your Cart</h1>

                <div className="container-fluid mt-5  ">
                    <div className="row ">

                        <div className="col-md-9 ">



                            {products.map((v, i) => {
                                //  setIndivisualTotalPrice(v.discountPrice * v.quantity)
                                let IndivisualTotalPrice = v.discountPrice * v.quantity

                                IndivisualTotalPrice = String(IndivisualTotalPrice)

                                IndivisualTotalPrice = IndivisualTotalPrice.substring(0, 7);

                                return (
                                    <div className="row" key={v.id}>
                                        <div className="col-md-2">
                                            <img src={v.image} alt="" width="100px" height="100px" />

                                        </div>

                                        <div className="col-md-2">
                                            <p>NAME</p>
                                            <p>{v.name}</p>
                                        </div>
                                        <div className="col-md-2">
                                            <p>PRICE</p>
                                            <p>${v.discountPrice}</p>

                                        </div>
                                        <span className="col-md-2 " >
                                            <p>INC/DEC</p>
                                            <h6><BsDashCircle className="mr-2" onClick={() => dispatch({ type: "dec", payload: v.id })} />{v.quantity}<AiOutlinePlus className="ml-2" onClick={() => dispatch({ type: "inc", payload: v.id })} /></h6>

                                        </span>
                                        <span className="col-md-2">
                                            <p>TOTAL PRICE</p>

                                            {/* <p>${v.discountPrice * v.quantity}</p> */}

                                            <p>${IndivisualTotalPrice}</p>

                                        </span>


                                        <span className="col-md-2">
                                            <p>REMOVE</p>

                                            <h4><AiTwotoneDelete onClick={() => dispatch({ type: "remove", payload: v.id })} /></h4>


                                        </span>


















                                    </div>
                                )
                            })}








                        </div>

                        <div className="col-md-3 ">

                            <p>Summary</p>

                            <h1>Total Items:{totalQuanties}</h1>
                            <h1>Total Price: ${Tp}</h1>
                            <button style={{ width: "100px" }} type="button" class="btn btn-info">CHECK OUT</button>


                        </div>









                    </div>
                </div>
            </> : <h1 style={{ marginTop: 300 }} className="text-center">No Item Found</h1>

            }







        </div>
    )
}

export default Cart
