import React, { Component } from 'react'
import { keyArray } from '../../constants/drumMachine.js'
import '../../style/css/drumMachine.css';
import { Link } from 'react-router-dom';
import { handleKeyClicked } from "./handleKeyClicked"

export default class DrumMachineImplementation extends Component {

    constructor(props) {
        super(props)
        // this.state = { // if we want localstate
        //   display: '',
        //   power: true,
        //   volume: 30,
        //   bank: 0
        // }
    }

    render() {
        return (
            <>
                <div id="drum-machine">
                    <div className={'grid-container-rightside'}>
                        <div onClick={() =>
                            this.props.data.setPower(!this.props.data.power)}
                            style={{ border: '2px solid white' }}>
                            Power<br />
                            {!this.props.data.power && <label class="switch">
                                <input type="checkbox" />
                                <span class="slider"></span>
                            </label>}
                            {this.props.data.power && <label class="switch">
                                <input type="checkbox" checked />
                                <span class="slider"></span>
                            </label>}
                        </div>
                        <div style={{ border: '2px solid white' }}
                            onClick={() =>
                                this.props.data.setBank(this.props.data.bank === 0 ? 1 : 0)}>
                            Bank<br />
                            {this.props.data.bank == '0' && <label class="switch">
                                <input type="checkbox" />
                                <span class="slider"></span>
                            </label>}

                            {this.props.data.bank == '1' && <label class="switch">
                                <input type="checkbox" checked />
                                <span class="slider"></span>
                            </label>}

                        </div>
                        <div id="display2" style={{ border: '2px solid white', paddingTop: '10px' }}>
                            {this.props.data.power && this.props.data.display}</div>
                        <div class="slidecontainer" style={{ border: '2px solid white', paddingTop: '0px' }}>
                            Volume{'  '}
                            <input type="range" min="1" max="100"
                                onChange={(e) => {
                                    this.props.data.power && this.props.data.setVolume(e.target.value)
                                    this.props.data.setDisplay(`Volume:${e.target.value}`)
                                }}
                                value={this.props.data.volume} />
                        </div>

                    </div>
                    <div className={'grid-container'}>
                        {keyArray.map((data, index) => {
                            return <button id={data.name + "-drumpad"} className={'drum-pad '}
                                onClick={(e) => handleKeyClicked(e, data.name, data.names[this.props.data.bank], this.props)}>
                                {data.name}
                                <audio className="clip" id={data.name} volume={30} src={data.urls[this.props.data.bank]} type="audio/mp3"></audio>
                            </button>
                        })}
                    </div>
                </div>
                <br />
                <div style={{ textAlign: 'center' }}><Link to={'/'} style={{ margintop: '20px', textAlign: 'center', textDecoration: 'none', border: '2px solid gray', borderRadius: '4px', padding: '10px', fontSize: '30px' }}>Back</Link></div>

            </>)
    }
}