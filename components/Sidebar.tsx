"use client";
import React, { useState } from "react";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <aside
      className={`bg-card w-64 min-h-screen p-4 ${
        sidebarOpen ? "block" : "hidden"
      } md:block`}
    >
      <div className="flex items-center mb-6">
        <span className="text-xl font-bold">AdminDash</span>
      </div>
      <nav>
        {["Dashboard", "Users", "Services", "Analytics", "Settings"].map(
          (item) => (
            <a
              key={item}
              href="#"
              className="flex items-center p-2 mt-2 text-foreground hover:bg-accent rounded"
            >
              {item}
            </a>
          )
        )}
      </nav>
    </aside>
  );
}
