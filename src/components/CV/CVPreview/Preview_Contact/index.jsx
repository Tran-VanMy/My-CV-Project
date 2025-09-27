import React from "react";

export default function Preview_Contact({ data, field, nameSection }) {
    const contacts = data[field] || [];

    return (
        <div>
            <h4 className="font-semibold uppercase text-sm mb-2">{nameSection}</h4>
            <div className="space-y-1 text-sm">
                {contacts.map((item) => (
                    <div key={item.id} className="flex items-center gap-2">
                        {item.location && (
                            <span>
                                📍 <span className="break-all">{item.location}</span>
                            </span>
                        )}
                        {item.website && (
                            <span>
                                🌐 <span className="break-all">{item.website}</span>
                            </span>
                        )}
                        {item.github && (
                            <span>
                                🐙 <span className="break-all">{item.github}</span>
                            </span>
                        )}
                        {item.linkedin && (
                            <span>
                                🔗 <span className="break-all">{item.linkedin}</span>
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
