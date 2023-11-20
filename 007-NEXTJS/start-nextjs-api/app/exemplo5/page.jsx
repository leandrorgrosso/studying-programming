"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  }, []);

  return (
    <div>
      {photos.length > 0 && (
        <ul>
          {photos.map((photo) => (
            <li key={photo.albumId}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <p>{photo.title}</p>
            </li>
          ))}
        </ul>
      )}
      {photos.length === 0 && <p>Loading...</p>}
    </div>
  );
}
