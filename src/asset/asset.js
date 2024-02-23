import React, { useState, useEffect } from "react";
import "./asset.css";
function Transaction() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://blockstream.info/liquid/api/assets/registry?sort_field=name")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching  data:", error);
      });
  }, []);

  return (
    <div style={{ background: "rgb(10, 9, 9)" }}>
      <br></br>
      <br></br>
      <nav
      style={{
        background: "rgb(32, 31, 31)",
        padding: "10px",
        marginBottom: "20px",
        height: "40pt",
        display: "flex",
      }}
    >
      <h3 style={{ cursor:"pointer", color: "white", marginLeft: "22%" }}>Dashboard</h3>
      <h3 style={{ cursor:"pointer", color: "white", marginLeft: "3%" }}>Blocks</h3>
      <h3 style={{ cursor:"pointer", color: "white", marginLeft: "3%" }}>Transactions</h3>
      <h3 style={{ cursor:"pointer", color: "white", marginLeft: "3%" }}>Assets</h3>
     
    
    </nav>
      <br />
      <br></br>
      <table
        style={{
          marginLeft: "18%",
          width: "70%",
          borderCollapse: "collapse",
          height: "1900px",
          background: "rgb(32, 31, 31)",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginTop: "-10px",
        }}
      >
        <thead style={{ marginTop: "5%" }}>
          <br></br>
          <tr>
            <th
              style={{
                textAlign: "left",
                paddingLeft: "20px",
                color: "white",
                fontSize: "28pt",
               
              }}
            >
             All Assets
            </th>
          </tr>
          <br></br>
          <br></br>
          <br></br>
          <tr>
            <th
              style={{
                textAlign: "left",
                paddingLeft: "20px",
                color: "grey",
              }}
            >
              Name
            </th>
            <th
              style={{
                textAlign: "left",
                paddingLeft: "100px",
                color: "grey",
              }}
            >
              Ticker
            </th>
            <th
              style={{
                textAlign: "left",
                paddingLeft: "100px",
                color: "grey",
              }}
            >
              Total Supply
            </th>
            <th
              style={{
                textAlign: "left",
                paddingLeft: "100px",
                color: "grey",
              }}
            >
              Issuer Domain
            </th>
          </tr>
          <tr>
            <td colSpan="4" style={{ borderBottom: "1px solid black" }}></td>
          </tr>
        </thead>
        <tbody>
          {data.map((asset, index) => (
            <React.Fragment key={index}>
              <tr
                style={{
                  cursor: "pointer",
                }}
              >
                <td
                  style={{
                    paddingLeft: "20px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {asset.contract.name}
                </td>
                <td
                  style={{
                    paddingLeft: "100px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {asset.contract.ticker}
                </td>
                <td
                  style={{
                    paddingLeft: "100px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {(asset.chain_stats.issued_amount !=0)?asset.chain_stats.issued_amount:"Confidential"}
                </td>
                <td
                  style={{
                    paddingLeft: "100px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {asset.contract.entity.domain}
                </td>
              </tr>
              <tr>
                <td
                  colSpan="4"
                  style={{ borderBottom: "1px solid black" }}
                ></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <br></br>
      <br></br>
    </div>
  );
}

export default Transaction;
