import React, { useState } from 'react'

export default function Review() {
      const [activeTab, setActiveTab] = useState<"description" | "review">("description");

  return (
    <div>
            <section className=" w-2/3 mx-auto  p-4">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-4 py-2 rounded-md font-medium transition ${
            activeTab === "description" ? "btn bg-main border-none" : "bg-gray-200 text-gray-800"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("review")}
          className={`px-4 py-2 rounded-md font-medium transition ${
            activeTab === "review" ? "btn bg-main border-none" : "bg-gray-200 text-gray-800"
          }`}
        >
          Review
        </button>
      </div>
      <div className="p-4 border rounded-lg bg-white shadow">
        {activeTab === "description" ? (
          <p className="text-gray-700">
            This is the product description. It tells you all the useful details about the item,
            including what it&apos;s made of, its benefits, and how it should be used.
          </p>
        ) : (
          <p className="text-gray-700">
            This is the review section. Users will see other customer opinions and experiences
            about the product here.
          </p>
        )}
      </div>
    </section>
    </div>
  )
}
