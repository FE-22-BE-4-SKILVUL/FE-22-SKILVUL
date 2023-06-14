import React from "react";
import CardArtikel from "../components/CardArtikel";

export default function ArtikelList({ items }) {
  return (
    <div className="row">
      {items.map((item) => (
        <CardArtikel key={item.id} item={item} />
      ))}
    </div>
  );
}
