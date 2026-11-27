function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        
        <div style={{ padding: "20px", background: "#f1f5f9", borderRadius: "10px" }}>
          <h3>Total Orders</h3>
          <p>120</p>
        </div>

        <div style={{ padding: "20px", background: "#f1f5f9", borderRadius: "10px" }}>
          <h3>Revenue</h3>
          <p>$2,500</p>
        </div>

        <div style={{ padding: "20px", background: "#f1f5f9", borderRadius: "10px" }}>
          <h3>Customers</h3>
          <p>80</p>
        </div>

      </div>
    </div>
  )
}

export default Dashboard