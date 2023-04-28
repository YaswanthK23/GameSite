import { useCallback, useContext, useRef } from "react";
import { CartContext } from "../../context/cart-context";
import useRazorpay from "react-razorpay";

const Cart = () =>{
    const {cartData} = useContext(CartContext);
    const total = useRef();
    // total.current.price =0;
    const RazorPay = useRazorpay();
    const razorPayDisplay = useCallback(async (total) =>{
        const options = {
            key : "rzp_test_6PDQsyQ65TTf4q",
            amount : total*100,
            currency : "INR",
            name : "game-site",
            description : "gaming transaction",
            handler : (res) =>{
                console.log(res);
            },
            prefill : {
                name : "Yaswanth",
                email : "yaswanthkumarnandi@gmail.com",
                contact : "8500290792"
            },
            notes : {
                address :" Mangalagiri",
            },
            theme : {
                color : "#3399cc",
            }
        }
        const rzp1 = new RazorPay(options);
        rzp1.open();

    },[RazorPay])
    return(
    <>
        <section>
            <section>
                {cartData.map((cartItem) =>{
                    return (
                        <article>
                            <image src="" alt=""/>
                            <article>{cartItem.title}</article>
                            <article>{cartItem.price}</article>
                            <button>Remove from Cart</button>
                        </article>
                    )
                })}
            </section>
            <section>
                <article>Billing Information</article>
                {cartData.map((cart) =>{
                   // total.current.price = total.current.price + cart.price
                    return <article>
                        <span>{cart.title}</span>
                        <span>{cart.price}</span>
                    </article>
                })}
                <article>Total : 3000</article>
                <button onClick={() =>{razorPayDisplay(6000)}}>Checkout</button>
            </section>
        </section>
    </>
    )
    }
export default Cart ;