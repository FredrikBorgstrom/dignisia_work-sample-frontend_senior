import React from "react";
import { User } from "./App";

export class MyComponent extends React.Component<{}, {users: User[]}> { 
 
    constructor(props: React.Component<{}, {users: User[]}>) {
        super(props);
        this.state = { users: [] };
           }

    componentDidMount() { 

       fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
                     .then(json => this.setState({ users: json }));

    } 
   
    render() { 
      return <div>
          <ul style={{width: 200}}>
              {this.state.users.map(user => <li key={user.id} style={{padding: 20, background: '#f1f1f1', listStyle: 'none', marginBottom: 3}} onClick={() => this.showUser(user.id)}>{user.username}</li>)}
            </ul>
      </div>
    } 

    showUser = (userId: number) => {
      console.log(this.state.users.find(user => user.id === userId))
    }
  } 