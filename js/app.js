/* app.js — UI + логика симуляции */

const FLAGS = [
  { key: "EU", label: "Европейский союз" },
  { key: "US", label: "США" },

  { key: "DE", label: "Германия" },
  { key: "FR", label: "Франция" },
  { key: "NL", label: "Нидерланды" },
  { key: "PL", label: "Польша" },
  { key: "SE", label: "Швеция" },
  { key: "NO", label: "Норвегия" },
  { key: "FI", label: "Финляндия" },
  { key: "DK", label: "Дания" },
  { key: "IT", label: "Италия" },
  { key: "ES", label: "Испания" },
  { key: "PT", label: "Португалия" },
  { key: "GB", label: "Великобритания" },
  { key: "CH", label: "Швейцария" },
  { key: "AT", label: "Австрия" },
  { key: "CZ", label: "Чехия" },
  { key: "IE", label: "Ирландия" },
];

const SUB_ICONS = ["📦","⭐","🛰️","🌐","⚡","🧩","🧪","🛡️","🔥","💎","🎯","🗂️","🧠","🧿","🎛️"];

function flagLabelByKey(key) {
  return (FLAGS.find(f => f.key === key) || FLAGS[0]).label;
}

/* ---- встроенные SVG флаги (без внешних картинок) ---- */
function svgWrap(inner) {
  return `<svg viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="flag">
    <rect x="0" y="0" width="28" height="20" rx="3" fill="#111"/>
    ${inner}
  </svg>`;
}

