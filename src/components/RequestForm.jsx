import React, { useState } from "react";
import LocationMap from "./LocationMap";
import "./RequestForm.css";
import { submitRequest } from "../api/requests";

const RequestForm = ({ onSubmit }) => {
  var testExpressUrl = "http://localhost:5000";

  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!location || !description) {
      alert("Please fill in all fields");
      return;
    }

    const newRequest = {
      id: Date.now(),
      location,
      description,
      status: "Submitted",
      lat: position?.lat ?? null,
      lng: position?.lng ?? null,
      createdAt: new Date().toISOString(),
    };

    try {
      const savedRequest = await submitRequest(newRequest, testExpressUrl);
      console.log("Request saved:", savedRequest);
      alert("Request submitted successfully!");
      
      setLocation("");
      setDescription("");
      setPosition(null);
    } catch {
      alert("Failed to submit request. Try again later.");
    }
  };

  return (
    <div className="request-form">
      <h2>Submit a Public Works Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="location">Location (Address)</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter the address or location"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue or request"
            rows="4"
            required
          />
        </div>
        <div className="form-group">
          <label>Select Location on Map (Optional)</label>
          <p>
            {position ? `Lat: ${position.lat.toFixed(4)}, Lng: ${position.lng.toFixed(4)}` : "Click on the map to select location"}
          </p>
          <LocationMap position={position} setPosition={setPosition} />
        </div>
        <button type="submit" className="submit-btn">Submit Request</button>
      </form>
    </div>
  );
};

export default RequestForm;