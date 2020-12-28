import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import Product from './Product';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div>
            <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket?.length} items): <strong>{Product.price}</strong>
                    </p>
                    <small className="dubtotal__gift">
                        <input type="checkbox"/> This order contein a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"€"}
            />
        </div>
    )
}

export default Subtotal
