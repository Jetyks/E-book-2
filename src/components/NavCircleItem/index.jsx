import './index.css'

const NavCircleItem = ({ icon, altText, isSelected }) => {
  const classNameIcon = isSelected
   ? 'nav-icon-container selected-icon'
   : 'nav-icon-container'

  return (
    <div className= {classNameIcon}>
        <img src={icon} alt={altText} />
    </div>
  )
}

export {
  NavCircleItem
}
