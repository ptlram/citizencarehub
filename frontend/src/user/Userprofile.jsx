import "../css/Userprofile.css"; // Import your custom CSS file
import Footer from "./Footer";
import Nevbar from "./Nevbar";

const Userprofile = () => {
    return (
        <div>
            <div><Nevbar /></div>

            <div className="user-profile-container">
                <div className="user-profile-header">
                    <h2 className="user-profile-title">User Profile</h2>
                </div>
                <div className="user-profile-details">
                    <div className="user-profile-row">
                        <div className="user-profile-label">First Name:</div>
                        <div className="user-profile-value">firstName</div>
                    </div>
                    <div className="user-profile-row">
                        <div className="user-profile-label">Last Name:</div>
                        <div className="user-profile-value">lastName</div>
                    </div>
                    <div className="user-profile-row">
                        <div className="user-profile-label">Gender:</div>
                        <div className="user-profile-value">gender</div>
                    </div>
                    <div className="user-profile-row">
                        <div className="user-profile-label">Contact:</div>
                        <div className="user-profile-value">phone</div>
                    </div>
                    <div className="user-profile-row">
                        <div className="user-profile-label">City:</div>
                        <div className="user-profile-value">ank</div>
                    </div>
                    <div className="user-profile-row">
                        <div className="user-profile-label">address:</div>
                        <div className="user-profile-value">dept</div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Userprofile;
