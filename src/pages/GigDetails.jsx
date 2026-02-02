import { useParams, useNavigate } from "react-router-dom";

function GigDetails() {
  const { id } = useParams();        // ✅ id exists here
  const navigate = useNavigate();
  

  console.log("URL ID:", id);         // ✅ now valid

  const gigs = [
    {
      id: 1,
      title: "I will build a modern website",
      description: "Responsive website using React",
      price: 3000,
      image: "/video.jpg",            // ✅ from public folder
    },
    {
      id: 2,
      title: "Professional logo design",
      description: "High quality logo design",
      price: 1500,
      image: "/website.jpg",          // ✅ from public folder
    },
  ];

  const gig = gigs.find((g) => g.id === Number(id));

  console.log("Found gig:", gig);     // ✅ now valid

  if (!gig) {
    return <h2 style={{ padding: "40px" }}>Gig not found</h2>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>{gig.title}</h2>
      <img src={gig.image} alt={gig.title} width="400" />
      <p>{gig.description}</p>
      <h3>₹{gig.price}</h3>

      <button
        onClick={() => navigate("/order", { state: gig })}
        style={{
          padding: "12px 20px",
          background: "#1dbf73",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Continue
      </button>
    </div>
  );
}

export default GigDetails;
