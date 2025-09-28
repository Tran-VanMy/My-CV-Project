import React, { useState } from "react";

export default function Section({ data, setData, field, nameSection }) {
    const [newItem, setNewItem] = useState("");

    function addItem() {
        const nameItem = newItem.trim();
        if (!nameItem) return;
        const id = Date.now();
        setData((p) => ({
            ...p,
            [field]: [...(p[field] || []), { id, name: nameItem }],
        }));
        setNewItem("");
    }

    function removeItem(id) {
        setData((p) => ({
            ...p,
            [field]: (p[field] || []).filter((s) => s.id !== id),
        }));
    }

    return (
        <div className="pb-6">
            <div className="bg-white p-5 rounded-xl shadow-md border">
                {/* Tiêu đề */}
                <h3 className="font-semibold mb-3">
                    {nameSection}
                </h3>

                {/* Input thêm mới */}
                <div className="flex flex-col sm:flex-row gap-2">
                    <input
                        className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                        placeholder={`Thêm ${nameSection}`}
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addItem()}
                    />
                    <button
                        className="px-4 py-2 !bg-black text-white rounded-lg transition text-sm w-full sm:w-auto"
                        onClick={addItem}
                    >
                        Thêm
                    </button>
                </div>


                {/* Danh sách item */}
                <div className="mt-4 flex flex-col gap-2">
                    {(data[field] || []).map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center gap-2 px-3 py-1 rounded bg-gray-100 border"
                        >
                            <span className="truncate">{item.name}</span>
                            <button
                                className="text-red-500 hover:text-red-700 transition"
                                onClick={() => removeItem(item.id)}
                                aria-label="Xóa mục"
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
