"use client";
import { useEffect, useState } from "react";

// This component fetches the number of visitors from the API
// and displays it in the footer.
export default function Footer() {
  const [visitors, setVisitors] = useState<number | null>(null);

  type VisitorsCount = {
    count: number;
  };

  useEffect(() => {
    // On first load, send a request to /api/visitors
    const fetchVisitors = async () => {
      try {
        const res = await fetch("/api/visitors", {
          method: "GET",
        });
        const data: VisitorsCount = await res.json();
        setVisitors(data.count);
      } catch (error: unknown) {
        console.error("Error fetching visitors:", error);
      }
    };
    fetchVisitors();
  }, []);

  return (
    <footer className="flex items-center justify-center p-4 bg-black text-white">
      {/* Block with visitors */}
      <p className="text-white-500 font-display text-lg">
        Visitors:{visitors !== null ? visitors : "Loading..."}
      </p>
    </footer>
  );
}
