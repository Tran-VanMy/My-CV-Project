import React, { useState } from "react";

export default function Project({ data, setData, field, nameSection }) {
    const [newTitle, setNewTitle] = useState("");
    const [newRole, setNewRole] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newLink, setNewLink] = useState("");

    function addItem() {
        const title = newTitle.trim();
        const role = newRole.trim();
        const description = newDescription.trim();
        const link = newLink.trim();

        if (!title || !role) return;

        const id = Date.now();
        setData((p) => ({
            ...p,
            [field]: [
                ...(data[field] || []),
                { id, title, role, description, link },
            ],
        }));

        setNewTitle("");
        setNewRole("");
        setNewDescription("");
        setNewLink("");
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
                        placeholder="Tên Dự Án"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <input
                        className="w-full border px-2 py-1 rounded"
                        placeholder="Vai Trò (Role)"
                        value={newRole}
                        onChange={(e) => setNewRole(e.target.value)}
                    />
                    <textarea
                        className="w-full border px-2 py-1 rounded resize-none"
                        rows={3}
                        placeholder="Mô tả ngắn (Short description)"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                    />
                    <input
                        className="w-full border px-2 py-1 rounded"
                        placeholder="Link GitHub / Demo"
                        value={newLink}
                        onChange={(e) => setNewLink(e.target.value)}
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
                                    <strong>{item.title}</strong> ({item.role})
                                    {item.link && (
                                        <div>
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline text-xs"
                                            >
                                                {item.link}
                                            </a>
                                        </div>
                                    )}
                                </span>
                                <button
                                    className="text-sm text-red-500 hover:text-red-700"
                                    onClick={() => removeItem(item.id)}
                                >
                                    ✕
                                </button>
                            </div>
                            {item.description && (
                                <p className="text-sm text-gray-700 mt-1 leading-snug">
                                    {item.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
