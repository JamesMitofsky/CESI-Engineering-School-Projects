"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [pokemonImageUrl, setPokemonImageUrl] = useState("");

  const handleNameSubmit = () => {
    const baseApiUrl = "https://pokeapi.co/api/v2/pokemon/";

    // submit name to the server
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
        onSubmit={handleNameSubmit}
      >
        Découvrez votre pokémon !
      </button>
    </main>
  );
}
