import { useLocation, useNavigate } from "react-router-dom";

function Order() {
  const location = useLocation();
  const navigate = useNavigate();
  const invoiceNumber = "INV-" + Math.floor(Math.random() * 1000000);
  const orderDate = new Date().toLocaleDateString();


  const gig = location.state; // data from GigDetails

  // If user refreshes page
  if (!gig) {
    return <h2 style={{ padding: "40px" }}>No order data found</h2>;
  }

  const handlePrint = () => {
    window.print();
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
  <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
    <h1>Order Summary</h1>

    <p><strong>Invoice:</strong> {invoiceNumber}</p>
    <p><strong>Order Date:</strong> {orderDate}</p>

    <hr />

    <h2>{gig.title}</h2>
    <p>{gig.description}</p>

    <p>Service Price: ₹{gig.price}</p>
    <p>Service Fee: ₹100</p>

    <hr />

    <h3>Total Amount: ₹{gig.price + 100}</h3>

    <div style={{ marginTop: "20px" }}>
      <button
        onClick={handlePrint}
        style={{
          padding: "10px 16px",
          marginRight: "10px",
          background: "#1dbf73",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Print / Save as PDF
      </button>

      <button
        onClick={goBack}
        style={{
          padding: "10px 16px",
          background: "#ccc",
          border: "none",
          cursor: "pointer",
        }}
      >
        Go Back
      </button>
    </div>
  </div>
);

}

export default Order;
