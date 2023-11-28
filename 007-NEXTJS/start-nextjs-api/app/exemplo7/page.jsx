"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Home = () => {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    try {
      const resposta = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      
      const data = await resposta.json();
      setPhotos(data);
    } catch (error) {
      console.error("Erro ao buscar fotos:", error.message);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div>
      <h1>Lista de Fotos</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <Image
              src={photo.thumbnailUrl}
              alt={photo.title}
              width={150} // Defina a largura desejada da imagem
              height={100} // Defina a altura desejada da imagem
            />
            <p>
              <strong>{photo.title}</strong>
            </p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
