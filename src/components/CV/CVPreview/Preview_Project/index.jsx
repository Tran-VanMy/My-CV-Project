import React from "react";

export default function Preview_Project({ data }) {
    return (
        <>
            <h4 className="font-semibold uppercase text-sm mb-2">Dự án</h4>
            {data.projects.length === 0 && (
                <div className="text-sm opacity-60">Chưa có dự án</div>
            )}
            {data.projects.map((p) => (
                <div key={p.id} className="mb-2">
                    <div className="font-semibold">{p.title}</div>
                    <div className="text-sm">{p.description}</div>
                    {p.link && <div className="text-sm opacity-80">{p.link}</div>}
                </div>
            ))}
        </>
    )
}