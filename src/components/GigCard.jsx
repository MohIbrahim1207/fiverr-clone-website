import { useNavigate } from "react-router-dom";
import "./GigCard.css";

function GigCard({ gig }) {
  const navigate = useNavigate();

  return (
    <div className="gig-card" onClick={() => navigate(`/gigs/${gig.id}`)}>
      <img src={gig.image} alt={gig.title} />
      <div className="gig-info">
        <h4>{gig.title}</h4>
        <p className="seller">by {gig.seller}</p>
        <p className="price">₹{gig.price}</p>
      </div>
    </div>
  );
}

export default GigCard;
