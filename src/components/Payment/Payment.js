import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../FormContainer/FormContainer'
import CheckoutSteps from '../CheckoutStep/CheckoutStep'
import { SavePaymentMethod } from '../../redux/actions/CartAction'

const Payment = ({ history }) => {
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart

    if (!shippingAddress.values.address) {
        history.push('/shippingDetail')
    }

    const [paymentMethod, setPaymentMethod] = useState('CashOnDelivery')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(SavePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2  />
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>
                    <Col>
                        <Form.Check
                             type='radio'
                             label='Cash on delivery'
                             id='CashOnDelivery'
                             name='paymentMethod'
                             value='CashOnDelivery'
                             checked
                             onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Button type='submit' className='Button'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )
}

export default Payment
