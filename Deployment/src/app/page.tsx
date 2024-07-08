"use client";
import Image from "next/image";
import { useState } from "react";

const hashName = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};

export default function Home() {
  const [name, setName] = useState("");
  const [pokemonImageUrl, setPokemonImageUrl] = useState("");

  const handleSubmit = async () => {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon";
    // const urlBasedOnName = `${baseUrl}${hashName(name)}`;
    const urlBasedOnName = `${baseUrl}/123`;

    const res = await fetch(urlBasedOnName)
      .then((response) => response.json())
      .catch((error) => console.error("Error fetching data:", error));

    setPokemonImageUrl(res.sprites.front_default);

    console.log(res);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-center text-4xl font-bold">Quel Pokémon es-tu ?</h1>
      {pokemonImageUrl && (
        <Image
          src={pokemonImageUrl}
          alt="Your Image Description"
          width={500}
          height={300}
        />
      )}
      <input
        type="text"
        placeholder="Votre prénom"
        className="mt-4 p-2 border rounded"
        value={name}
        onChange={handleNameChange}
      />
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={handleSubmit}
      >
        Découvrez votre pokémon !
      </button>
    </main>
  );
}
