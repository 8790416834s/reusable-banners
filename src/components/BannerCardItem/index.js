// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCard, key} = props
  const {headerText, className, description} = bannerCard

  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="paragraph">{description}</p>
      <div>
        <button type="button" className="show-button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
