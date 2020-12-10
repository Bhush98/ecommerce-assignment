import React , {useState , useEffect} from 'react'
import {Img} from 'react-image'
import './Search.css'
import { connect } from 'react-redux'
const Search = (props) => {
    const [matchedRecord , setRecordMatched] = useState()
    useEffect ( () => {
        if(props.records && (props.name || props.category)){
            if(props.name) setRecordMatched(props.records.filter(record => record['fields'].product_name === props.name))
            if (props.category) setRecordMatched(props.records.filter(record => record['fields'].category === props.category))
        }
    } , [setRecordMatched]) 
    console.log(matchedRecord)
    return(
        <div>
            {matchedRecord ? <center><div className="search-div"> {matchedRecord.map(item => {
               return <div className="img-card">
                    <Img src={item['fields'].imag[0].url} />
            <h2>{item['fields'].product_name}</h2>
                    </div>
            })} </div> </center>: <div> <h1>No Record Found </h1></div>}
            </div>
    )
}  
const mapStateToProps = (state) => {
    return { name : state.name , category: state.category , records : state.records}
}
export default connect(mapStateToProps)(Search)