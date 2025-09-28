import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react"; // thư viện icon lucide-react

export default function ScrollButtons() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-2 z-50">
      <button
        onClick={scrollToTop}
        className="p-3 rounded-full !bg-black text-white shadow-lg hover:bg-indigo-700 transition"
        title="Lên đầu trang"
      >
        <ChevronUp size={20} />
      </button>
      <button
        onClick={scrollToBottom}
        className="p-3 rounded-full !bg-black text-white shadow-lg hover:bg-indigo-700 transition"
        title="Xuống cuối trang"
      >
        <ChevronDown size={20} />
      </button>
    </div>
  );
}
