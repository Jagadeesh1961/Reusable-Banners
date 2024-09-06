import './index.css'

const BannerCardItem = props => {
  const {cardDetail} = props
  const {headerText, description, className} = cardDetail
  return (
    <li className={`banner-card-item ${className}`}>
      <div>
        <h1 className="header"> {headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
