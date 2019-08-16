import React from 'react'
import {connect} from 'react-redux'

import {getData} from '../actions'

const SmurfList = props => {
    return (
        <div>
            <button onClick={props.getData } >Get Smurfs</button>
            {props.smurfs &&
            props.smurfs.map(id => {
                console.log('eachSmurf', id)
                return ( 
                    //add boxClass                   
                    <div>
                       <p>{id.name}</p>
                       <p>{id.age}</p>
                       <p>{id.height}</p>
                    </div>
                )
            })}
            {/* {console.log('props',props)} */}
        </div>
    )
}
const mapStateToProps = state => {
    // console.log('state', state)
    return {
        smurfs: state.smurfs
    }
}

export default  connect(mapStateToProps, { getData })(SmurfList)