import { Link } from "react-router-dom";

export default function PropertyCard({ property, isFavourite = false, onToggleFavourite = () => {} }) {
  const priceText = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <article
  className="card"
  draggable
  onDragStart={(e) => {
    e.dataTransfer.setData("text/plain", property.id);
  }}
>

      <img className="card__img" src={property.picture} alt={property.location} />

      <div className="card__body">
        <div className="card__top">
          <h3 className="card__title">
            {property.type.toUpperCase()} • {property.bedrooms} beds
          </h3>
          <div className="card__price">{priceText}</div>
        </div>

        <div className="card__meta">
          <span>{property.location}</span> • <span>{property.postcode}</span>
        </div>

        <p className="card__desc">{property.short}</p>

        <Link className="card__link" to={`/property/${property.id}`}>
          View details →
        </Link>

       <button
  className="favBtn"
  data-testid={`fav-btn-${property.id}`}
  onClick={onToggleFavourite}
>
  {isFavourite ? "Remove favourite" : "Add favourite"}
</button>

      </div>
    </article>
  );
}
