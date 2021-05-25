// import React, {useState} from "react";
// import FormContainer from "../FormContainer/FormContainer";
// import { useHistory } from "react-router-dom";
// import {Button, Card, Form} from "react-bootstrap";
// import {useDispatch, useSelector} from "react-redux";
// import {SaveShippingAddressAction} from "../../redux/actions/CartAction";
// import '../Cart/Cart.css'
//
//
// const Shipping = () => {
//     const history = useHistory()
//     const dispatch = useDispatch()
//     const cart = useSelector(state => state.cart)
//     const {shippingAddress}=cart
//     const [address, setAddress]=useState(shippingAddress.address)
//     const [contact_no, setContact_no]=useState(shippingAddress.contact_no)
//     // const [city, setCity]=useState(shippingAddress.city)
//     // const [country, setCountry]=useState(shippingAddress.country)
//
//     const handleSubmit= (e) => {
//         e.preventDefault()
//         dispatch(SaveShippingAddressAction({address, contact_no}))
//         history.push('/payment')
//     }
//     return (
//         <FormContainer>
//             <h2 className="text-center mb-4">SHIPPING</h2>
//             <Card>
//                 <Card.Body>
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group >
//                             <Form.Label>Phone Number</Form.Label>
//                             <Form.Control
//                                 className="form-control border-end-0 border rounded-pill px-4"
//                                 placeholder="Phone Number"
//                                 type="contact_no"
//                                 name="contact_no"
//                                 value={contact_no}
//                                 onChange={(e) => setContact_no(e.target.value)}
//                             />
//                         </Form.Group>
//                         <Form.Group >
//                             <Form.Label>Address</Form.Label>
//                             <Form.Control
//                                 className="form-control border-end-0 border rounded-pill px-4"
//                                 as="textarea"
//                                 placeholder=" Enter Address"
//                                 type="text"
//                                 name="address"
//                                 value={address}
//                                 onChange={(e) => setAddress(e.target.value)}
//                             />
//                         </Form.Group>
//                         {/*<Form.Group >*/}
//                         {/*    <Form.Label>City</Form.Label>*/}
//                         {/*    <Form.Control as="select"*/}
//                         {/*                  name="city"*/}
//                         {/*                  value={city}*/}
//                         {/*                  onChange={(e) => setCity(e.target.value)}*/}
//                         {/*    >*/}
//                         {/*        <option value="" label="Select a City " />*/}
//                         {/*        <option value="Sheikhupura" label="Sheikhupura" />*/}
//                         {/*    </Form.Control>*/}
//                         {/*</Form.Group>*/}
//                         {/*<Form.Group >*/}
//                         {/*    <Form.Label>Country</Form.Label>*/}
//                         {/*    <Form.Control as="select"*/}
//                         {/*                  name="country"*/}
//                         {/*                  value={country}*/}
//                         {/*                  onChange={(e) => setCountry(e.target.value)}*/}
//                         {/*    >*/}
//                         {/*        <option value="" label="Select a Country " />*/}
//                         {/*        <option value="Pakistan" label="Pakistan" />*/}
//                         {/*    </Form.Control>*/}
//                         {/*</Form.Group>*/}
//                         <Form.Group>
//                             <Button
//                                 className='Button'
//                                 type="submit"
//                                 block>Continue</Button>
//                         </Form.Group>
//                     </Form>
//                 </Card.Body>
//             </Card>
//
//         </FormContainer>
//     )
// }
// export default Shipping;


import React from "react";
import FormContainer from "../FormContainer/FormContainer";
import { useHistory } from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {SaveShippingAddressAction} from "../../redux/actions/CartAction";
import CheckoutSteps from "../CheckoutStep/CheckoutStep";

const Shipping = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const {shippingAddress}=cart
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formik = useFormik({
        initialValues: shippingAddress.values ? shippingAddress.values : {
            address: "",
            contact_no: "",
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            address: Yup.string()
                .required("Required!"),
            contact_no: Yup.string()
                .required("Required!"),
        }),
        onSubmit: (values) => {
            debugger;
            dispatch(SaveShippingAddressAction({values}))
            history.push('/payment')
        }
    });
    return (
        <FormContainer>
            <CheckoutSteps step1 />
            <h2 className="text-center mb-4">SHIPPING</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        className="form-control border-end-0 border rounded-pill px-4"
                        placeholder="Phone Number"
                        type="contact_no"
                        name="contact_no"
                        value={formik.values.contact_no}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.contact_no && formik.touched.contact_no && (
                        <p>{formik.errors.contact_no}</p>
                    )}
                </Form.Group>
                <Form.Group >
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        className="form-control border-end-0 border rounded-pill px-4"
                        as="textarea"
                        placeholder="Address"
                        type="text"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.address && formik.touched.address && (
                        <p>{formik.errors.address}</p>
                    )}
                </Form.Group>
                <div className="d-flex justify-content-center">
                    <Button
                        className='Button'
                        type="submit"
                        onSubmit={formik.handleSubmit}
                        disabled={!formik.isValid}
                    >
                        Continue
                    </Button>
                </div>

            </Form>
        </FormContainer>
    )
}
export default Shipping;
