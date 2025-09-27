import React from "react";

export default function Preview_Project({ data, field, nameSection }) {
    return (
        <>
            <h4 className="font-semibold uppercase text-sm mb-2">{nameSection}</h4>
            {(data[field] || []).length === 0 && (
                <div className="text-sm opacity-60">Chưa có dự án</div>
            )}
            {(data[field] || []).map((p) => (
                <div
                    key={p.id}
                    className="mb-3 border-l-4 border-indigo-500 pl-3"
                >
                    <div className="font-semibold text-gray-800">
                        {p.title} <span className="text-gray-600">({p.role})</span>
                    </div>
                    {p.description && (
                        <div className="text-sm text-gray-700 mt-1 leading-relaxed">
                            {p.description}
                        </div>
                    )}
                    {p.link && (
                        <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 underline mt-1 inline-block"
                        >
                            {p.link}
                        </a>
                    )}
                </div>
            ))}
        </>
    );
}
