import { useContext, useState, useEffect } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext)
    const numberItems = cartCtx.items.reduce((curNumber,item) => {
        return curNumber + item.amount;
    },0);
    const [highlighted, setHighlighted] = useState(false);
    const {items} = cartCtx;
    const btnClasses = `${classes.button} ${highlighted ? classes.bump : ''}`;
    
    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return
        }
        setHighlighted(true);
        const timer = setTimeout(() => {
            setHighlighted(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return(
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>
                {numberItems}
            </span>
        </button>
    );
}

export default HeaderCartButton;