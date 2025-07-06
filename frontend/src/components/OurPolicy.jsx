// import { assets } from "../assets/assets";
// import "../style/ourPolicy.css";

// const OurPolicy = () => {
//   return (
//     <div className="our-policy-container">
//       <div className="policy-item">
//         <img src={assets.exchange_icon} alt="Exchange Icon" className="policy-icon" />
//         <p className="policy-title">Easy Exchange Policy</p>
//         <p className="policy-desc">We Offer hassle free exchange policy.</p>
//       </div>
//       <div className="policy-item">
//         <img src={assets.quality_icon} alt="Return Icon" className="policy-icon" />
//         <p className="policy-title">7 Days Return Policy</p>
//         <p className="policy-desc">We Provide 7 days free return policy.</p>
//       </div>
//       <div className="policy-item">
//         <img src={assets.support_img} alt="Support Icon" className="policy-icon" />
//         <p className="policy-title">Best Customer Support</p>
//         <p className="policy-desc">We Provide 24/7 customer support.</p>
//       </div>
//     </div>
//   );
// };

// export default OurPolicy;


import { assets } from "../assets/assets";
import "../style/ourPolicy.css";

const OurPolicy = () => {
  const policies = [
    {
      icon: assets.exchange_icon,
      title: "Easy Exchange",
      desc: "Enjoy a smooth, no-questions-asked exchange process for eligible items.",
    },
    {
      icon: assets.quality_icon,
      title: "7-Day Return",
      desc: "Changed your mind? Return within 7 days — hassle-free and quick.",
    },
    {
      icon: assets.support_img,
      title: "24/7 Support",
      desc: "Our friendly team is always here to help — any time, any day.",
    },
  ];

  return (
    <div className="our-policy-container">
      {policies.map((policy, index) => (
        <div className="policy-card" key={index}>
          <img src={policy.icon} alt={policy.title} className="policy-icon" />
          <p className="policy-title">{policy.title}</p>
          <p className="policy-desc">{policy.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default OurPolicy;
