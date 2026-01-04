import { useMemo, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

export default function SearchPage() {
  // ✅ FAVOURITES
  const [favourites, setFavourites] = useState([]);
  const [isDraggingOverFavs, setIsDraggingOverFavs] = useState(false);

  const isFavourite = (id) => favourites.some((p) => p.id === id);

  const addFavourite = (property) => {
    setFavourites((prev) => {
      if (prev.some((p) => p.id === property.id)) return prev; // no duplicates
      return [...prev, property];
    });
  };

  const removeFavourite = (id) => {
    setFavourites((prev) => prev.filter((p) => p.id !== id));
  };

  const clearFavourites = () => setFavourites([]);

  // ✅ Drag & Drop helpers
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
    e.dataTransfer.effectAllowed = "copy";
  };

  const allowDrop = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const prop = properties.find((p) => p.id === id);
    if (prop) addFavourite(prop);
    setIsDraggingOverFavs(false);
  };

  // ✅ FILTERS
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

  const clear = () => {
    setFilters({
      type: "any",
      minPrice: "",
      maxPrice: "",
      minBeds: "",
      maxBeds: "",
      postcodeArea: "",
      dateAfter: "",
    });
  };

  const filtered = useMemo(() => {
    const minP = filters.minPrice === "" ? null : Number(filters.minPrice);
    const maxP = filters.maxPrice === "" ? null : Number(filters.maxPrice);
    const minB = filters.minBeds === "" ? null : Number(filters.minBeds);
    const maxB = filters.maxBeds === "" ? null : Number(filters.maxBeds);

    const area = filters.postcodeArea.trim().toUpperCase();
    const dateAfter = filters.dateAfter ? new Date(filters.dateAfter) : null;

    return properties.filter((p) => {
      if (filters.type !== "any" && p.type.toLowerCase() !== filters.type)
        return false;

      if (minP !== null && p.price < minP) return false;
      if (maxP !== null && p.price > maxP) return false;

      if (minB !== null && p.bedrooms < minB) return false;
      if (maxB !== null && p.bedrooms > maxB) return false;

      if (area && !p.postcode.toUpperCase().startsWith(area)) return false;

      if (dateAfter) {
        const pDate = new Date(p.added || p.dateAdded || p.date || "2000-01-01");
        if (pDate < dateAfter) return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="page">
      {/* ✅ TOP HEADER BAR */}
      <header className="topbar">
        <div className="brand">
          <div className="brandTitle">Property Finder</div>
          <div className="brandSub">Search • Drag into favourites • Remove anytime</div>
        </div>

        <div className="badges">
          <span className="badge">Results: {filtered.length}</span>
          <span className="badge">Favourites: {favourites.length}</span>
        </div>
      </header>

      {/* ✅ FILTERS PANEL */}
      <section className="panel">
        <div className="panelTitleRow">
          <div>
            <h2 style={{ margin: 0 }}>Find your next home</h2>
            <p style={{ margin: "6px 0 0", opacity: 0.75 }}>
              Use filters then drag properties into favourites.
            </p>
          </div>

          <div className="actions">
            <button className="btn" onClick={clear}>
              Reset
            </button>
          </div>
        </div>

        <div className="filtersGrid">
          <label>
            Type
            <select
              value={filters.type}
              onChange={(e) => update("type", e.target.value)}
            >
              <option value="any">Any</option>
              <option value="house">House</option>
              <option value="flat">Flat</option>
            </select>
          </label>

          <label>
            Postcode area
            <input
              value={filters.postcodeArea}
              onChange={(e) => update("postcodeArea", e.target.value)}
              placeholder="e.g. BR1"
            />
          </label>

          <label>
            Min price
            <input
              type="number"
              value={filters.minPrice}
              onChange={(e) => update("minPrice", e.target.value)}
              placeholder="e.g. 150000"
            />
          </label>

          <label>
            Max price
            <input
              type="number"
              value={filters.maxPrice}
              onChange={(e) => update("maxPrice", e.target.value)}
              placeholder="e.g. 350000"
            />
          </label>

          <label>
            Min beds
            <input
              type="number"
              value={filters.minBeds}
              onChange={(e) => update("minBeds", e.target.value)}
              placeholder="e.g. 2"
            />
          </label>

          <label>
            Max beds
            <input
              type="number"
              value={filters.maxBeds}
              onChange={(e) => update("maxBeds", e.target.value)}
              placeholder="e.g. 4"
            />
          </label>

          <label>
            Date added after
            <input
              type="date"
              value={filters.dateAfter}
              onChange={(e) => update("dateAfter", e.target.value)}
            />
          </label>
        </div>
      </section>

      {/* ✅ RESULTS + FAVS PANEL */}
      <section className="panel">
        <div className="mainLayout">
          {/* LEFT: RESULTS */}
          <div>
            <p style={{ marginTop: 0, opacity: 0.85 }}>
              Showing <b>{filtered.length}</b> of {properties.length}
            </p>

            {filtered.length === 0 ? (
              <p style={{ opacity: 0.8 }}>
                No properties match your filters. Try Reset.
              </p>
            ) : (
              <div className="grid">
                {filtered.map((p) => (
                  <div
                    key={p.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, p.id)}
                    title="Drag this card to the favourites panel"
                  >
                    <PropertyCard
                      property={p}
                      isFavourite={isFavourite(p.id)}
                      onToggleFavourite={() =>
                        isFavourite(p.id) ? removeFavourite(p.id) : addFavourite(p)
                      }
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: FAVOURITES */}
          <aside>
            <div className="panelTitleRow">
              <h3 style={{ margin: 0 }}>Favourites ({favourites.length})</h3>
              <button
                className="btn"
                onClick={clearFavourites}
                disabled={favourites.length === 0}
              >
                Clear
              </button>
            </div>

            <div
              className={
                "favDrop" + (isDraggingOverFavs ? " favDropZone--active" : "")
              }
              onDragOver={(e) => {
                allowDrop(e);
                setIsDraggingOverFavs(true);
              }}
              onDragLeave={() => setIsDraggingOverFavs(false)}
              onDrop={handleDrop}
            >
              {favourites.length === 0 ? (
                <p style={{ margin: 0, opacity: 0.85 }}>
                  Drag a property card here to add it to favourites.
                </p>
              ) : (
                <div className="grid" style={{ marginTop: 12 }}>
                  {favourites.map((p) => (
                    <PropertyCard
                      key={p.id}
                      property={p}
                      isFavourite={true}
                      onToggleFavourite={() => removeFavourite(p.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
