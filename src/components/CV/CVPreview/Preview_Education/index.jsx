import React from "react";

export default function Preview_Education({ data, field, nameSection }) {
  return (
    <>
      <h4 className="font-semibold uppercase text-sm mb-2">{nameSection}</h4>
      {(data[field] || []).length === 0 && (
        <div className="text-sm opacity-60">Chưa có thông tin học vấn</div>
      )}
      {(data[field] || []).map((edu) => (
        <div
          key={edu.id}
          className="mb-3 border-l-4 border-emerald-500 pl-3"
        >
          <div className="font-semibold text-gray-800">
            {edu.degree} <span className="text-gray-600">— {edu.school}</span>
          </div>
          <div className="text-xs text-gray-500 italic">
            {edu.from} → {edu.to}
          </div>
          {edu.gpa && (
            <div className="text-sm text-gray-700 mt-1">GPA: {edu.gpa}</div>
          )}
        </div>
      ))}
    </>
  );
}
