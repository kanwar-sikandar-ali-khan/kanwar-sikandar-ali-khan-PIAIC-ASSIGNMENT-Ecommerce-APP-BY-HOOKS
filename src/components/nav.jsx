import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from '../images/logo.webp'




const Nav = () => {

    const { totalQuanties } = useSelector(state => state.cartReducer)


    return (
        <div className="navcontainer ">

            <div className="container-fluid  ">
                <div className="row ">
                    <div className=" col-xs-3   ">
                        <ul>
                            <Link to="/"><li className="" style={{ listStyle: "none" }}><img src={logo} alt="logo" height="50px" width="100px" /></li></Link>
                        </ul>

                    </div>

                    <div className=" offset-md-9 offset-xs-6 offset-sm-7  ">

                        <Link to="/cart"><span className='red cart-icon'><i className="fas fa-shopping-cart"></i></span></Link>
                        <span className="red cart-num ">{totalQuanties}</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Nav
