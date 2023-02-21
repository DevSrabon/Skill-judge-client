import React from "react";
import { AddressElement } from "@stripe/react-stripe-js";
import { AddressObject } from "./Booking";
import { useAuth } from "../../../contexts/AuthProvider";

const AddressForm = ({
    setBillingAddress,
}: {
    setBillingAddress: React.Dispatch<React.SetStateAction<AddressObject>>;
}) => {
    const { user }: any = useAuth();
    const { displayName: name} = user;
    return (
        <form>
            <h3 className="text-lg text-gray-600 text-center font-semibold mb-2">
                Booking Address
            </h3>
            <AddressElement
                className="mb-8"
                options={{
                    mode: "billing",
                    defaultValues: {
                        name: name,
                        address: {
                            line1: "WV28+X9P, Dargah Gate",
                            line2: "Hazrat Shahjalal Sharif",
                            city: "Sylhet",
                            state: "Sylhet",
                            postal_code: "3100",
                            country: "BD",
                        },
                    },
                }}
                onChange={(event) => {
                    if (event.complete) {
                        // Extract potentially complete address
                        const address = event.value.address;
                        setBillingAddress(address);
                    }
                }}
            />
        </form>
    );
};

export default AddressForm;
