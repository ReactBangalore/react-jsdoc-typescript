// @ts-check
import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Form from "./Form"
import FriendStatus from "./FriendStatus"

/**
 * @typedef {Object} Props
 * @property {string} initialValue
 */

/**
 * @typedef {Object} State
 * @property {string} description
 */

const initialState = Object.freeze({
  description: "subramanya"
})

/**
 * @extends {Component<Props, State>}
 */
class App extends Component {
  state = {
    description: "subramanya"
  }

  /**
   * @param {import("react").ChangeEvent<HTMLInputElement>} event
   */
  handleChange = event => {
    const { value } = event.target
    this.setState(() => ({ description: value }))
  }

  /**
   * @param {import("react").FormEvent<HTMLFormElement>} event
   */
  handleSubmit = event => {
    event.preventDefault()
    const { description } = this.state
    console.log(description, "yay form submitted")
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              value={this.state.description}
            />
            <Form name={"React"} />
          </form>
          <FriendStatus />
        </section>
      </div>
    )
  }
}

export default App
