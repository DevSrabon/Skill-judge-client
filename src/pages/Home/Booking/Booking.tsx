import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import AddressForm from "./AddressForm";
import CheckOutForm from "./CheckOutForm";

const stripePromise: any | null = loadStripe(
    process.env.REACT_APP_STRIPE_PK ?? ""
);

export type AddressObject = {
    city: string | null;
    country: string | null;
    line1: string | null;
    line2: string | null;
    postal_code: string | null;
    state: string | null;
};

const Payment = () => {
    const [billingAddress, setBillingAddress] = useState<AddressObject>(
        {} as AddressObject
    );
    interface IBook {
        title: string;
        _id: string;
        price: string | boolean;
        detail: string;
        duration: string;
        btn: string;
        plan: string;
    }
    const bookings: any = useLoaderData();
    const booking: IBook = bookings[0];

    return (
			<div className=" w-1/2 p-10 my-10 rounded-lg dark:shadow-white dark:shadow-sm shadow-xl mx-auto dark:bg-white ">
				<h3 className="text-3xl font-semibold text-black">
					Payment for {booking.title}
				</h3>
				<p className="text-xl mt-4 font-bold text-black">
					Please pay <strong>${booking.price}</strong> for get {booking.title}{" "}
				</p>
				<div className="px-3 my-12">
					{" "}
					<Elements stripe={stripePromise}>
						<AddressForm setBillingAddress={setBillingAddress} />
						<CheckOutForm booking={booking} billingAddress={billingAddress} />
					</Elements>
				</div>
			</div>
		);
};

export default Payment;
