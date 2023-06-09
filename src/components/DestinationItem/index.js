// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {imgUrl, name} = destinationItem

  return (
    <li className="item-con">
      <img src={imgUrl} className="item-img" alt={name} />
      <p className="item-name">{name}</p>
    </li>
  )
}

export default DestinationItem
