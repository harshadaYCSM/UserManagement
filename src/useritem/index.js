import React from 'react';
import './index.css'

class UserItem extends React.Component {
    constructor(props) {
        super(props)
    }

 
    render() {
        this.bgColor = this.props.selectedUser ? "#91a9ec" : ""
        const divStyle1 = {
            backgroundColor: this.bgColor
        };
        const divStyle2 = {
            backgroundColor: ""
        };
        return (
                <tr key={this.props.user.id} id={this.props.user.id} style={this.props.selectedUser && (this.props.selectedUser.id === this.props.user.id) ? divStyle1 : divStyle2}> {this.props.user.id}
                    <td onClick={() => {this.props.selectUser(this.props.user.id)}}>{this.props.user.name} </td>
                    <td> <img src="../../public/delete.png"
                        className="btn-del"
                        onClick={() => { if (window.confirm('Are you sure to delete this user?')) this.props.deleteUser(this.props.user.id) } }></img></td>
                    <td>
                    {/* <button 
                        className="btn-select"
                        onClick={() => {this.props.selectUser(this.props.user.id) } }>Select User</button> */}
                    </td>
                </tr>
        );
    }
}

export default UserItem
    