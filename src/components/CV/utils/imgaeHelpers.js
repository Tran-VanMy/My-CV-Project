// FileReader đọc file/binary (ở đây là blob) thành chuỗi Base64 dạng data:image/png;base64,...
export function blobToDataURL(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

// Lấy tất cả <img> trong vùng CV.
// Nếu ảnh chưa ở dạng Base64 → tải về → chuyển thành Base64 → thay thế src.
// Nếu không tải được → thử dùng crossorigin="anonymous".
export async function inlineImagesInNode(root) {
  const imgs = Array.from(root.querySelectorAll("img"));
  await Promise.all(
    imgs.map(async (img) => {
      try {
        if (!img.src) return;
        if (img.src.startsWith("data:")) return;

        const res = await fetch(img.src, { mode: "cors" });
        if (!res.ok) throw new Error(`fetch failed: ${res.status}`);
        const blob = await res.blob();
        const dataUrl = await blobToDataURL(blob);
        img.src = dataUrl;
      } catch (e) {
        try {
          img.setAttribute("crossorigin", "anonymous");
          await new Promise((resolve, reject) => {
            if (img.complete) return resolve();
            img.onload = resolve;
            img.onerror = reject;
          });
        } catch (ee) {
          console.warn("Could not inline image", img.src, ee);
        }
      }
    })
  );
}
