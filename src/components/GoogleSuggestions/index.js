// Write your code here

import './index.css'

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {inputValue: ''}

  getSuggestionAsInput = suggestion => {
    this.setState({inputValue: suggestion})
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {inputValue} = this.state
    const searchedSuggestionList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(inputValue.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-image"
          alt="google logo"
        />
        <div className="card-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="search Google"
              onChange={this.onChangeInput}
              value={inputValue}
              className="search-bar"
            />
          </div>
          <ul>
            {searchedSuggestionList.map(eachItem => (
              <SuggestionItem
                eachItem={eachItem}
                key={eachItem.id}
                getSuggestionAsInput={this.getSuggestionAsInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
