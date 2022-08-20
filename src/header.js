import React from 'react'
import rainbow from './style/images/rainbow.gif';
import './style/css/home.css'

const style = {
    header: {
        height: '10%',
        textAlign: 'center',
        backgroundColor: 'rgb(99,7,141)',
        color: 'white',
        fontSize: '40px', padding: '10px',
        marginBottom: '20px',
        position: 'fixed', top: 0,
        width: '100%',
        zIndex: 1
    }
}

function Header() {
    return (
        <div>
            <div style={style.header}>
                <span style={{ borderRadius: '50%', float: 'left' }}>
                    <img src={rainbow} alt="logo" height='60px' width='60px' style={{ borderRadius: '50%' }} />
                </span>
                <span className="">freeCodeCamp Course Project - Reactjs</span>
                <span>
                    <img src={rainbow} alt="logo" height='60px' width='60px' style={{ borderRadius: '50%', float: 'right', marginRight: '2%' }} />
                </span>
            </div>
        </div>
    )
}

export default Header
