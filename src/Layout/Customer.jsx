import { Outlet } from "react-router-dom";
import CustomerSidebar from "../Pages/Customer/Shared/CustomerSidebar";

const Customer = () => {
    return (
        <div className="min-h-screen flex lg:flex-row flex-col poppins-regular">
            <div>
                <CustomerSidebar></CustomerSidebar>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Customer;