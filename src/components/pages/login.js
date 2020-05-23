import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class login extends Component {
  render() {
  return (
    <main>
    <section>

    </section>


    <section>
        <h1>Login</h1>

    <form action="#">
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Tiago@equipindustry.com">
        </div>

        <div>
             <label for="">Password</label>
             <input type="password" name="password" id="password" placeholder="**********">
      </div>
    
    <input type="submit" value="To Access">

</form>>
    </section>
    </main>
  )
}
}

export default login;
