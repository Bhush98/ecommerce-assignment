import React , { useState} from 'react'
import {Img} from 'react-image'
import Modal from '../Modal/Modal'
import Spinner from '../../images/spinner.gif'
import './Records.css'

const Records = ({records}) => {
    const [modalValue , setModalValue] = useState(false)
    const [record , SetRecord] = useState()
    const handleClick = (record) => {
        setModalValue(prev => !prev)
        SetRecord(record)
    }
    const modalClick = () => {
        setModalValue(prev => !prev)
    }
    const record_data = records.map((record) => {
        return (
        <div className="prod-card" key={record.id}>
            <div className="img-div">
            <Img src={record['fields'].imag[0].url} loader={Spinner}/>
            </div>
        <div className="prod-info">
        <h3>{record['fields'].product_name}</h3>
        <h2>{record['fields'].price}</h2>
        <h3>{record['fields'].description} </h3>
            <button onClick={() => handleClick(record['fields'])}>View more Details</button>
        </div>
            </div>
        )
    })
    
    return( 
        <div style={{display : "flex"}}>
      <div className = "record-container"> {record_data}</div>
      {modalValue && record ? <Modal clickEvent = {modalClick} record = {record} /> : null }
      </div>
      
    )
}

export default Records