import React from "react";

export default function Preview_Summary({ data }) {
    return (
        <>
            <h4 className="font-semibold uppercase text-sm mb-2">Tóm tắt</h4>
            <div className="text-sm">{data.summary}</div>
        </>
    );
}
