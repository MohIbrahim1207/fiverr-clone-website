import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const services = [
    "Website Development",
    "Graphic Design",
    "Video Editing",
    "Digital Marketing",
    "Content Writing",
  ];
  return (
  <div className="home">
    <div className="home-content">
      <h1>Our freelancers will take it from here</h1>

      <div className="search-box">
        <input type="text" placeholder="Search for any service..." />
        <button>🔍</button>
      </div>

      <div className="services">
        {services.map((service, index) => (
          <button
            key={index}
            className="service-btn"
            onClick={() => navigate(`/gigs?category=${service}`)}
          >
            {service}
          </button>
        ))}
      </div>
    </div>
  </div>
);

}

export default Home;
