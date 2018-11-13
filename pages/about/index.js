import React from "react"

class About extends React.Component {
  state = {
    subscribed: false
  }
  render() {
    return (
      <h2 className="about">
        <button
          onClick={e => this.setState({ subscribed: false })}
          className="button--subscribe"
        />
      </h2>
    )
  }
}

export default About
