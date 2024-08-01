import React from "react";
import "./style.css";

export function Article({ title, provider, description, thumbnail, url }) {
  return (
    <article id="article">
      <img src={thumbnail} alt={title} />

      <div className="article-infos">
        <h2>{title}</h2>
        <h3>{provider}</h3>
        <p>{description}</p>
        <a href={url}>Leia mais...</a>
      </div>
    </article>
  );
}
