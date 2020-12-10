import React from 'react'
import { Img } from 'react-image'
import { connect } from 'react-redux'
import { removeCart } from '../../actions/index'
import {useHistory } from 'react-router-dom'
import './Checkout.css'

const Checkout = (props) => {
    const items = props.checkout_items.map((item) => {
        return (
            <div>
            <div key={item.product_name} className="item-card">
                <div>
                    <Img src={item.imag[0].url} />
                    </div>
                    <div>
                    <h1>{item.product_name}</h1>
                     <h2>{item.price}</h2>
                     </div>
                    </div>
        <button onClick = {() => props.removeCart(item.product_name , props.selected_value)}>Remove Item</button>
                </div>
        )
    })
    return (
        <div style={{
            marginBottom: '5%'
        }}>
        <div className = "checkout-container">
            <div className="checkout-info">
                <h1>Total items in Cart {props.selected_value} </h1>
                <div className="prod-list">
                    {items}
                    </div>
            </div>
            <div className="user-info">
                <div><label>First Name:</label><input type="text" placeholder="Enter your First Name" /></div>
                <div><label>Last Name:</label><input type="text" placeholder="Enter your Last Name" /></div>
                <div><label>Address:</label><input type="text" placeholder="Enter your Address" /></div>
                <div><label>City:</label><input type="text" placeholder="Enter your City" /></div>
                <div><label>Pin Code:</label><input type="number" placeholder="PinCode" /></div>
            </div>
            </div>
           <center> <button className="checkout" onClick = {() => alert("Thanks for shopping with us") }> Checkout </button> </center>
            </div>
    )
}

const mapStateToProps = (state) => {
    return { checkout_items : state.cart_value , selected_value: state.selected_value}
}

export default connect(mapStateToProps , {removeCart})(Checkout)