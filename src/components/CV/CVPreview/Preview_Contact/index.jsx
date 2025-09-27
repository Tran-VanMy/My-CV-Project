import React from "react";

export default function Preview_Contact({ data }) {
    return (
        <>
            <h4 className="font-semibold uppercase text-sm mb-2">Liên hệ</h4>
            <div className="text-sm">{data.profile.location}</div>
            <div className="text-sm">{data.profile.website}</div>
            <div className="text-sm">{data.profile.github}</div>
            <div className="text-sm">{data.profile.linkedin}</div>
        </>
    )
}