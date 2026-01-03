// app/src/pages/PropertyDetailsPage.jsx
import { useParams, Link } from "react-router-dom";
import { properties } from "../data/properties";

export default function PropertyDetailsPage() {
  const { id } = useParams();

  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div style={{ padding: 16, fontFamily: "system-ui" }}>
        <p>Property not found.</p>
        <Link to="/">← Back to search</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 16, fontFamily: "system-ui" }}>
      <Link to="/">← Back to search</Link>

      <h1 style={{ marginTop: 16 }}>
        {property.type.toUpperCase()} • {property.bedrooms} beds
      </h1>

      <p style={{ fontSize: 20, margin: "8px 0" }}>
        £{property.price.toLocaleString()}
      </p>

      <p style={{ opacity: 0.9 }}>
        {property.location} • {property.postcode}
      </p>

      {property.picture && (
        <img
          src={property.picture}
          alt={property.location}
          style={{
            width: "100%",
            maxWidth: 700,
            borderRadius: 12,
            marginTop: 16,
          }}
        />
      )}

      <p style={{ marginTop: 16 }}>{property.short}</p>

      {/* We will add the full description, tenure, added date etc. next */}
    </div>
  );
}
