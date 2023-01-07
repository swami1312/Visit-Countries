import './index.css'

const CountryItem = props => {
  const {countryDetails, updateVisitedCountries} = props
  const {name, isVisited, id} = countryDetails

  const clickOnVisit = () => {
    updateVisitedCountries(id)
  }

  return (
    <li className="country-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="country-status">Visited</p>
      ) : (
        <button className="visit-button" type="button" onClick={clickOnVisit}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
