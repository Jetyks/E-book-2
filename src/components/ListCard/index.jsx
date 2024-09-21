import './index.css'

const ListCard = (props) => {
  return (
    <div className='list-card-container'>
      {props.children}
    </div>
  )
}

export {
  ListCard
}
