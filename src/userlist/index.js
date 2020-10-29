import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import LoaderPercent from '.././loader'
import UserItem from '.././useritem'


class UserList extends React.Component{
    constructor() {
      super();
      this.userDetails = null;
      this.state = {
          userList : null,
          displayDetails: false,
          isData: false,
          index:null}
    }
  
    getUsers() {
        fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'GET',
         })
        .then(response => response.json())
        .then(json => {
          console.log(json)
          this.setState({userList: json, isData:true})
        })
      }
  
      deleteUser(i) {
        this.fetchURL = 'https://jsonplaceholder.typicode.com/users/'+ i;
        const newData = fetch(this.fetchURL, {
            method: 'DELETE',
           })
           this.newList = this.props.users.filter(function(ele){ return ele.id !== i; });
           this.setState({userList: this.newList, isData:true})
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
          this.userDetails =(
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
  }

  componentDidMount() {
      this.getUsers()
  }

     render() {
      this.userDetailsRender(this.state.index);
      return(
        <div className="user-list">
        {this.state.isData ? (<UserItem userList={this.state.userList} deleteUser={this.deleteUser}/>) : (<LoaderPercent />)}
          </div>
      )
    }
  }

  export default UserList