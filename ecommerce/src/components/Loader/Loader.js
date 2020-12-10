import React from 'react'
import spinner from '../../images/spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="spinner gif" />
            <h3>Loading ... </h3>
            </div>
    )
}

export default Loader