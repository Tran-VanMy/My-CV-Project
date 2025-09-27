import React from "react";

export default function Preview_Summary({ data, nameSection }) {
    return (
        <>
            <h4 className="font-semibold uppercase text-sm mb-2">{nameSection}</h4>
            <div className="text-sm">{data.summary}</div>
        </>
    );
}
