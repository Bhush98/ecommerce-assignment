import React , {useRef} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {Img} from 'react-image'
import shop from '../../images/shop.png'
import { searchItem} from '../../actions/index'
import './Header.css'

const Header = (props) => {
    const name = useRef('')
    const category = useRef('')
    return (
<div className="app">
<div className="app-title">
    <Img src={shop} alt="Shop Image" />
    <Link to="/" style={{
            textDecoration: 'none',
            color : 'black'
        }}><h1>
        Bhushan's Shop
        </h1>
        </Link>
    </div>
    <div className="search">
        <input type = "text" placeholder="Search by Name" ref={name}/>
        <select name="Select By Category" className="category-selector" ref = {category}>
            <option value="shirt">Shirt </option>
            <option value="jeans">Jeans </option>
            <option value="jacket">Jacket </option>
            </select>
        <Link to="/search" ><button onClick = { () => props.searchItem(name.current.value , category.current.value)}> Search </button></Link>
        </div>
        <div style={{
            marginTop: '4%'
        }}>
        <Link to="/checkout" style={{
            textDecoration: 'none',
            color : 'black'
        }}><h1>🛒 {props.total_cart}</h1></Link>
        </div>
    </div>
    )}

const mapStateToProps = (state) => {
        return { total_cart : state.selected_value}
    }
    
export default connect(mapStateToProps , {searchItem })(Header)
