"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// This component fetches a random quote from the API
// and displays it in a block with an image of Chuck Norris.
export default function QuoteBlock() {
  const [quote, setQuote] = useState<string>("");

  type QuoteResponse = {
    quote: string;
  };

  // Fetch a random quote from the API
  // and update the state
  const handleQuoteChange = async () => {
    try {
      setQuote("Loading...");
      const res = await fetch("/api/quotes");
      const data: QuoteResponse = await res.json();
      setQuote(data.quote);
    } catch (error: unknown) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    // On first load, send a request to /api/visitors
    const trackVisitor = async () => {
      try {
        const res = await fetch("/api/visitors", {
          method: "POST",
        });
        await res.json();
      } catch (error: unknown) {
        console.error("Error fetching quote:", error);
      }
    };
    trackVisitor();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full p-12">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full p-4 gap-10 max-w-screen-2xl mx-auto">
        {/* Block with image */}
        <div className="relative w-96 h-96 rounded-2xl bg-white shadow-md overflow-hidden">
          <Image
            src="/chuckandcode.png"
            alt="Chuck Norris"
            fill
            priority
            className="object-cover"
          />
        </div>
        {/* Block with quote */}
        <div className="flex flex-col justify-center items-center rounded-2xl w-96 h-96 bg-white shadow-md mw-96 mh-96 p-8">
          <p
            key={quote}
            className={"font-display text-lg mt-4 text-gray-700 text-center"}
          >
            {quote ||
              `Chuck Norris's programs can pass the Turing Test by staring at the interrogator.`}
          </p>
        </div>
      </div>
      {/* Button to get a new quote */}
      <button
        className="font-display text-ml border-4 rounded-2xl mt-8 bg-black hover:bg-white hover:text-black p-3 scale-150 transform-gpu active:scale-140 transition duration-150 ease-in-out"
        onClick={handleQuoteChange}
      >
        Change qoute
      </button>
    </div>
  );
}
