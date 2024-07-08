import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>My Application</h1>
      <Image
        src="/path/to/your/image.jpg"
        alt="Your Image Description"
        width={500}
        height={300}
      />
      <input
        type="text"
        placeholder="Enter something..."
        className="mt-4 p-2 border rounded"
      />
      <button className="mt-4 p-2 bg-blue-500 text-white rounded">
        Submit
      </button>
      Voilà, cela sera mon application.
    </main>
  );
}
