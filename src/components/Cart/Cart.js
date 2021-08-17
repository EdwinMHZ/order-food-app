
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    
    const cartCtx = useContext(CartContext);

    const removeItemHandler = id => {
        cartCtx.removeItem(id);
    };
    const addItemHandler = item => {
        cartCtx.addItem(item)
    };

    const cartItems = <ul>
        {cartCtx.items.map((item) => 
            <CartItem key={item.id} 
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={removeItemHandler.bind(null,item.id)}
                onAdd={addItemHandler.bind(null,item)}
                />
        )}
    </ul>;
    
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;