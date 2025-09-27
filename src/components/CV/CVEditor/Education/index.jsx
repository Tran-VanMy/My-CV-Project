import React, { useState } from "react";

export default function Education({ data, setData, field, nameSection }) {
    const [newDegree, setNewDegree] = useState("");
    const [newSchool, setNewSchool] = useState("");
    const [newFrom, setNewFrom] = useState("");
    const [newTo, setNewTo] = useState("");
    const [newGpa, setNewGpa] = useState("");

    function addItem() {
        const degree = newDegree.trim();
        const school = newSchool.trim();
        const from = newFrom.trim();
        const to = newTo.trim();
        const gpa = newGpa.trim();

        if (!degree || !school) return;

        const id = Date.now();
        setData((p) => ({
            ...p,
            [field]: [
                ...(data[field] || []),
                { id, degree, school, from, to, gpa },
            ],
        }));

        setNewDegree("");
        setNewSchool("");
        setNewFrom("");
        setNewTo("");
        setNewGpa("");
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
                <h3 className="font-semibold mb-3">{nameSection}</h3>

                {/* Form nhập liệu */}
                <div className="flex flex-col gap-2">
                    <input
                        className="w-full border px-2 py-1 rounded"
                        placeholder="Bằng cấp (Degree)"
                        value={newDegree}
                        onChange={(e) => setNewDegree(e.target.value)}
                    />
                    <input
                        className="w-full border px-2 py-1 rounded"
                        placeholder="Trường học (School)"
                        value={newSchool}
                        onChange={(e) => setNewSchool(e.target.value)}
                    />
                    <div className="flex gap-2">
                        <input
                            className="w-1/2 border px-2 py-1 rounded"
                            placeholder="From"
                            value={newFrom}
                            onChange={(e) => setNewFrom(e.target.value)}
                        />
                        <input
                            className="w-1/2 border px-2 py-1 rounded"
                            placeholder="To"
                            value={newTo}
                            onChange={(e) => setNewTo(e.target.value)}
                        />
                    </div>
                    <input
                        className="w-full border px-2 py-1 rounded"
                        placeholder="GPA (nếu có)"
                        value={newGpa}
                        onChange={(e) => setNewGpa(e.target.value)}
                    />
                    <button
                        className="btn w-full !bg-black text-white py-1 rounded"
                        onClick={addItem}
                    >
                        Thêm
                    </button>
                </div>

                {/* Danh sách đã thêm */}
                <div className="mt-4 flex flex-col gap-2">
                    {(data[field] || []).map((item) => (
                        <div
                            key={item.id}
                            className="px-3 py-2 rounded bg-gray-100 border"
                        >
                            <div className="flex justify-between items-start">
                                <span className="text-sm">
                                    <strong>{item.degree}</strong> - {item.school} <br />
                                    <span className="text-gray-600">
                                        {item.from} → {item.to}
                                    </span>
                                </span>
                                <button
                                    className="text-sm text-red-500 hover:text-red-700"
                                    onClick={() => removeItem(item.id)}
                                >
                                    ✕
                                </button>
                            </div>
                            {item.gpa && (
                                <p className="text-sm text-gray-700 mt-1 leading-snug">
                                    GPA: {item.gpa}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}