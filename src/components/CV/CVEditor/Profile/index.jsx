import React, { useState } from "react";

export default function Profile({ data, setData }) {

    function handleProfileChange(field, value) {
        setData((p) => ({ ...p, profile: { ...p.profile, [field]: value } }));
    }

    function handleAvatarChange(e) {
        const f = e?.target?.files?.[0]; // lấy file đầu tiên mà user chọn (ảnh)
        if (!f) return; // nếu không có file thì thoát
        const reader = new FileReader();  // tạo đối tượng FileReader để đọc file
        reader.onload = (ev) => handleProfileChange("avatar", ev.target.result); // khi đọc xong file, ta lấy kết quả ev.target.result chính là chuỗi Base64 đó
        reader.readAsDataURL(f); // chuyển file ảnh thành một chuỗi Base64
    }

    return (
        <div className="pb-4">
            <div className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold mb-2">Thông tin cá nhân</h3>
                <div className="flex items-center gap-3">
                    <img
                        src={data.profile.avatar}
                        alt="avatar"
                        className="w-20 h-20 object-cover rounded-full border"
                    />
                    <div className="flex-1">
                        <label className="block text-sm">Tải ảnh:</label>
                        <input type="file" accept="image/*" onChange={handleAvatarChange} />
                    </div>
                </div>
                <div className="mt-3 space-y-2">
                    <input
                        className="w-full input"
                        placeholder="Họ và tên"
                        value={data.profile.name}
                        onChange={(e) => handleProfileChange("name", e.target.value)}
                    />
                    <input
                        className="w-full input"
                        placeholder="Chức danh"
                        value={data.profile.title}
                        onChange={(e) => handleProfileChange("title", e.target.value)}
                    />
                    <input
                        className="w-full input"
                        placeholder="Email"
                        value={data.profile.email}
                        onChange={(e) => handleProfileChange("email", e.target.value)}
                    />
                    <input
                        className="w-full input"
                        placeholder="Số điện thoại"
                        value={data.profile.phone}
                        onChange={(e) => handleProfileChange("phone", e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}
