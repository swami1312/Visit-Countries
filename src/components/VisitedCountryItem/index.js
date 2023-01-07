import './index.css'

const VisitedCountryItem = props => {
  const {VisitedCountryDetails} = props
  const {name, imageUrl} = VisitedCountryDetails

  return (
    <li className="visited-countries-list-item">
      <img className="visited-countries-img" src={imageUrl} alt="thumbnail" />
      <div className="visited-countries-name-button-container">
        <p className="visited-countries-name">{name}</p>
        <button className="remove-button" type="button">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryItem
