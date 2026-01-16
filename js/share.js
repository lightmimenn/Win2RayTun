/* share.js — экспорт/импорт подписок (код = base64(JSON)) */

const Share = (() => {
  const PREFIX = "W2RT:"; // Win2RayTun

  function safeB64Encode(str) {
    const bytes = new TextEncoder().encode(str);
    let bin = "";
    bytes.forEach(b => bin += String.fromCharCode(b));
    return btoa(bin);
  }

  function safeB64Decode(b64) {
    const bin = atob(b64);
    const bytes = Uint8Array.from(bin, c => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }

  function exportSubscription(sub) {
    const payload = {
      v: 2,
      t: "subscription",
      id: sub.id,
      name: sub.name,
      icon: sub.icon || "📦",
      servers: sub.servers.map(s => ({
        id: s.id,
        name: s.name,
        flagKey: s.flagKey,
        notes: s.notes || ""
      }))
    };
    const json = JSON.stringify(payload);
    return PREFIX + safeB64Encode(json);
  }

  function importSubscription(code) {
    if (!code || typeof code !== "string") throw new Error("Пустой код");
    const trimmed = code.trim();
    if (!trimmed.startsWith(PREFIX)) throw new Error("Неверный формат кода");

    const b64 = trimmed.slice(PREFIX.length);
    const json = safeB64Decode(b64);
    const payload = JSON.parse(json);

    const v = payload?.v;
    if (!payload || (v !== 1 && v !== 2) || payload.t !== "subscription") {
      throw new Error("Неподдерживаемый формат");
    }
    if (!payload.name || !Array.isArray(payload.servers)) {
      throw new Error("Повреждённые данные");
    }

    return {
      name: String(payload.name).slice(0, 32),
      icon: String(payload.icon || "📦").slice(0, 4),
      servers: payload.servers.slice(0, 100).map(s => ({
        name: String(s.name || "Server").slice(0, 40),
        flagKey: String(s.flagKey || "EU"),
        notes: String(s.notes || "").slice(0, 5000)
      }))
    };
  }

  return { exportSubscription, importSubscription };
})();
