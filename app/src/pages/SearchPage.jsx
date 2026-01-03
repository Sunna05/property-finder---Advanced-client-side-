import PropertyCard from "../components/PropertyCard";
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
  const minP = filters.minPrice === "" ? null : Number(filters.minPrice);
  const maxP = filters.maxPrice === "" ? null : Number(filters.maxPrice);
  const minB = filters.minBeds === "" ? null : Number(filters.minBeds);
  const maxB = filters.maxBeds === "" ? null : Number(filters.maxBeds);

  const wantedArea = filters.postcodeArea.trim().toUpperCase();

  return properties.filter((p) => {
    // type
    if (filters.type !== "any" && p.type !== filters.type) return false;

    // price
    if (minP !== null && p.price < minP) return false;
    if (maxP !== null && p.price > maxP) return false;

    // bedrooms
    if (minB !== null && p.bedrooms < minB) return false;
    if (maxB !== null && p.bedrooms > maxB) return false;

    // postcode area (first part)
    if (wantedArea !== "") {
      const areaHave = String(p.postcode).split(" ")[0].toUpperCase();
      if (areaHave !== wantedArea) return false;
    }

    return true;
  });
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

     

      {/* results placeholder */}
      <p style={{ marginTop: 16 }}>
        Showing <b>{filtered.length}</b> of {properties.length}
</p>
{filtered.length === 0 ? (
  <p style={{ marginTop: 16, opacity: 0.8 }}>
    No properties match your filters. Try clearing or adjusting values.
  </p>
) : (
  <div className="grid">
    {filtered.map((p) => (
      <PropertyCard key={p.id} property={p} />
    ))}
  </div>
)}


    </div>
  );
}
