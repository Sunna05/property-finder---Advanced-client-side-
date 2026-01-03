import { useMemo, useState } from "react";
import { properties } from "../data/properties";

export default function SearchPage() {
  const [filters, setFilters] = useState({
    type: "any",
    minPrice: "",
    maxPrice: "",
    minBeds: "",
    maxBeds: "",
    postcodeArea: "",
    dateAfter: "",
  });

  const update = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filtered = useMemo(() => {
    return properties; // (we will filter in Step 3)
  }, [filters]);

  return (
    <div style={{ padding: 16, fontFamily: "system-ui", maxWidth: 1000, margin: "0 auto" }}>
      <h1>Property Finder</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        <label>
          Type
          <select value={filters.type} onChange={(e) => update("type", e.target.value)} style={{ width: "100%", padding: 8, marginTop: 6 }}>
            <option value="any">Any</option>
            <option value="house">House</option>
            <option value="flat">Flat</option>
          </select>
        </label>

        <label>
          Min price
          <input type="number" value={filters.minPrice} onChange={(e) => update("minPrice", e.target.value)} style={{ width: "100%", padding: 8, marginTop: 6 }} />
        </label>

        <label>
          Max price
          <input type="number" value={filters.maxPrice} onChange={(e) => update("maxPrice", e.target.value)} style={{ width: "100%", padding: 8, marginTop: 6 }} />
        </label>

        <label>
          Min beds
          <input type="number" value={filters.minBeds} onChange={(e) => update("minBeds", e.target.value)} style={{ width: "100%", padding: 8, marginTop: 6 }} />
        </label>

        <label>
          Max beds
          <input type="number" value={filters.maxBeds} onChange={(e) => update("maxBeds", e.target.value)} style={{ width: "100%", padding: 8, marginTop: 6 }} />
        </label>

        <label>
          Postcode area (e.g. BR1)
          <input value={filters.postcodeArea} onChange={(e) => update("postcodeArea", e.target.value)} style={{ width: "100%", padding: 8, marginTop: 6 }} />
        </label>

        <label>
          Date added after
          <input type="date" value={filters.dateAfter} onChange={(e) => update("dateAfter", e.target.value)} style={{ width: "100%", padding: 8, marginTop: 6 }} />
        </label>

        <button
          onClick={() =>
            setFilters({ type: "any", minPrice: "", maxPrice: "", minBeds: "", maxBeds: "", postcodeArea: "", dateAfter: "" })
          }
          style={{ padding: 10, marginTop: 24 }}
        >
          Clear
        </button>
      </div>

      <p style={{ marginTop: 16 }}>
        Showing <b>{filtered.length}</b> of {properties.length}
      </p>

      {/* results placeholder */}
      <ul>
        {filtered.map((p) => (
          <li key={p.id}>{p.id} — {p.type} — £{p.price.toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
}
