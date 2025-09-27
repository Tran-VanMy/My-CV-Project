import React, { useState } from "react";

export default function Experience({ data, setData, field, nameSection }) {
  const [newRole, setNewRole] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [newFrom, setNewFrom] = useState("");
  const [newTo, setNewTo] = useState("");
  const [newDescription, setNewDescription] = useState("");

  function addItem() {
    const role = newRole.trim();
    const company = newCompany.trim();
    const from = newFrom.trim();
    const to = newTo.trim();
    const description = newDescription.trim();

    if ((!role || !company) && (!from || !to)) return;

    const id = Date.now();
    setData((p) => ({
      ...p,
      [field]: [
        ...(data[field] || []),
        { id, role, company, from, to, description },
      ],
    }));

    setNewRole("");
    setNewCompany("");
    setNewFrom("");
    setNewTo("");
    setNewDescription("");
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
            placeholder="Chức Vụ"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
          />
          <input
            className="w-full border px-2 py-1 rounded"
            placeholder="Công Ty"
            value={newCompany}
            onChange={(e) => setNewCompany(e.target.value)}
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
          <textarea
            className="w-full border px-2 py-1 rounded resize-none"
            rows={3}
            placeholder="Mô tả công việc / thành tựu"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
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
                  <strong>{item.role}</strong> - {item.company} <br />
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
