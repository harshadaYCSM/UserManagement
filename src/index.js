import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

let userDetails = null;

function GetUsers() {
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
   })
  .then(response => response.json())
  .then(json => {
    console.log(json)
    ReactDOM.render(
      <UserList users={json}> </UserList>,
      document.getElementById('root')
    )
  })
  return(
    <div className="user-container">
    </div>
  )
}
 
class UserList extends React.Component{
  constructor() {
    super();

    this.state = {displayDetails: false,
    index:null}
  }


  showUsers() {
      return this.props.users.map((user) => {
          return (
            <tr key={user.id}> {user.id} . 
                  <td>{user.name} </td>
                  <td> <button 
                        className="btn-del"
                        onClick={() => { if (window.confirm('Are you sure to delete this user?')) this.deleteUser(user.id) } }>Delete User</button></td>
                 <td>
                 <button 
                        className="btn-select"
                        onClick={() => {this.selectUser(user.id-1) } }>Select User</button>
                 </td>
              </tr>
            
          );
      })
  }

  deleteUser(i) {
    this.fetchURL = 'https://jsonplaceholder.typicode.com/users/'+ i;
    const newData = fetch(this.fetchURL, {
        method: 'DELETE',
       })
       this.newList = this.props.users.filter(function(ele){ return ele.id !== i; });
       ReactDOM.render(
        <UserList users={this.newList}> </UserList>,
        document.getElementById('root')
      )
  }

  selectUser(i) {
    this.setState({displayDetails:true,
    index:i})
  }
 
  userDetailsRender(selectedID) {
    if (this.state.displayDetails) {
      if(this.newList) {
        this.selectedUserId = selectedID+1;
        this.selectedUser = this.newList.filter((ele) => ele.id === this.selectedUserId)
        userDetails =(
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
      else {
        userDetails =(
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
}
  render() {
    this.userDetailsRender(this.state.index);

    return(
      <div className="user-list">
        {this.showUsers()}
        {userDetails}
        </div>
    )
  }
}

ReactDOM.render(
  <GetUsers />,
  document.getElementById('root')
)

serviceWorker.unregister();
