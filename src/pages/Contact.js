import { FaLeaf, FaGlassWhiskey, FaTruck, FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="p-6 text-center flex flex-col items-center">
            <br/>
            <h1 className="text-3xl font-bold pb-4">Contact Us</h1>
            
            {/* Phone Contact */}
            <div className="text-lg flex flex-col items-center gap-2">
                <p>📞 For inquiries, call us at:</p>
                <a 
                    href="tel:+11234567890"
                    className="text-xl font-semibold text-blue-600 hover:underline"
                >
                    📞 +1 (123) 456-7890
                </a>
            </div>

            {/* Email Contact */}
            <div className="text-lg flex flex-col items-center gap-2 mt-4">
                <p className="flex items-center gap-2"><FaEnvelope /> Email us at:</p>
                <a 
                    href="mailto:contact@freshjuices.com"
                    className="text-xl font-semibold text-blue-600 hover:underline"
                >
                    contact@freshjuices.com
                </a>
            </div>

            {/* Address */}
            <div className="text-lg flex flex-col items-center gap-2 mt-4">
                <p className="flex items-center gap-2"><FaMapMarkerAlt /> Visit us at:</p>
                <p className="text-md font-medium">123 Juice Street, Freshville, USA</p>
            </div>

<br/>
<br/>
<br/>
<br/>
<br/>
            {/* Footer Section */}
            <footer className="text-dark text-center py-5 mt-5 w-full" style={{ backgroundColor: '#B4EBE6' }}>
                <div className="container">
                    <p className="mb-2">&copy; {new Date().getFullYear()} Fresh Juices. All Rights Reserved.</p>
                    <div className="social-icons flex justify-center gap-3">
                        <a href="#" className="text-dark"><FaFacebook size={24} /></a>
                        <a href="#" className="text-dark"><FaInstagram size={24} /></a>
                        <a href="#" className="text-dark"><FaTwitter size={24} /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
