import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { contactArray: contacts.slice(0, 5) };
  }

  newRandomContacts() {
    const anything = this.state.contactArray;
    console.log("this the anything object: ", anything);

    console.log("this is the contacts list: ", contacts);

    const randomIndex = Math.floor(Math.random() * contacts.length);
    console.log("randomIndex: ", randomIndex);

    const randomContact = contacts[randomIndex];
    console.log("this is the random contact: ", randomContact);
    anything.push(randomContact);

    console.log("this is the new anything:", anything);
    this.setState({ contactArray: anything });
  }

  sortByName() {
    const { contactArray } = this.state;

    contactArray.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (b.name > a.name) {
        return -1;
      }
    });
  }

  sortByPopularity() {
    const { contactArray } = this.state;

    contactArray.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1;
      } else if (b.popularity > a.popularity) {
        return -1;
      }
    });
  }

  deleteContact(contactIndex) {
    const contacts = this.state.contactArray;

    // remove the movie from the array
    contacts.splice(contactIndex, 1);

    // setState() to tell React to change the DOM
    this.setState({ contactArray: contacts });
  }

  render() {
    const { contactArray } = this.state;

    return (
      <table className="App">
        <caption>
          <button onClick={() => this.newRandomContacts()}>
            Add a random contact
          </button>
          <button onClick={() => this.sortByName()}>Sort by Name</button>
          <button onClick={() => this.sortByPopularity()}>
            Sort by Popularity
          </button>
        </caption>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {contactArray.map((oneContact, index) => {
          return (
            // add a UNIQUE key to the HTML tag you return in map()
            // (this helps React be more efficient when updating the DOM)
            <tr key={oneContact._id}>
              <td>
                <img src={oneContact.pictureUrl} className="image" />
              </td>
              <td>
                <h3>{oneContact.name}</h3>
              </td>
              <td>
                <p>Popularity: {oneContact.popularity}</p>
              </td>
            </tr>
          );
        })}
      </table>
    );
  }
}

export default App;
