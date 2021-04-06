import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import '../css/table.css';

class App extends Component {

  state = {
    users: [],
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/user')
    .then(res => res.json())
    .then(res => {
        this.setState({
            users: res
        });
    });
  }

  delete(id) {
    const method = "DELETE";
    fetch(`http://localhost:8000/api/user/${id}`,{method, headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
          }})
        .then((response) => response.json())
        .then(resp => window.location.href = "/")
        .catch((err) => console.log(err))
  }
  
  render() {

    const { users } = this.state;

    return (
            <Switch>
                <Route path="/" exact>
                    <div id="table">
                        <table>
                            <tbody>
                            { users.map(user => (
                                <tr key={ user.id }>
                                    <td>{ user.id }</td>
                                    <td>{ user.name }</td>
                                    <td>
                                        <button className="btn">Update</button>
                                        <button className="btn" onClick={() => this.delete(user.id)}>Delete</button>
                                    </td>
                                </tr>
                                ))
                            }
                            </tbody>
                        </table>
                        <div className="new">
                            <button id="btnNew">
                                <Link to="/register" title="home">New</Link>
                            </button>
                        </div>
                    </div>
                </Route>
            </Switch>
    );
  };
};

export default App;