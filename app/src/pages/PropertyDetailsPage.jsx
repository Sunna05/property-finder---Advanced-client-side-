import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { properties } from "../data/properties";

export default function PropertyDetailsPage() {
  const { id } = useParams();

  // find the correct property by id from the URL
  const property = useMemo(() => {
    return properties.find((p) => p.id === id);
  }, [id]);

  // if the id is wrong
  if (!property) {
    return (
      <div style={{ padding: 16 }}>
        <Link to="/">← Back to search</Link>
        <h2 style={{ marginTop: 16 }}>Property not found</h2>
        <p>No property exists with id: <b>{id}</b></p>
      </div>
    );
  }

  // --- Gallery state (big image changes when you click thumbnails)
  const gallery = property.images && property.images.length > 0
    ? property.images
    : [property.picture];

  const [selectedImg, setSelectedImg] = useState(gallery[0]);

  // --- Tabs state
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div style={{ padding: 16, maxWidth: 1000, margin: "0 auto" }}>
      <Link to="/">← Back to search</Link>

      <h1 style={{ marginTop: 16 }}>
        {property.type.toUpperCase()} • {property.bedrooms} beds
      </h1>

      <p style={{ fontSize: 20, marginTop: 6 }}>
        £{property.price.toLocaleString()}
      </p>

      <p style={{ opacity: 0.9 }}>
        {property.location} • {property.postcode}
      </p>

      {/* ================== GALLERY ================== */}
      <div style={{ marginTop: 20 }}>
        {/* big image */}
        <img
          src={selectedImg}
          alt={property.location}
          style={{
            width: "100%",
            maxHeight: 420,
            objectFit: "cover",
            borderRadius: 14,
            display: "block",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        />

        {/* thumbnails */}
        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 10,
            overflowX: "auto",
            paddingBottom: 6,
          }}
        >
          {gallery.map((img, index) => (
            <button
              key={img + index}
              onClick={() => setSelectedImg(img)}
              style={{
                padding: 0,
                border: selectedImg === img ? "2px solid #6ea8fe" : "1px solid rgba(255,255,255,0.15)",
                borderRadius: 10,
                background: "transparent",
                cursor: "pointer",
                flex: "0 0 auto",
              }}
            >
              <img
                src={img}
                alt={`thumb ${index + 1}`}
                style={{
                  width: 110,
                  height: 75,
                  objectFit: "cover",
                  borderRadius: 8,
                  display: "block",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* ================== TABS ================== */}
      <div style={{ marginTop: 22 }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button onClick={() => setActiveTab("description")}>
            Description
          </button>
          <button onClick={() => setActiveTab("floorplan")}>
            Floor plan
          </button>
          <button onClick={() => setActiveTab("map")}>
            Map
          </button>
        </div>

        <div style={{ marginTop: 14 }}>
          {activeTab === "description" && (
            <div>
              <h3>Description</h3>
              <p style={{ lineHeight: 1.6 }}>{property.description}</p>
            </div>
          )}

          {activeTab === "floorplan" && (
            <div>
              <h3>Floor plan</h3>
              <img
                src={property.floorPlan}
                alt="Floor plan"
                style={{
                  width: "100%",
                  maxHeight: 520,
                  objectFit: "contain",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.03)",
                }}
              />
              {!property.floorPlan && (
                <p>No floor plan added for this property.</p>
              )}
            </div>
          )}

          {activeTab === "map" && (
            <div>
              <h3>Map</h3>
              <iframe
                title="Google map"
                width="100%"
                height="380"
                style={{ border: 0, borderRadius: 14 }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  property.mapQuery || property.location
                )}&output=embed`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
