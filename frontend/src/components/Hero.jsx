// import { assets } from "../assets/assets";
// import "../style/hero.css";

// const Hero = () => {
//   return (
//     <div className="hero-container">
      
//       <div className="hero-text-container">
//         <div className="hero-text-content">
//           <div className="hero-top-row">
//             <p className="hero-line"></p>
//             <p className="hero-hot-text">Hot Right Now 🔥</p>
//           </div>
//           <h1 className="hero-heading">
//             Fresh Finds Just for You
//           </h1>
//           <div className="hero-bottom-row">
//             <p className="hero-shop-text">Let’s Shop!</p>
//             <p className="hero-line"></p>
//           </div>
//         </div>
//       </div>

//       <img src={assets.hero_img} alt="Hero" className="hero-image" />
//     </div>
//   );
// };

// export default Hero;



import { assets } from "../assets/assets";
import "../style/hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <div className="hero-text-content">
          <p className="hero-label">✨ Exclusive Launch</p>
          <h1 className="hero-heading">Style that Speaks for You</h1>
          <p className="hero-description">
            Discover curated collections crafted for modern lifestyles. Shop the latest trends, timeless classics, and everything in between — all in one place.
          </p>
          <button className="hero-cta-button">Shop New Arrivals</button>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <img src={assets.hero_img} alt="Featured Product" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
