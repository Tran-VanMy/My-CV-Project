import React from "react";

export default function Preview_Skills({ data }) {
  return (
    <>
      <h4 className="font-semibold uppercase text-sm mb-2">Kỹ năng</h4>
      <ul className="space-y-1">
        {data.skills.map((s) => (
          <li key={s.id} className="text-sm">
            • {s.name}
          </li>
        ))}
      </ul>
    </>
  );
}
