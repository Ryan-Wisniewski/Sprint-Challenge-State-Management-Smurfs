import React from 'react'
import { connect } from 'react-redux';
import {addMember} from '../actions'
class Forms extends React.Component {
        state = {
            name: '',
            age: '',
            height: ''
        }
        
    handleChanges = e => {
        this.setState({ 
            [e.target.name]: e.target.value, 
            // [e.target.age]: e.target.value, 
            // [e.target.height]: e.target.value
        })};

    onSubmit = (e) => {
        e.preventDefault() 
        this.props.addMember(this.state)
        console.log('submits', this.state)
    }
        render(){
    return (
        <form >
            <div>
                <label> Name
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChanges}/>
                </label>
            </div>
            <div>
                <label> Age
                    <input type='text' name='age' value={this.state.age} onChange={this.handleChanges}/>
                </label> 
            </div>
            <div>
                <label> Height
                    <input type='text' name='height' value={this.state.height} onChange={this.handleChanges}/>
                </label> 
            </div>  
            <button onClick={this.onSubmit}>Submit Smurf</button>
        </form>
    )}
}
const mapStateToProps = state => {
    console.log('formSTATE', state)
    return{
        smurfs: state.smurfs
    }
    
}

export default connect(mapStateToProps, {addMember})(Forms)