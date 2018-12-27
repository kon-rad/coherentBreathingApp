import React, { Component } from 'react';

class About extends Component {

  render () {
    return (
      <div className="container">
        <h1>What is Coherent Breathing?</h1>
        <p>
          Coherent breathing is a very simple breathing technique of taking six breaths per minute.
          It involves equal periods of inhalation and exhalation of six seconds. The purpose of this
          type of breathing is to increase mindfulness and decrease stress.
          Research has shown that coherent breathing can help a wide variety of problems from insomnia to anxiety.
        </p>
        <h5>How to practice Coherent Breathing with this App</h5>
        <ul>
          <li>
            1. Navigate to the <a href="/breathe">app page</a> and press start.
          </li>
          <li>
            2. Sitting or laying down place your hand on your belly and breathe in as the circle on the screen expands.
          </li>
          <li>
            3. Pause for a second.
          </li>
          <li>
            4. Slowly breathe out to the count of five as the circle contracts.
          </li>
          <li>
            5. Practice this for at least five minutes twice per day.
          </li>
        </ul>
      </div>
    )
  }
}

export default About;