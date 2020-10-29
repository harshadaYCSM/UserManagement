import React from 'react';
// import './index.css';
import LoaderPercent from '.././loader'
import UserItem from '.././useritem'


class UserList extends React.Component{
    constructor() {
      super();
      this.userDetails = null;
      this.state = {
          userList : null,
          isData: false,
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
      this.setState({displayDetails:true,
      index:i})
    }

  componentDidMount() {
      this.getUsers()
  }

     render() {
      return(
        <div className="user-list">
        {this.state.isData ? (this.state.userList.map((user) => <UserItem user={user} />)) : (<LoaderPercent />)}
          </div>
      )
    }
  }

  export default UserList