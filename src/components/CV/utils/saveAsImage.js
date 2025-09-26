import { toPng } from "html-to-image";
import { inlineImagesInNode } from "./imgaeHelpers";

export async function saveAsImage(previewRef, profileName) {
  if (!previewRef.current) {
    alert("Không tìm thấy vùng preview để xuất ảnh.");
    return;
  }

  try {
    const scale = 2;
    const node = previewRef.current;

    // Clone để không ảnh hưởng giao diện đang hiển thị cho user.
    const clone = node.cloneNode(true);
    clone.style.boxSizing = "border-box";
    clone.style.width = node.offsetWidth + "px";
    clone.style.backgroundColor = "white";

    // Clone rồi đặt “ẩn” bên ngoài màn hình (left: -10000px)
    // Sau đó, chụp clone thay vì chụp bản thật
    const wrapper = document.createElement("div");
    wrapper.style.position = "fixed";
    wrapper.style.left = "-10000px";
    wrapper.style.top = "0";
    wrapper.style.zIndex = "-100000";
    wrapper.appendChild(clone);
    document.body.appendChild(wrapper);

    // Inline toàn bộ ảnh trong clone
    // Chờ 50ms để browser kịp render.
    await inlineImagesInNode(clone);
    await new Promise((r) => setTimeout(r, 50));


    // tăng độ phân giải (ảnh nét hơn)
    // scale = 2 → tăng độ phân giải (ảnh nét hơn).
    const param = {
      backgroundColor: "white",
      width: clone.offsetWidth * scale,
      height: clone.offsetHeight * scale,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        width: clone.offsetWidth + "px",
        height: clone.offsetHeight + "px",
      },
    };

    // toPng(clone, param) → trả về chuỗi Base64 PNG
    const dataUrl = await toPng(clone, param);

    // Tải file về
    const link = document.createElement("a");
    link.download = `${(profileName || "my-cv").replace(/\s+/g, "-")}.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    document.body.removeChild(wrapper);
  } catch (err) {
    console.error("saveAsImage error:", err);
    let msg = "Lưu ảnh thất bại — kiểm tra console để biết lỗi.";
    if (err && err.message) msg += "\n" + err.message;
    else if (err && err.type) msg += "\nError event type: " + err.type;
    alert(msg);
  }
}
