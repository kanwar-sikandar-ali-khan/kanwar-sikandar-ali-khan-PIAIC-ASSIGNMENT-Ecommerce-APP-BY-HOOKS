import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import banner from '../images/newBanner.jpeg'


const Home = () => {
    const { products } = useSelector(state => state.productReducer)
    console.log("state=>", products)
    return (
        <div className="">

            <div className="banner">
                <img src={banner} alt="" width="100%" />
            </div>



            <div className="container-fluid ">
                <div className="row text-center">
                    {products.map((v, i) => {
                        return (
                            <div className="col-md-3  text-center " key={v.id}>

                                <Link to={`/details/${v.id}`}><img className="mt-3" src={v.image} alt="" width='100%' /></Link>

                                <button type="button" class="btn btn-warning m-3">
                                    {v.name}<br />
                              Price: ${v.price}.00<br />
                                discount Price: {v.discountPrice}%
                                </button>


                            </div>
                        )
                    })}
                </div>
            </div>




        </div >
    )
}

export default Home
