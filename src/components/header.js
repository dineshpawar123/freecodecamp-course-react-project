import React from 'react'
import '../style/css/home.css'

const style = {
    header: {
        height: '15%',
        textAlign: 'center',
        backgroundColor: '#add8e9',
        color: '#191970',
        fontSize: '40px', padding: '10px',
        marginBottom: '20px',
        position: 'fixed', top: 0,
        width: '100%',
        zIndex: 1,
        fontWeight: 'bold',
        border: '1px solid black'
    }
}

function Header() {
    return (
        <div>
            <div style={style.header}>
                <span style={{ borderRadius: '50%', float: 'left', }}>
                    <img src="https://media2.giphy.com/media/eNAsjO55tPbgaor7ma/source.gif" alt="logo" height='60px' width='60px' style={{ borderRadius: '50%' }} />
                </span>
                <span className="">
                    Projects - Reactjs</span>

            </div>
        </div>
    )
}

export default Header
