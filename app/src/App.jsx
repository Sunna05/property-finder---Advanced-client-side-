import { properties } from "./data/properties";

export default function App() {
  return (
    <div style={{ padding: 16, fontFamily: "system-ui" }}>
      <h1>Property Finder</h1>
      <p>Total properties: {properties.length}</p>

      <ul>
        {properties.map((p) => (
          <li key={p.id} style={{ marginBottom: 10 }}>
            <b>{p.id}</b> — {p.type} — £{p.price.toLocaleString()} — {p.bedrooms} beds — {p.postcode}
            <div style={{ opacity: 0.8 }}>{p.short}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
