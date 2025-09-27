import React, { useState } from "react";

export default function Summary({ data, setData }) {
    return (
        <div className="pb-4">
            <div className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold mb-2">Tóm tắt / Mục tiêu</h3>
                <textarea
                    className="w-full textarea"
                    rows={4}
                    value={data.summary}
                    onChange={(e) => setData((p) => ({ ...p, summary: e.target.value }))}
                />
            </div>
        </div>
    );
}
