import React from 'react'
import {Img} from 'react-image'
import { addCart } from '../../actions/index'
import { connect } from 'react-redux'
import './Modal.css'

const Modal = (props) => {
    const record = props.record
    return(
        <div className="modal">
           <div className="card">
               <div style={{}}>
            <Img src={record.imag[0].url} alt="this is a image"/>
            <div className="typography">
            <h2>{record.product_name}</h2>
            <h2>{record.description}</h2>
            <h2>{record.price} 💸</h2>
            </div>
            <div className="buttons">
                <button onClick = {() => 
                    {
                        props.addCart(record , props.count)
                        alert("1 Item was added to the Cart")
                }}>Add to Cart </button>
            <button onClick = {() => props.clickEvent()}>Close</button>
            </div>
               </div>
               </div>
               </div>
    )
}

const mapStateToProps = (state) => {
    return { count : state.selected_value}
}

export default connect( mapStateToProps , { addCart } )(Modal)