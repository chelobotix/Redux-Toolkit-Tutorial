import { CartIcon } from '../icons'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const { amount } = useSelector((store) => store.cart)
  console.log(amount)
  return (
    <nav>
      <div className='nav-center'>
        <h3>Redux Toolkit</h3>
        <div className='nav-container'>
          <CartIcon />
        </div>
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

