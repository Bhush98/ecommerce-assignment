import React , { useEffect , useState} from 'react'
import { addRecords } from '../../actions/index'
import { connect } from 'react-redux'
import Records from '../../components/Records/Records'
import Loader from '../../components/Loader/Loader'
import Airtable from 'airtable'
import './Home.css'

    const base = new Airtable({apiKey : 'keyWJdpKqVw5hHBpm'}).base('appkeJmxZM2DMss7f')

const Home = (props) => {
    const [records , setRecords] = useState()
    useEffect( () => {
        base('Products').select({
            view: "Grid view"
        }).eachPage((records , fetchNextPage) => {
            setRecords(records)
            fetchNextPage()
        })
    } , [])
    props.addRecords(records)
    return(
        <div className="prod-comp">
           {records ? <Records records = {records}/> : <Loader />}
           </div>
    )
}
export default connect(null , {addRecords})(Home)