function flagSVG(key) {
  switch (key) {
    case "DE":
      return svgWrap(`
        <rect width="28" height="20" rx="3" fill="#000"/>
        <rect y="6.66" width="28" height="6.67" fill="#DD0000"/>
        <rect y="13.33" width="28" height="6.67" fill="#FFCE00"/>`);
    case "FR":
      return svgWrap(`
        <rect width="28" height="20" rx="3" fill="#fff"/>
        <rect width="9.33" height="20" rx="3" fill="#0055A4"/>
        <rect x="18.67" width="9.33" height="20" rx="3" fill="#EF4135"/>`);
    case "NL":
      return svgWrap(`
        <rect width="28" height="20" rx="3" fill="#21468B"/>
        <rect width="28" height="13.33" rx="3" fill="#fff"/>
        <rect width="28" height="6.66" rx="3" fill="#AE1C28"/>`);
    case "PL":
      return svgWrap(`
        <rect width="28" height="20" rx="3" fill="#DC143C"/>
        <rect width="28" height="10" rx="3" fill="#fff"/>`);
    case "SE":
      return svgWrap(`
        <rect width="28" height="20" rx="3" fill="#006AA7"/>
        <rect x="7" width="4" height="20" fill="#FECC00"/>
        <rect y="8" width="28" height="4" fill="#FECC00"/>`);
    case "NO":
      return svgWrap(`
        <rect width="28" height="20" rx="3" fill="#BA0C2F"/>
        <rect x="7" width="6" height="20" fill="#fff"/>
        <rect y="7" width="28" height="6" fill="#fff"/>
        <rect x="8.5" width="3" height="20" fill="#00205B"/>
        <rect y="8.5" width="28" height="3" fill="#00205B"/>`);
    case "FI":
      return svgWrap(`
        <rect width="28" height="20" rx="3" fill="#fff"/>
        <rect x="7.5" width="5" height="20" fill="#003580"/>
        <rect y="7.5" width="28" height="5" fill="#003580"/>`);
    case "DK":
      return svgWrap(`
        <rect width="28" height="20" rx="3" fill="#C60C30"/>
        <rect x="8" width="3" height="20" fill="#fff"/>
        <rect y="8" width="28" height="3" fill="#fff"/>`);
    case "IT":
      return svgWrap(`
        <rect width="28" height="20" rx="3" fill="#fff"/>
        <rect width="9.33" height="20" rx="3" fill="#009246"/>
        <rect x="18.67" width="9.33" height="20" rx="3" fill="#CE2B37"/>`);
    case "ES":
      return svgWrap(`
        <rect width="28" height="20" rx="3" fill="#AA151B"/>
        <rect y="5" width="28" height="10" fill="#F1BF00"/>`);
    case "PT":
      return svgWrap(`
        <rect width="28" height="20" rx="3" fill="#FF0000"/>
        <rect width="11" height="20" rx="3" fill="#006600"/>`);
    case "GB":
      return svgWrap(`
        <rect width="28" height="20" rx="3" fill="#012169"/>
        <path d="M0 0 L28 20 M28 0 L0 20" stroke="#fff" stroke-width="4"/>
        <path d="M0 0 L28 20 M28 0 L0 20" stroke="#C8102E" stroke-width="2"/>
        <rect x="12" width="4" height="20" fill="#fff"/>
        <rect y="8" width="28" height="4" fill="#fff"/>
        <rect x="12.8" width="2.4" height="20" fill="#C8102E"/>
        <rect y="8.8" width="28" height="2.4" fill="#C8102E"/>`);
    case "CH":
      return svgWrap(`
        <rect width="28" height="20" rx="3" fill="#D52B1E"/>
        <rect x="12" y="4" width="4" height="12" fill="#fff"/>
        <rect x="8" y="8" width="12" height="4" fill="#fff"/>`);
    case "AT":
      return svgWrap(`
        <rect width="28" height="20" rx="3" fill="#ED2939"/>
        <rect y="6.66" width="28" height="6.67" fill="#fff"/>`);
    case "CZ":
      return svgWrap(`
        <rect width="28" height="20" rx="3" fill="#D7141A"/>
        <rect width="28" height="10" rx="3" fill="#fff"/>
        <path d="M0 0 L12 10 L0 20 Z" fill="#11457E"/>`);
    case "IE":
      return svgWrap(`
        <rect width="28" height="20" rx="3" fill="#fff"/>
        <rect width="9.33" height="20" rx="3" fill="#169B62"/>
        <rect x="18.67" width="9.33" height="20" rx="3" fill="#FF883E"/>`);
    case "US":
      return svgWrap(`
        <rect width="28" height="20" rx="3" fill="#B22234"/>
        ${Array.from({length:6}).map((_,i)=>`<rect y="${(i*3)+2}" width="28" height="2" fill="#fff"/>`).join("")}
        <rect width="12.5" height="9.8" rx="3" fill="#3C3B6E"/>
        ${Array.from({length:6}).map((_,i)=>`<circle cx="${2 + (i%3)*3.2}" cy="${2 + Math.floor(i/3)*3.2}" r="0.55" fill="#fff"/>`).join("")}
      `);
    case "EU":
      return svgWrap(`
        <rect width="28" height="20" rx="3" fill="#003399"/>
        ${Array.from({length:12}).map((_,i)=>{
          const a = (Math.PI*2*i)/12;
          const cx = 14 + Math.cos(a)*6;
          const cy = 10 + Math.sin(a)*6;
          return `<circle cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="0.85" fill="#FFCC00"/>`;
        }).join("")}
      `);
    default:
      // fallback “универсальный”
      return svgWrap(`<rect width="28" height="20" rx="3" fill="#2a6cff"/><rect x="6" y="6" width="16" height="8" rx="2" fill="rgba(255,255,255,.25)"/>`);
  }
}

