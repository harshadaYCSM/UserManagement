import React from 'react';

class UserDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            selectedId : this.props.selectedId + 1
        }
        this.selectedUser = this.props.userList.filter((ele) => ele.id === this.state.selectedId)
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
          <li>Name: {this.selectedUser[0].name}</li>
          <li>Email Id: {this.selectedUser[0].email}</li>
          <li>Website: {this.selectedUser[0].website}</li>
          <li>Contact: {this.selectedUser[0].phone}</li>
          <li>City: {this.selectedUser[0].address.city}</li>
          <li>Compny Name: {this.selectedUser[0].company.name}</li>
        </ul>
      </div>)
}
}

export default UserDetails