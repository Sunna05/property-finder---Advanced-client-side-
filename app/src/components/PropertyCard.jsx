import { Link } from "react-router-dom";
export default function PropertyCard({ property }) {
  const priceText = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <article className="card">
      <img
        className="card__img"
        src={property.picture}
        alt={property.location}
      />

      <div className="card__body">
        <div className="card__top">
          <h3 className="card__title">
            {property.type.toUpperCase()} • {property.bedrooms} beds
          </h3>
          <div className="card__price">{priceText}</div>
        </div>

        <div className="card__meta">
          <span>{property.location}</span>
          <span>•</span>
          <span>{property.postcode}</span>
        </div>

        <p className="card__desc">{property.short}</p>

       <Link className="button" to={`/property/${property.id}`}>
  View details →
</Link>

      </div>
    </article>
  );
}
