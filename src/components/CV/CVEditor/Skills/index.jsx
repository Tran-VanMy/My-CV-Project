import React, { useState } from "react";

export default function Skills({ data, setData }) {
    const [newSkill, setNewSkill] = useState("");

    function addSkill() {
        const v = newSkill.trim();
        if (!v) return;
        const id = Date.now();
        setData((p) => ({ ...p, skills: [...p.skills, { id, name: v }] }));
        setNewSkill("");
    }

    function removeSkill(id) {
        setData((p) => ({ ...p, skills: p.skills.filter((s) => s.id !== id) }));
    }

    return (
        <div className="pb-4">
            <div className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold mb-2">Kỹ năng</h3>
                <div className="flex gap-2">
                    <input
                        className="flex-1 input"
                        placeholder="Thêm kỹ năng"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addSkill()}
                    />
                    <button className="btn" onClick={addSkill}>
                        Thêm
                    </button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                    {data.skills.map((s) => (
                        <div
                            key={s.id}
                            className="flex items-center gap-2 px-3 py-1 rounded bg-gray-100 border"
                        >
                            <span>{s.name}</span>
                            <button className="text-sm" onClick={() => removeSkill(s.id)}>
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
