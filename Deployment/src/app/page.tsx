"use client";
import Image from "next/image";
import { useState } from "react";
import crypto from "crypto";
import { Spinner } from "@/components/spinner";

function hashName(name: string, itemCount: number): number {
  const hash = crypto.createHash("md5").update(name).digest("hex");
  const numericHash = parseInt(hash, 16);
  return numericHash % itemCount;
}

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export default function Home() {
  const [name, setName] = useState("");
  const [pokemonImageUrl, setPokemonImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    const urlWithHash = `${BASE_URL}/${hashName(name, 850)}`;

    console.log(name, urlWithHash);

    const res = await fetch(urlWithHash)
      .then((response) => response.json())
      .catch((error) => console.error("Error fetching data:", error));

    setPokemonImageUrl(res.sprites.front_default);
    setIsLoading(false);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-center text-4xl font-bold">Quel Pokémon es-tu ?</h1>
      {isLoading ? (
        <Spinner />
      ) : pokemonImageUrl ? (
        <Image
          src={pokemonImageUrl}
          alt="Your Image Description"
          width={500}
          height={300}
        />
      ) : null}
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
