import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {isAmount: 2000}

  withdraw = id => {
    const {isAmount} = this.state
    const {denominationsList} = this.props
    const denomination = denominationsList.find(each => each.id === id)
    if (denomination) {
      this.setState({
        isAmount: isAmount - denomination.value,
      })
    }
  }

  render() {
    const {isAmount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="cash-container">
        <div className="user-info">
          <div>
            <div className="profile">
              <p className="user-initial">S</p>
              <h1 className="user-name">Sarah Williams</h1>
            </div>
            <div className="balance-info">
              <p className="balance">Your Balance</p>
              <p className="balance-amount">{isAmount}</p>
            </div>
            <p className="rupees">In Rupees</p>
            <h1 class="dec">Withdraw</h1>
            <p class="dec">CHOOSE SUM (IN RUPEES)</p>
            <div className="denomination-list">
              {denominationsList.map(denomination => (
                <DenominationItem
                  key={denomination.id}
                  amountList={denomination}
                  withdraw={this.withdraw}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
