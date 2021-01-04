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
          selectedUser:null
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
      if (this.state.selectedUser) {
        //document.getElementById(this.selectedUser.id ).style.background = "none"
      }
      this.selectedUser = this.state.userList.find((ele) => ele.id === i)
      //document.getElementById(i).style.background = "#91a9ec"
      this.setState({
        displayDetails:true,
        selectedUser: this.selectedUser
      })
    }

    addUser() {
      console.log("add user" + document.querySelector(".user-list"))
      let personName = window.prompt("Please enter name")
      let newId = this.state.userList.length + 1
      console.log(this.state.userList.length)

        fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          body: JSON.stringify({
            "id": newId,
            "name": personName,
            "username": "Harshada",
            "email": "harsh@april.biz",
            "address": {
              "street": "Boisar tarapur",
              "suite": "Apt. Nh",
              "city": "Mumbai",
              "zipcode": "401504-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "55865-881125-255",
            "website": "hahhahye.org",
            "company": {
              "name": "Radheya-Foundation",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          },),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((addedData) => {
            console.log(addedData)
            this.setState({userList : [...this.state.userList, addedData]})
            console.log(this.state.userList)
          })
        
    }
  componentDidMount() {
      this.getUsers()
  }

     render() {
      return(
        <div>
        <div className="user-list">
        {this.state.isData ? (this.state.userList.map((user) => <UserItem user={user} selectedUser={this.state.selectedUser} selectUser={this.selectUser.bind(this)} deleteUser={this.deleteUser.bind(this)}/>)) : 
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