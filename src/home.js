import React from 'react'
import './style/css/home.css'
import { homeData } from './constants/home';
import { Link, Router } from 'react-router-dom';
import Header from './header'
import { connect } from "react-redux"
import {
    setOpenProjectName,
} from "./redux/Projects/projectAction"

function ReactjsLibraryProjects(props) {

    const setProjectName = (title) => {
        props.setOpenProjectName(title)
    }

    return (
        <React.Fragment>
            <Header />
            <div className={'grid-container-home'}>
                {homeData.map((data) => {
                    return <div>
                        <div onClick={() => {
                            setProjectName(data.title)
                        }}>
                            <Link to={data.url} style={{ textDecoration: 'none' }}>
                                <div>
                                    <img src={data.imagesrc} width='100%' height="160" alt="no" />
                                </div>
                                <div>
                                    <h3 className="">{data.title}</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                })}
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        name: state.openProject.name,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setOpenProjectName: (data) => dispatch(setOpenProjectName(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactjsLibraryProjects)
