import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Home = () => {
    const { products } = useSelector(state => state.productReducer)
    console.log("state=>", products)
    return (
        <div>
            <div className="conatiner">
                <div className="row homeBanner ">
                </div>
                <div className="row">
                    {products.map((v, i) => {
                        return (
                            <div className="col-md-3  " key={v.id}>
                                <div className="col-md-3" >
                                    <Link to={`/details/${v.id}`}><img src={v.image} alt="" width="300px" /></Link>
                                </div>



                                <div className=" bg-success">
                                    {v.name}
                                </div>

                                <div className=" bg-danger">
                                    Price: ${v.price}.00
                                        </div>
                                <div className=" bg-warning">
                                    discount Price: {v.discountPrice}%
                                        </div>


                            </div>
                        )
                    })}

                </div>
            </div>


        </div >
    )
}

export default Home
