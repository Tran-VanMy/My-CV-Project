import React from "react";

export default function Preview_Profile({ data }) {
    return (
        <>
            <img
                src={data.profile.avatar}
                alt="avatar"
                className="w-24 h-24 rounded-full object-cover border-2 border-white"
            />
            <div>
                <h1 className="text-2xl font-bold">{data.profile.name}</h1>
                <div className="text-sm pt-4 opacity-90">{data.profile.title}</div>
                <div className="mt-2 text-sm opacity-90">
                    {data.profile.email} • {data.profile.phone}
                </div>
            </div>
        </>
    );
}
