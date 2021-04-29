import React from 'react'
import StripeCheckout from "react-stripe-checkout"

const StripeButton = ({ price }) => {

    const priceForStripe = price * 100
    const publishableKey = "pk_test_51IliHbJoO2Wyf55XASmgHEAgnpIOJaRNkJgHmyhNIrfdiGIjA1XykS5fz0tKCkuftm6DVNTiKjPpamOsCSxopnvY00AT7htU52"

    const onToken = token => {
        console.log(token);
        alert("Payment Succsesful!")
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Cloathing"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        >
        </StripeCheckout>
    )
}

export default StripeButton
