import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropDown = () => (
    <div className = 'cart-dropdown'>
        <div className = 'cart-items'/>
        <CustomButton>GO TO CHEKCOUT</CustomButton>
    </div>
)

export default CartDropDown;