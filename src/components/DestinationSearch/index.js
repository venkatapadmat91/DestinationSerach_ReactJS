// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchUserInput = event => this.setState({searchInput: event.target.value})

  render() {
    const {destinationsList} = this.props

    const {searchInput} = this.state

    const filterSearchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="destination-main-container">
        <div className="destination-search-card">
          <h1 className="main-heading">Destination Search</h1>
          <div className="destination-search-input-con">
            <input
              className="search-input"
              onChange={this.searchUserInput}
              type="search"
              value={this.searchInput}
              placeholder="Search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-icon"
              alt="search icon"
            />
          </div>
          <ul className="items-container">
            {filterSearchResults.map(eachItem => (
              <DestinationItem destinationItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
