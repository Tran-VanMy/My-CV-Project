import React from "react";

export default function Preview_Experiences({ data, field, nameSection }) {
    return (
        <>
            <h4 className="font-semibold uppercase text-sm mb-2">{nameSection}</h4>
            {(data[field] || []).length === 0 && (
                <div className="text-sm opacity-60">Chưa có kinh nghiệm</div>
            )}
            {(data[field] || []).map((e) => (
                <div
                    key={e.id}
                    className="mb-3 border border-b-cyan-700 pl-3"
                >
                    <div className="font-semibold text-gray-800">
                        {e.role} <span className="text-gray-600">— {e.company}</span>
                    </div>
                    <div className="text-xs text-gray-500 italic">
                        {e.from} → {e.to}
                    </div>
                    <div className="text-sm text-gray-700 mt-1 leading-relaxed whitespace-pre-line">
                        {e.description}
                    </div>
                </div>
            ))}
        </>
    )
}