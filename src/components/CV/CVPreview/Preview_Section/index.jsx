import React from "react";

export default function Preview_Section({ data, field, nameSection }) {
  return (
   <>
      <h4 className="font-semibold uppercase text-sm mb-2 pb-1">
        {nameSection}
      </h4>
      <ul className="space-y-2">
        {(data[field] || []).map((s) => (
          <li
            key={s.id}
            className="px-3 py-2 text-sm bg-gray-50 text-gray-700 rounded-md border border-gray-200 shadow-sm"
          >
            {s.name}
          </li>
        ))}
      </ul>
    </>
  );
}
