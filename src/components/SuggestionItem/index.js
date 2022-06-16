// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {eachItem, getSuggestionAsInput} = props
  const {id, suggestion} = eachItem
  const onClickArrow = () => {
    getSuggestionAsInput(suggestion)
  }
  return (
    <li className="listItem-container">
      <p className="li-heading">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow-icon"
        alt="arrow"
        onClick={onClickArrow}
      />
    </li>
  )
}

export default SuggestionItem
