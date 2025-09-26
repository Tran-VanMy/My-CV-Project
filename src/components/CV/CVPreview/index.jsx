import React from "react";

export default function CVPreview({ data, previewRef }) {
  return (
    <div className="bg-white p-6 rounded shadow overflow-auto">
      <div
        ref={previewRef}
        className="mx-auto bg-white text-gray-800"
        style={{ width: 800, padding: 24 }}
      >
        {/* Header */}
        <div className="w-full bg-indigo-600 text-white rounded-t p-4 flex gap-4 items-center">
          <img
            src={data.profile.avatar}
            alt="avatar"
            className="w-24 h-24 rounded-full object-cover border-2 border-white"
          />
          <div>
            <h1 className="text-2xl font-bold">{data.profile.name}</h1>
            <div className="text-sm opacity-90">{data.profile.title}</div>
            <div className="mt-2 text-sm opacity-90">
              {data.profile.email} • {data.profile.phone}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="col-span-1">
            <section className="mb-4">
              <h4 className="font-semibold uppercase text-sm mb-2">Kỹ năng</h4>
              <ul className="space-y-1">
                {data.skills.map((s) => (
                  <li key={s.id} className="text-sm">
                    • {s.name}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-4">
              <h4 className="font-semibold uppercase text-sm mb-2">Liên hệ</h4>
              <div className="text-sm">{data.profile.location}</div>
              <div className="text-sm">{data.profile.website}</div>
              <div className="text-sm">{data.profile.github}</div>
              <div className="text-sm">{data.profile.linkedin}</div>
            </section>
          </div>

          <div className="col-span-2">
            <section className="mb-4">
              <h4 className="font-semibold uppercase text-sm mb-2">Tóm tắt</h4>
              <div className="text-sm">{data.summary}</div>
            </section>

            <section className="mb-4">
              <h4 className="font-semibold uppercase text-sm mb-2">Kinh nghiệm</h4>
              {data.experiences.length === 0 && (
                <div className="text-sm opacity-60">Chưa có kinh nghiệm</div>
              )}
              {data.experiences.map((e) => (
                <div key={e.id} className="mb-2">
                  <div className="font-semibold">
                    {e.role} — {e.company}
                  </div>
                  <div className="text-sm opacity-80">
                    {e.from} — {e.to}
                  </div>
                  <div className="text-sm mt-1">{e.description}</div>
                </div>
              ))}
            </section>

            <section className="mb-4">
              <h4 className="font-semibold uppercase text-sm mb-2">Dự án</h4>
              {data.projects.length === 0 && (
                <div className="text-sm opacity-60">Chưa có dự án</div>
              )}
              {data.projects.map((p) => (
                <div key={p.id} className="mb-2">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm">{p.description}</div>
                  {p.link && <div className="text-sm opacity-80">{p.link}</div>}
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
