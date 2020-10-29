import React from 'react';

class UserDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    /* userDetailsRender(selectedID) {
        if (this.state.displayDetails) {
          if(this.newList) {
            this.selectedUserId = selectedID+1;
          } 
          else {
            this.userDetails =(
            <div className="userDetail">
              <ul>  Selected User Details :
                <li>Name: {this.props.users[selectedID].name}</li>
                <li>Email Id: {this.props.users[selectedID].email}</li>
                <li>Website: {this.props.users[selectedID].website}</li>
                <li>Contact: {this.props.users[selectedID].phone}</li>
                <li>City: {this.props.users[selectedID].address.city}</li>
                <li>Compny Name: {this.props.users[selectedID].company.name}</li>
            </ul>
          </div>)
        }
      }
    } */

render() {
    return (
        <div className="userDetail">
        <ul> Selected User Details :
          <li>Name: {this.props.selectedUser.name}</li>
          <li>Email Id: {this.props.selectedUser.email}</li>
          <li>Website: {this.props.selectedUser.website}</li>
          <li>Contact: {this.props.selectedUser.phone}</li>
          <li>City: {this.props.selectedUser.address.city}</li>
          <li>Compny Name: {this.props.selectedUser.company.name}</li>
        </ul>
      </div>)
}
}

export default UserDetails