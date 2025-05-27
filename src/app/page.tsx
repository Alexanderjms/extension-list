"use client";

import React, { useState } from "react";
import ExtensionCard from "@/components/extension";
import { cardsData as initialCardsData } from "@/components/extensions_list";

const Home = () => {
  const [filter, setFilter] = useState("all");
  const [cards, setCards] = useState(initialCardsData);

  const handleStatusChange = (id: string, newStatus: string) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, status: newStatus } : card
      )
    );
  };

  const filteredCards = cards.filter((card) => {
    if (filter === "all") return true;
    return card.status === filter;
  });

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-20 mx-4 sm:mx-8 md:mx-16 lg:mx-40 mt-10 mb-4 p-4 text-white text-lg transition-colors duration-300 font-noto">
        <h2 className="font-semibold text-3xl sm:text-4xl mb-4 sm:mb-0 text-center sm:text-left text-white font-noto">
          Extensions List
        </h2>

        <div className="flex space-x-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 text-base py-1 rounded-2xl transition-colors duration-300 border border-gray-600 bg-gray-800 text-white hover:bg-blue-950 hover:text-white font-noto ${
              filter === "all"
                ? "bg-red-400 text-blue-700 border-2 border-gray-100 font-noto font-semibold"
                : ""
            }`}
            style={
              filter === "all"
                ? { backgroundColor: "#ef4444", color: "#1d4ed8" }
                : {}
            }
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`px-6 text-base py-1 rounded-2xl transition-colors duration-300 border border-gray-600 bg-gray-800 text-white hover:bg-blue-950 hover:text-white font-noto ${
              filter === "active"
                ? "bg-red-400 text-blue-700 border-2 border-gray-100 font-noto font-semibold"
                : ""
            }`}
            style={
              filter === "active"
                ? { backgroundColor: "#ef4444", color: "#1d4ed8" }
                : {}
            }
          >
            Active
          </button>
          <button
            onClick={() => setFilter("inactive")}
            className={`px-6 text-base py-1 rounded-2xl transition-colors duration-300 border border-gray-600 bg-gray-800 text-white hover:bg-blue-950 hover:text-white font-noto ${
              filter === "inactive"
                ? "bg-red-400 text-blue-700 border-2 border-gray-100 font-noto font-semibold"
                : ""
            }`}
            style={
              filter === "inactive"
                ? { backgroundColor: "#ef4444", color: "#1d4ed8" }
                : {}
            }
          >
            Inactive
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center">
          {filteredCards.map((card) => (
            <ExtensionCard
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              status={card.status}
              onStatusChange={handleStatusChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
