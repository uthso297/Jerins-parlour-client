import paypal from '../../../assets/icons/image 17.png'
import credit from '../../../assets/icons/credit-card 1.png'
const CustomerHome = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        console.log(data);
    };

    return (
        <div className="mt-10">
            <h1 className="p-4 text-xl font-bold">Book</h1>
            <div className="bg-[#f4f7fc] min-h-screen lg:pt-6 pl-4 lg:pl-0">
                <form onSubmit={handleSubmit} className="lg:max-w-md w-[90%] mx-auto lg:mx-0 pt-10 lg:pt-0 lg:pl-10 space-y-4">
                    <input type="text" name="name" placeholder="Anika Ahmed" className="w-full p-2 border rounded" required />
                    <input type="email" name="email" placeholder="Anika@gmail.com" className="w-full p-2 border rounded" required />
                    <input type="text" name="service" placeholder="Anti Age Face Treatment" className="w-full p-2 border rounded" required />

                    <p className="font-medium">Pay with</p>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="payment" value="Credit Card" defaultChecked />
                            <span>Credit Card</span>
                            <img className='w-5 h-5' src={credit} alt="" />
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="payment" value="Paypal" />
                            <span>Paypal</span>
                            <img className='w-5 h-5' src={paypal} alt="" />
                        </label>
                    </div>

                    <input type="text" name="cardNumber" placeholder="Card Number" className="w-full p-2 border rounded" required />
                    <div className="flex space-x-2">
                        <input type="text" name="expiry" placeholder="MM/YY" className="w-1/2 p-2 border rounded" required />
                        <input type="text" name="cvc" placeholder="CVC" className="w-1/2 p-2 border rounded" required />
                    </div>

                    <div className="flex items-center justify-between">
                        <p>Your Service charged will be <strong>$1000</strong></p>
                        <button type="submit" className="px-8 py-2 bg-[#F63E7B] text-white rounded">Pay</button>
                    </div>
                </form>
                <style>
                    {`
                    input::placeholder {
                        // font-weight: bold;
                        opacity: 1;
                        color: #000; 
                    }
                `}
                </style>
            </div>
        </div>
    );
};

export default CustomerHome;
