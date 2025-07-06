import "../style/newsLetter.css";
import { toast } from "react-toastify";
import { useState, useContext } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";

const NewsLetterBox = () => {
  const { backendUrl, navigate } = useContext(ShopContext);
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token"); // Check login
    if (!token) {
      toast.error("Please log in to subscribe.");
      navigate("/login");
      return;
    }

    try {
      const res = await axios.post(
        backendUrl + "/api/sendemail",
        { email },
        {
          headers: {
            token, 
          },
        }
      );

      if (res.data.success) {
        toast.success("Subscribed successfully. Check Email for Coupon");
      } else {
        toast.error(res.data.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("Subscription failed. Try again later.");
      console.error("Subscription error:", error);
    }
  };

 return (
  <div className="newsletter-box">
    <p className="newsletter-title">Subscribe & Save 20% Instantly</p>
    
    <p className="newsletter-subtitle">
        Join thousands of fashion lovers and get early access to collections, exclusive offers, and handpicked styles from Chiguru.
      </p>

    <p className="newsletter-highlight">
      📬 Sign up now — your welcome gift is waiting!
    </p>

    <form className="newsletter-form" onSubmit={onSubmitHandler}>
      <input
        type="email"
        placeholder="Enter your email address"
        className="newsletter-input"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="newsletter-button">
        Get My 20% Off
      </button>
    </form>

    <p className="newsletter-note">
      No spam. Only value. Unsubscribe anytime.
    </p>
  </div>
);

};

export default NewsLetterBox;