const App = (() => {
  let data = null;
  let selected = { subId: null, serverId: null };
  let conn = { status: "disconnected", timer: null };

  const pingMap = new Map();

  const els = {
    subsList: document.getElementById("subsList"),
    pillStats: document.getElementById("pillStats"),

    selectedFlag: document.getElementById("selectedFlag"),
    selectedName: document.getElementById("selectedName"),
    selectedSub: document.getElementById("selectedSub"),
    statusValue: document.getElementById("statusValue"),
    statusHint: document.getElementById("statusHint"),
    availValue: document.getElementById("availValue"),
    pingValue: document.getElementById("pingValue"),
    subValue: document.getElementById("subValue"),
    detailsText: document.getElementById("detailsText"),

    serverNotes: document.getElementById("serverNotes"),
    notesHint: document.getElementById("notesHint"),

    btnConnect: document.getElementById("btnConnect"),
    connectText: document.getElementById("connectText"),
    connectIcon: document.getElementById("connectIcon"),
    connectNote: document.getElementById("connectNote"),

    dotConn: document.getElementById("dotConn"),
    miniConnText: document.getElementById("miniConnText"),
    miniPing: document.getElementById("miniPing"),

    btnAddSub: document.getElementById("btnAddSub"),
    btnAddServer: document.getElementById("btnAddServer"),
    btnShareOpen: document.getElementById("btnShareOpen"),
    btnImportOpen: document.getElementById("btnImportOpen"),
    btnReset: document.getElementById("btnReset"),

    modalSub: document.getElementById("modalSub"),
    subNameInput: document.getElementById("subNameInput"),
    subIconSelect: document.getElementById("subIconSelect"),
    subCreateBtn: document.getElementById("subCreateBtn"),

    modalServer: document.getElementById("modalServer"),
    serverSubSelect: document.getElementById("serverSubSelect"),
    flagSelect: document.getElementById("flagSelect"),
    serverNameInput: document.getElementById("serverNameInput"),
    serverCreateBtn: document.getElementById("serverCreateBtn"),

    modalShare: document.getElementById("modalShare"),
    shareSubSelect: document.getElementById("shareSubSelect"),
    btnGenerateShare: document.getElementById("btnGenerateShare"),
    shareCode: document.getElementById("shareCode"),
    btnCopyShare: document.getElementById("btnCopyShare"),
    copyHint: document.getElementById("copyHint"),

    modalImport: document.getElementById("modalImport"),
    importCode: document.getElementById("importCode"),
    btnDoImport: document.getElementById("btnDoImport"),

    toast: document.getElementById("toast"),
  };

  function toast(msg) {
    els.toast.textContent = msg;
    els.toast.classList.add("show");
    window.clearTimeout(els.toast._t);
    els.toast._t = window.setTimeout(() => els.toast.classList.remove("show"), 1800);
  }

  function openModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add("open");
  }
  function closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove("open");
  }

  function ensureData() {
    const loaded = Storage.load();
    if (loaded && Array.isArray(loaded.subscriptions)) {
      data = loaded;
      // миграция: если нет icon/notes — добавим
      for (const sub of data.subscriptions) {
        sub.icon = sub.icon || "📦";
        sub.servers = sub.servers || [];
        for (const s of sub.servers) {
          if (typeof s.notes !== "string") s.notes = "";
        }
      }
      Storage.save(data);
      return;
    }

    data = {
      subscriptions: [
        {
          id: Storage.uid("sub"),
          name: "My Subscription",
          icon: "📦",
          servers: [
            { id: Storage.uid("srv"), name: "Frankfurt #1", flagKey: "DE", notes: "" },
            { id: Storage.uid("srv"), name: "Amsterdam #1", flagKey: "NL", notes: "" },
          ],
        },
        {
          id: Storage.uid("sub"),
          name: "Friends",
          icon: "⭐",
          servers: [
            { id: Storage.uid("srv"), name: "Paris Edge", flagKey: "FR", notes: "" },
            { id: Storage.uid("srv"), name: "EU Mix", flagKey: "EU", notes: "" },
          ],
        },
        {
          id: Storage.uid("sub"),
          name: "Test",
          icon: "🧪",
          servers: [
            { id: Storage.uid("srv"), name: "New York", flagKey: "US", notes: "" },
          ],
        },
      ],
    };
    Storage.save(data);
  }

  function persist() {
    Storage.save(data);
  }

  function getSub(subId) {
    return data.subscriptions.find(s => s.id === subId) || null;
  }
  function getServer(subId, serverId) {
    const sub = getSub(subId);
    if (!sub) return null;
    return sub.servers.find(s => s.id === serverId) || null;
  }

  function setSelected(subId, serverId) {
    selected.subId = subId;
    selected.serverId = serverId;
    render();
  }

  function randomPingState() {
    const unavailable = Math.random() < 0.18;
    if (unavailable) return { available: false, ping: null };
    const ping = Math.floor(18 + Math.random() * 222);
    return { available: true, ping };
  }

  function initPingEntries() {
    for (const sub of data.subscriptions) {
      for (const srv of sub.servers) {
        if (!pingMap.has(srv.id)) pingMap.set(srv.id, randomPingState());
      }
    }
  }

  function tickPing() {
    for (const [serverId, st] of pingMap.entries()) {
      const flip = Math.random() < 0.12;
      if (flip) {
        const nowUnavailable = Math.random() < 0.22;
        pingMap.set(serverId, nowUnavailable ? { available: false, ping: null } : { available: true, ping: Math.floor(18 + Math.random() * 222) });
        continue;
      }
      if (st.available) {
        const drift = Math.floor((Math.random() - 0.5) * 18);
        let p = (st.ping ?? 80) + drift;
        p = Math.max(10, Math.min(320, p));
        pingMap.set(serverId, { available: true, ping: p });
      }
    }

    const srv = getServer(selected.subId, selected.serverId);
    if (srv) {
      const st = pingMap.get(srv.id);
      if (st && !st.available && conn.status !== "disconnected") {
        disconnect("Сервер стал недоступен");
      }
    }

    renderMiniPing();
    renderRightPanel();
    renderLeftListOnly();
  }

  function connect() {
    const srv = getServer(selected.subId, selected.serverId);
    if (!srv) return;

    const st = pingMap.get(srv.id);
    if (!st || !st.available) {
      toast("Сервер недоступен (n/a)");
      return;
    }

    if (conn.status === "connected") {
      disconnect();
      return;
    }
    if (conn.status === "connecting") return;

    conn.status = "connecting";
    render();

    window.clearTimeout(conn.timer);
    conn.timer = window.setTimeout(() => {
      const st2 = pingMap.get(srv.id);
      if (!st2 || !st2.available) {
        conn.status = "disconnected";
        toast("Не удалось подключиться (n/a)");
        render();
        return;
      }
      conn.status = "connected";
      toast("Connected");
      render();
    }, 2000);
  }

  function disconnect(reason) {
    window.clearTimeout(conn.timer);
    conn.timer = null;
    conn.status = "disconnected";
    if (reason) toast(reason);
    render();
  }

  function addSubscription(name, icon) {
    const n = (name || "").trim();
    if (!n) return toast("Введите название подписки");

    const ic = (icon || "📦").slice(0, 4);

    data.subscriptions.unshift({
      id: Storage.uid("sub"),
      name: n.slice(0, 32),
      icon: ic,
      servers: [],
    });
    persist();
    initPingEntries();
    render();
    toast("Подписка добавлена");
  }

  function setSubscriptionIcon(subId, icon) {
    const sub = getSub(subId);
    if (!sub) return;
    sub.icon = (icon || "📦").slice(0, 4);
    persist();
    renderLeftListOnly();
  }

  function addServerToSubscription(subId, serverName, flagKey) {
    const sub = getSub(subId);
    if (!sub) return toast("Выберите подписку");

    const n = (serverName || "").trim();
    if (!n) return toast("Введите название сервера");

    const srv = {
      id: Storage.uid("srv"),
      name: n.slice(0, 40),
      flagKey: flagKey || "EU",
      notes: "",
    };
    sub.servers.push(srv);
    persist();
    pingMap.set(srv.id, randomPingState());
    render();
    toast("Сервер добавлен");
  }

  function deleteServer(subId, serverId) {
    const sub = getSub(subId);
    if (!sub) return;
    const srv = sub.servers.find(s => s.id === serverId);
    if (!srv) return;

    const ok = confirm(`Удалить сервер "${srv.name}"?`);
    if (!ok) return;

    sub.servers = sub.servers.filter(s => s.id !== serverId);
    pingMap.delete(serverId);

    if (selected.serverId === serverId) {
      disconnect();
      selected.serverId = null;
    }
    persist();
    render();
    toast("Сервер удалён");
  }

  function deleteSubscription(subId) {
    const sub = getSub(subId);
    if (!sub) return;

    const ok = confirm(`Удалить подписку "${sub.name}" и все серверы внутри?`);
    if (!ok) return;

    for (const srv of sub.servers) pingMap.delete(srv.id);

    data.subscriptions = data.subscriptions.filter(s => s.id !== subId);

    if (selected.subId === subId) {
      disconnect();
      selected.subId = null;
      selected.serverId = null;
    }
    persist();
    render();
    toast("Подписка удалена");
  }

  function fillShareSelect() {
    els.shareSubSelect.innerHTML = "";
    for (const sub of data.subscriptions) {
      const opt = document.createElement("option");
      opt.value = sub.id;
      opt.textContent = `${sub.icon || "📦"} ${sub.name} (${sub.servers.length})`;
      els.shareSubSelect.appendChild(opt);
    }
  }

  function fillServerModalSelects() {
    els.serverSubSelect.innerHTML = "";
    for (const sub of data.subscriptions) {
      const opt = document.createElement("option");
      opt.value = sub.id;
      opt.textContent = `${sub.icon || "📦"} ${sub.name}`;
      els.serverSubSelect.appendChild(opt);
    }

    els.flagSelect.innerHTML = "";
    for (const f of FLAGS) {
      const opt = document.createElement("option");
      opt.value = f.key;
      opt.textContent = `${f.key} — ${f.label}`;
      els.flagSelect.appendChild(opt);
    }
  }

  function fillSubIconSelect() {
    els.subIconSelect.innerHTML = "";
    for (const ic of SUB_ICONS) {
      const opt = document.createElement("option");
      opt.value = ic;
      opt.textContent = ic;
      els.subIconSelect.appendChild(opt);
    }
    els.subIconSelect.value = "📦";
  }

  function generateShare() {
    const subId = els.shareSubSelect.value;
    const sub = getSub(subId);
    if (!sub) return toast("Подписка не найдена");
    if (sub.servers.length === 0) return toast("В подписке нет серверов");

    const code = Share.exportSubscription(sub);
    els.shareCode.value = code;
    els.copyHint.textContent = "Код сгенерирован";
    toast("Код готов");
  }

  async function copyShare() {
    const v = els.shareCode.value.trim();
    if (!v) return toast("Сначала сгенерируйте код");
    try {
      await navigator.clipboard.writeText(v);
      els.copyHint.textContent = "Скопировано";
      toast("Скопировано");
    } catch {
      els.copyHint.textContent = "Не удалось скопировать";
      toast("Не удалось скопировать");
    }
  }

  function doImport() {
    const code = els.importCode.value;
    try {
      const imported = Share.importSubscription(code);

      const newSub = {
        id: Storage.uid("sub"),
        name: imported.name,
        icon: imported.icon || "📦",
        servers: imported.servers.map(s => ({
          id: Storage.uid("srv"),
          name: s.name,
          flagKey: s.flagKey,
          notes: s.notes || "",
        })),
      };

      data.subscriptions.unshift(newSub);
      persist();
      initPingEntries();
      closeModal("modalImport");
      els.importCode.value = "";
      toast("Подписка импортирована");
      render();
    } catch (e) {
      toast(e?.message || "Ошибка импорта");
    }
  }

  function renderLeftListOnly() {
    els.subsList.innerHTML = "";

    for (const sub of data.subscriptions) {
      const block = document.createElement("div");
      block.className = "subBlock";

      const top = document.createElement("div");
      top.className = "subTop";

      const left = document.createElement("div");
      left.className = "subName";
      left.innerHTML = `
        <span class="subIcon" title="Эмодзи подписки">${escapeHtml(sub.icon || "📦")}</span>
        <span>${escapeHtml(sub.name)}</span>
      `;

      const count = document.createElement("div");
      count.className = "subCount";
      count.textContent = `${sub.servers.length}`;

      const actions = document.createElement("div");
      actions.className = "subActions";

      // быстрый сменщик эмодзи
      const editIconBtn = document.createElement("button");
      editIconBtn.className = "iconBtn";
      editIconBtn.title = "Сменить эмодзи";
      editIconBtn.textContent = "😊";
      editIconBtn.addEventListener("click", (ev) => {
        ev.stopPropagation();
        const current = sub.icon || "📦";
        const next = SUB_ICONS[(SUB_ICONS.indexOf(current) + 1 + SUB_ICONS.length) % SUB_ICONS.length];
        setSubscriptionIcon(sub.id, next);
        toast(`Эмодзи: ${next}`);
      });

      const delSubBtn = document.createElement("button");
      delSubBtn.className = "iconBtn danger";
      delSubBtn.title = "Удалить подписку";
      delSubBtn.textContent = "🗑";
      delSubBtn.addEventListener("click", (ev) => {
        ev.stopPropagation();
        deleteSubscription(sub.id);
      });

      actions.appendChild(count);
      actions.appendChild(editIconBtn);
      actions.appendChild(delSubBtn);

      top.appendChild(left);
      top.appendChild(actions);

      const serversWrap = document.createElement("div");
      serversWrap.className = "servers";

      if (sub.servers.length === 0) {
        const empty = document.createElement("div");
        empty.className = "hintBox";
        empty.style.margin = "6px 6px 10px 6px";
        empty.textContent = "Нет серверов. Добавьте сервер в эту подписку.";
        serversWrap.appendChild(empty);
      } else {
        for (const srv of sub.servers) {
          const st = pingMap.get(srv.id) || { available: true, ping: 80 };
          const pingText = st.available ? `${st.ping} ms` : "n/a";
          const pingClass = st.available ? "good" : "bad";

          const item = document.createElement("div");
          item.className = "serverItem" + ((selected.serverId === srv.id) ? " selected" : "");
          item.addEventListener("click", () => setSelected(sub.id, srv.id));

          const flag = document.createElement("div");
          flag.className = "flagBubble";
          flag.innerHTML = flagSVG(srv.flagKey);

          const mid = document.createElement("div");
          mid.innerHTML = `
            <div class="sName">${escapeHtml(srv.name)}</div>
            <div class="sMeta">
              <span class="metaPill ${pingClass}">Ping: ${pingText}</span>
              <span class="metaPill">${escapeHtml(sub.name)}</span>
            </div>
          `;

          const right = document.createElement("div");
          right.className = "sRight";

          const delSrvBtn = document.createElement("button");
          delSrvBtn.className = "smallBtn";
          delSrvBtn.title = "Удалить сервер";
          delSrvBtn.textContent = "🗑";
          delSrvBtn.addEventListener("click", (ev) => {
            ev.stopPropagation();
            deleteServer(sub.id, srv.id);
          });

          right.appendChild(delSrvBtn);

          item.appendChild(flag);
          item.appendChild(mid);
          item.appendChild(right);

          serversWrap.appendChild(item);
        }
      }

      block.appendChild(top);
      block.appendChild(serversWrap);
      els.subsList.appendChild(block);
    }
  }

  function renderRightPanel() {
    const srv = getServer(selected.subId, selected.serverId);
    const sub = getSub(selected.subId);

    if (!srv || !sub) {
      els.selectedFlag.innerHTML = "";
      els.selectedName.textContent = "Выбери сервер";
      els.selectedSub.textContent = "—";

      els.availValue.textContent = "—";
      els.pingValue.textContent = "—";
      els.subValue.textContent = "—";
      els.detailsText.textContent = "Здесь появится информация о выбранном сервере.";

      els.serverNotes.value = "";
      els.serverNotes.disabled = true;
      els.notesHint.textContent = "Сохраняется локально";

      els.btnConnect.disabled = true;
      els.connectNote.textContent = "Выберите доступный сервер слева";
      return;
    }

    const st = pingMap.get(srv.id) || { available: true, ping: 80 };
    const availText = st.available ? "Доступен" : "Недоступен";
    const pingText = st.available ? `${st.ping} ms` : "n/a";

    els.selectedFlag.innerHTML = flagSVG(srv.flagKey);
    els.selectedName.textContent = srv.name;
    els.selectedSub.textContent = `Подписка: ${sub.icon || "📦"} ${sub.name}`;

    els.availValue.textContent = availText;
    els.pingValue.textContent = pingText;
    els.subValue.textContent = sub.name;

    els.detailsText.textContent =
      `Флаг: ${srv.flagKey} — ${flagLabelByKey(srv.flagKey)}\n` +
      `Ping: ${pingText}\n` +
      `Доступность: ${availText}\n` +
      `Идентификатор: ${srv.id}`;

    els.serverNotes.disabled = false;
    els.serverNotes.value = srv.notes || "";

    const canConnect = st.available && conn.status !== "connecting";
    els.btnConnect.disabled = !canConnect && conn.status !== "connected";
    els.connectNote.textContent = st.available
      ? "Подключение имитируется 2 секунды"
      : "Сервер недоступен (n/a)";

    const btn = els.btnConnect;
    btn.classList.remove("connecting", "connected");

    if (conn.status === "connecting") {
      els.connectText.textContent = "Connecting...";
      btn.classList.add("connecting");
      els.connectIcon.style.animation = "arrowsUp .65s ease-in-out infinite";
    } else if (conn.status === "connected") {
      els.connectText.textContent = "Отключиться";
      btn.classList.add("connected");
      els.connectIcon.style.animation = "none";
    } else {
      els.connectText.textContent = "Подключиться";
      els.connectIcon.style.animation = "none";
    }
  }

  function renderHeaderStats() {
    const subs = data.subscriptions.length;
    const servers = data.subscriptions.reduce((acc, s) => acc + s.servers.length, 0);
    els.pillStats.textContent = `${subs} подписок • ${servers} серверов`;
  }

  function renderStatus() {
    if (conn.status === "connecting") {
      els.statusValue.textContent = "Подключение...";
      els.statusHint.textContent = "Эмуляция подключения";
      els.dotConn.classList.remove("on");
      els.miniConnText.textContent = "Connecting...";
      return;
    }
    if (conn.status === "connected") {
      els.statusValue.textContent = "Подключено";
      els.statusHint.textContent = "Стабильное соединение";
      els.dotConn.classList.add("on");
      els.miniConnText.textContent = "Connected";
      return;
    }
    els.statusValue.textContent = "Отключено";
    els.statusHint.textContent = "Готов к подключению";
    els.dotConn.classList.remove("on");
    els.miniConnText.textContent = "Disconnected";
  }

  function renderMiniPing() {
    const srv = getServer(selected.subId, selected.serverId);
    if (!srv) {
      els.miniPing.textContent = "Ping: —";
      return;
    }
    const st = pingMap.get(srv.id);
    els.miniPing.textContent = (!st || !st.available) ? "Ping: n/a" : `Ping: ${st.ping} ms`;
  }

  function render() {
    renderHeaderStats();
    renderLeftListOnly();
    renderStatus();
    renderMiniPing();
    renderRightPanel();
    fillServerModalSelects();
    fillShareSelect();
  }

  function bindEvents() {
    els.btnAddSub.addEventListener("click", () => {
      els.subNameInput.value = "";
      fillSubIconSelect();
      openModal("modalSub");
      setTimeout(() => els.subNameInput.focus(), 50);
    });

    els.btnAddServer.addEventListener("click", () => {
      if (data.subscriptions.length === 0) return toast("Сначала создайте подписку");
      els.serverNameInput.value = "";
      openModal("modalServer");
      setTimeout(() => els.serverNameInput.focus(), 50);
    });

    els.btnShareOpen.addEventListener("click", () => {
      if (data.subscriptions.length === 0) return toast("Нет подписок");
      els.shareCode.value = "";
      els.copyHint.textContent = "—";
      openModal("modalShare");
    });

    els.btnImportOpen.addEventListener("click", () => {
      els.importCode.value = "";
      openModal("modalImport");
      setTimeout(() => els.importCode.focus(), 50);
    });

    els.btnReset.addEventListener("click", () => {
      const ok = confirm("Сбросить все данные приложения (localStorage)?");
      if (!ok) return;
      Storage.reset();
      pingMap.clear();
      selected = { subId: null, serverId: null };
      disconnect();
      ensureData();
      initPingEntries();
      render();
      toast("Сброшено");
    });

    document.querySelectorAll("[data-close]").forEach(btn => {
      btn.addEventListener("click", () => closeModal(btn.getAttribute("data-close")));
    });
    document.querySelectorAll(".modalOverlay").forEach(ov => {
      ov.addEventListener("click", (e) => {
        if (e.target === ov) ov.classList.remove("open");
      });
    });

    els.subCreateBtn.addEventListener("click", () => {
      addSubscription(els.subNameInput.value, els.subIconSelect.value);
      closeModal("modalSub");
    });
    els.subNameInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        addSubscription(els.subNameInput.value, els.subIconSelect.value);
        closeModal("modalSub");
      }
    });

    els.serverCreateBtn.addEventListener("click", () => {
      addServerToSubscription(
        els.serverSubSelect.value,
        els.serverNameInput.value,
        els.flagSelect.value
      );
      closeModal("modalServer");
    });

    els.btnConnect.addEventListener("click", connect);

    els.btnGenerateShare.addEventListener("click", generateShare);
    els.btnCopyShare.addEventListener("click", copyShare);

    els.btnDoImport.addEventListener("click", doImport);

    // заметки сервера (с дебаунсом)
    let notesT = null;
    els.serverNotes.addEventListener("input", () => {
      const srv = getServer(selected.subId, selected.serverId);
      if (!srv) return;
      window.clearTimeout(notesT);
      els.notesHint.textContent = "Сохранение...";
      notesT = window.setTimeout(() => {
        srv.notes = String(els.serverNotes.value || "");
        persist();
        els.notesHint.textContent = "Сохранено";
        window.setTimeout(() => (els.notesHint.textContent = "Сохраняется локально"), 1200);
      }, 250);
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function init() {
    ensureData();
    initPingEntries();
    bindEvents();

    const firstSub = data.subscriptions[0];
    if (firstSub && firstSub.servers[0]) {
      selected.subId = firstSub.id;
      selected.serverId = firstSub.servers[0].id;
    }

    render();
    window.setInterval(tickPing, 2500);
  }

  return { init };
})();

document.addEventListener("DOMContentLoaded", () => App.init());
