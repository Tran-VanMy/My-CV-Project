import React from "react";

export default function Preview_Experiences({ data }) {
    return (
        <>
            <h4 className="font-semibold uppercase text-sm mb-2">Kinh nghiệm</h4>
            {data.experiences.length === 0 && (
                <div className="text-sm opacity-60">Chưa có kinh nghiệm</div>
            )}
            {data.experiences.map((e) => (
                <div key={e.id} className="mb-2">
                    <div className="font-semibold">
                        {e.role} — {e.company}
                    </div>
                    <div className="text-sm opacity-80">
                        {e.from} — {e.to}
                    </div>
                    <div className="text-sm mt-1">{e.description}</div>
                </div>
            ))}
        </>
    )
}