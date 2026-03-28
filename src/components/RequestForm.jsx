import React, { useState } from "react";
import LocationMap from "./LocationMap";
import "./RequestForm.css";

const RequestForm = ({ onSubmit }) => {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || !description) {
      alert("Please fill in all fields");
      return;
    }
    const lat = position ? position.lat : null;
    const lng = position ? position.lng : null;
    onSubmit({ location, description, lat, lng });
    // Reset form
    setLocation("");
    setDescription("");
    setPosition(null);
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