import { FaFacebook, FaInstagram, FaLinkedin, FaLocationPin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="flex lg:flex-row flex-col items-start justify-between text-white p-6 gap-5 lg:gap-0">
            {/* Address Section */}
            <div className="flex gap-2">
                <div>
                    <FaLocationPin className="fill-white" />
                </div>
                <h1 className="text-sm">
                    H#000 (0th Floor), Road #00, <br />
                    New DOHS, Mohakhali, Dhaka, Bangladesh
                </h1>
            </div>

            {/* Company Section */}
            <div className="flex flex-col">
                <h1 className="font-bold">Company</h1>
                <ul className="text-sm opacity-70">
                    <li>About</li>
                    <li>Project</li>
                    <li>Our Team</li>
                    <li>Terms & Condition</li>
                    <li>Submit Listing</li>
                </ul>
            </div>

            {/* Quick Links Section */}
            <div className="flex flex-col">
                <h1 className="font-bold">Quick Links</h1>
                <ul className="text-sm opacity-70">
                    <li>About</li>
                    <li>Project</li>
                    <li>Our Team</li>
                    <li>Terms & Condition</li>
                    <li>Submit Listing</li>
                </ul>
            </div>

            {/* About Us Section */}
            <div className="flex flex-col lg:w-1/4 w-full gap-3">
                <h1 className="font-bold">About Us</h1>
                <p className="text-sm opacity-70">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur neque laboriosam voluptates odio tenetur itaque, officiis officia voluptatum in necessitatibus ullam sequi labore ea praesentium similique suscipit tempore quia iste
                </p>
                <div className="flex items-center gap-5 text-xl">
                    <FaInstagram></FaInstagram>
                    <FaFacebook></FaFacebook>
                    <FaLinkedin></FaLinkedin>
                    <FaYoutube></FaYoutube>
                </div>
            </div>
        </div>
    );
};

export default Footer;
