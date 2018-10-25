import React, {Component} from 'react';
import axios from 'axios';
import {updateUser} from '../../../dux/reducer.js';
import {connect} from 'react-redux';

class Private extends Component{
    async componentDidMount(){
        let res = await axios.get(`/api/user-data`)
        //invoke action creator
        this.props.updateUser(res.data)
        console.log(res.data);
    }

    balance(){
        return Math.floor((Math.random()+1)*100)
    }

    render(){
        let {
            customer_id,
            customer_name,
            customer_auth_id,
            customer_email,
            customer_picture
        } = this.props.user
        return(
            <div>
                <h1>Account Information</h1>
                <hr /> <hr /> <hr />
                {
                    customer_name ? (
                        <div>
                            <p>Account Holder: {customer_name}</p>
                            <p>Email: {customer_email}</p>
                            <p>Account #: {customer_auth_id}</p>
                            <img src={customer_picture} alt=''/>
                        </div>
                    ) : (
                        <div>Please Log In</div>
                    )
                }
                <a href='/#/'><button>Logout</button></a>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,{updateUser})(Private)