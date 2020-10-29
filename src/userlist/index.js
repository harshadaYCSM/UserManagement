import React from 'react';
import './index.css';
import LoaderPercent from '.././loader'
import UserItem from '.././useritem'
import UserDetails from '../userdetails';


class UserList extends React.Component{
    constructor() {
      super();
      this.userDetails = null;
      this.state = {
          userList : null,
          isData: false,
          displayDetails : false,
          }
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
      const fetchURL = 'https://jsonplaceholder.typicode.com/users/'+ i;
      const newData = fetch(fetchURL, {
          method: 'DELETE',
         })
         this.newList = this.state.userList.filter(function(ele){ return ele.id !== i; });
         this.setState({userList: this.newList})
    }

    selectUser(i) {
      if (this.selectedUser) {
        document.getElementById(this.selectedUser.id ).style.background = "none"
      }
      this.selectedUser = this.state.userList.find((ele) => ele.id === i)
      document.getElementById(i).style.background = "#91a9ec"
      this.setState({displayDetails:true})
    }

    addUser() {
      console.log("add user" + document.querySelector(".user-list"))
      let personName = window.prompt("Please enter name")
      let addedData =  {id: this.state.userList.length,
        name: personName}

      this.setState({userList : [...this.state.userList, addedData]})
    }
  componentDidMount() {
      this.getUsers()
  }

     render() {
      return(
        <div>
        <div className="user-list">
        {this.state.isData ? (this.state.userList.map((user) => <UserItem user={user} selectUser={this.selectUser.bind(this)} deleteUser={this.deleteUser.bind(this)}/>)) : 
        (<LoaderPercent />)}
        <button onClick={this.addUser.bind(this)}> Add User </button>
        </div>
        <div className="user-details">
        {this.state.displayDetails ? <UserDetails selectedUser={this.selectedUser}/> : <div>Select any user to see details</div>}
        </div>
        </div>
        
      )
    }
  }

  export default UserList