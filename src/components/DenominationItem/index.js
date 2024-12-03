import './index.css'

const DenominationItem = props => {
  const {amountList, withdraw} = props
  const {id, value} = amountList

  const onDecrement = () => {
    withdraw(id)
  }

  return (
    <li className="listCon">
      <div>
        <button onClick={onDecrement} type="button" className="btn">
          {value}
        </button>
      </div>
    </li>
  )
}

export default DenominationItem
