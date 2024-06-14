import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className="flex flex-col lg:flex-row w-full max-w-[1000px] mx-auto my-4 border rounded-lg shadow-lg overflow-hidden p-5">
      <div className="w-full lg:w-[360px] flex-shrink-0">
        <Image
          src="/plash.jpg" // Update with your image path
          alt="Card Image"
          width={360}
          height={540}
          className="w-full h-auto"
        />
      </div>
      <div className="w-full lg:w-[540px] p-4">
        <h1 className="text-2xl font-bold mb-2">Card Title</h1>
        <p className="text-base mb-4">
          This is a description of the card. It contains some text that explains what this card is about.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Click Me
        </button>
      </div>
    </div>
    </main>
  );
}
