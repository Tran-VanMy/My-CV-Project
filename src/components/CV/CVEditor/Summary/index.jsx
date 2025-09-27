import React from "react";

export default function Summary({ data, setData, nameSection }) {
    return (
        <div className="pb-6">
            <div className="bg-white p-5 rounded-xl shadow-md border">
                {/* Tiêu đề */}
                <h3 className="font-semibold text-lg mb-3 text-gray-800">
                    {nameSection}
                </h3>

                {/* Textarea */}
                <textarea
                    spellcheck="false"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 
                               focus:outline-none focus:ring-2 focus:ring-blue-400 
                               text-sm resize-none"
                    rows={5}
                    placeholder="Mô tả ngắn gọn về mục tiêu nghề nghiệp hoặc tóm tắt bản thân..."
                    value={data.summary}
                    onChange={(e) =>
                        setData((p) => ({ ...p, summary: e.target.value }))
                    }
                />
            </div>
        </div>
    );
}
