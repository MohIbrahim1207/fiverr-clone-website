import GigCard from "../components/GigCard";
import "./Gigs.css";

function Gigs() {
  const gigs = [
    {
      id: 1,
      title: "I will build a modern website",
      seller: "John",
      price: 3000,
      image: "website.jpg",
    },
    {
      id: 2,
      title: "Professional logo design",
      seller: "Anna",
      price: 1500,
      image: "logo.png",
    },
    {
      id: 3,
      title: "Video editing for YouTube",
      seller: "Mike",
      price: 2000,
      image: "video.jpg",
    },
   
  ];

  return (
    <div className="gigs-page">
      <h2>Available Gigs</h2>

      <div className="gigs-container">
        {gigs.map((gig) => (
          <GigCard key={gig.id} gig={gig} />
        ))}
      </div>
    </div>
  );
}

export default Gigs;
