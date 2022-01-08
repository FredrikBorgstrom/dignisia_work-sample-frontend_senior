import React from "react";
import { User } from "./App";

export class MyComponent2 extends React.Component<{}, {user: User}> { 
 
    constructor(props: React.Component<{}, {user: User}>) {
        super(props);
        this.state = { user: {} as User };
    }
   
    render() { 
      return <div>
          <h2>Details about {this.state.user.name}</h2>
          <p>Email: {this.state.user.email}</p>
      </div>
    } 
  } 


  export default MyComponent2;