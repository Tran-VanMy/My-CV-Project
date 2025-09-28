import React, { useState } from "react";

export default function Contact({ data, setData, field, nameSection }) {
  const [newLocation, setNewLocation] = useState("");
  const [newWebsite, setNewWebsite] = useState("");
  const [newGithub, setNewGithub] = useState("");
  const [newLinkedin, setNewLinkedin] = useState("");

  function addSingleItem(type, value) {
    const text = value.trim();
    if (!text) return;
    const id = Date.now();

    setData((p) => ({
      ...p,
      [field]: [
        ...(data[field] || []),
        { id, [type]: text }, // chỉ thêm field tương ứng
      ],
    }));

    // reset input tương ứng
    if (type === "location") setNewLocation("");
    if (type === "website") setNewWebsite("");
    if (type === "github") setNewGithub("");
    if (type === "linkedin") setNewLinkedin("");
  }

  function removeItem(id) {
    setData((p) => ({
      ...p,
      [field]: (data[field] || []).filter((s) => s.id !== id),
    }));
  }

  return (
    <div className="pb-4">
      <div className="bg-white p-5 rounded-xl shadow-md border">
        <h3 className="font-semibold mb-2">{nameSection}</h3>

        <div className="flex gap-2 mb-2">
          <input
            className="flex-1 min-w-0 border px-2 py-1 rounded"
            placeholder="Location"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
          />
          <button
            className="flex-shrink-0 px-3 py-1 rounded"
            onClick={() => addSingleItem("location", newLocation)}
          >
            +
          </button>
        </div>

        <div className="flex gap-2 mb-2">
          <input
            className="flex-1 min-w-0 border px-2 py-1 rounded"
            placeholder="Website"
            value={newWebsite}
            onChange={(e) => setNewWebsite(e.target.value)}
          />
          <button
            className="flex-shrink-0 px-3 py-1 rounded"
            onClick={() => addSingleItem("website", newWebsite)}
          >
            +
          </button>
        </div>

        <div className="flex gap-2 mb-2">
          <input
            className="flex-1 min-w-0 border px-2 py-1 rounded"
            placeholder="Github"
            value={newGithub}
            onChange={(e) => setNewGithub(e.target.value)}
          />
          <button
            className="flex-shrink-0 px-3 py-1 rounded"
            onClick={() => addSingleItem("github", newGithub)}
          >
            +
          </button>
        </div>

        <div className="flex gap-2 mb-2">
          <input
            className="flex-1 min-w-0 border px-2 py-1 rounded"
            placeholder="LinkedIn"
            value={newLinkedin}
            onChange={(e) => setNewLinkedin(e.target.value)}
          />
          <button
            className="flex-shrink-0 px-3 py-1 rounded"
            onClick={() => addSingleItem("linkedin", newLinkedin)}
          >
            +
          </button>
        </div>

        {/* Hiển thị danh sách */}
        <div className="mt-3 flex flex-col gap-2">
          {(data[field] || []).map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center gap-2 px-3 py-1 rounded bg-gray-100 border"
            >
              <span>
                {item.location && `📍 ${item.location}`}
                {item.website && ` 🌐 ${item.website}`}
                {item.github && ` 🐙 ${item.github}`}
                {item.linkedin && ` 🔗 ${item.linkedin}`}
              </span>
              <button
                className="text-sm text-red-500"
                onClick={() => removeItem(item.id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
