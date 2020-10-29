import React from 'react';

class UserItem extends React.Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        return this.props.userList.map((user) => {
            return (
              <tr key={user.id}> {user.id} . 
                    <td>{user.name} </td>
                    <td> <button 
                          className="btn-del"
                          onClick={() => { if (window.confirm('Are you sure to delete this user?')) this.props.deleteUser(user.id) } }>Delete User</button></td>
                   <td>
                   <button 
                          className="btn-select"
                          onClick={() => {this.selectUser(user.id-1) } }>Select User</button>
                   </td>
                </tr>
              
            );
        })
    }
}

export default UserItem
    