"use client"
import { useEffect, useState } from 'react';
import Image from "next/image";
import { generateMarvelHash } from '@/lib/utils';

const publicKey = process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY;
const privateKey = process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY;
const timestamp = new Date().getTime();
const hash = generateMarvelHash(timestamp, privateKey, publicKey);

const apiUrl = `https://gateway.marvel.com/v1/public/characters?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const resposta = await fetch(apiUrl);
        const data = await resposta.json();
        setCharacters(data.data.results);
      } catch (error) {
        console.error('Erro ao buscar dados da API Marvel:', error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Marvel Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}
          <Image
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          width={200}
          height={200}
        />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
