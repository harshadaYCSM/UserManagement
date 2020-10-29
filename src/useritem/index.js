import React from 'react';
import UserDetails from '.././userdetails'

class UserItem extends React.Component {
    constructor(props) {
        super(props)
    }

 
    render() {
        return (
                <tr key={this.props.user.id}> {this.props.user.id} . 
                    <td>{this.props.user.name} </td>
                    <td> <button 
                        className="btn-del"
                        onClick={() => { if (window.confirm('Are you sure to delete this user?')) this.props.deleteUser(this.props.user.id) } }>Delete User</button></td>
                    <td>
                    <button 
                        className="btn-select"
                        onClick={() => {this.props.selectUser(this.props.user.id-1) } }>Select User</button>
                    </td>
                </tr>
        );
    }
}

export default UserItem
    