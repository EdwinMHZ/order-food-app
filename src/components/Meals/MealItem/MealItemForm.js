import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {

    const [amountIsValid,setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum = +enteredAmount;
        
        if(enteredAmount.trim().length === 0 || enteredAmountNum < 1){
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNum);
        setAmountIsValid(true);
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label='Amount'
                input={{
                id:'amount_id' + props.id,
                type:'number',
                min:'0',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount</p>}
        </form>
    );
};

export default MealItemForm;