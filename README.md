## 🌐 Win2RayTun

**Win2RayTun** is a modern **UI simulation of a VPN client**, created to demonstrate how VPN applications look and behave from a user interface and UX perspective.

This project focuses entirely on **frontend logic and visual interaction** and does **NOT** provide real VPN, proxy, tunneling, encryption, or privacy functionality.

---

## 🎯 Purpose of the Project

Win2RayTun is designed for:

- UI / UX prototyping
- Frontend development practice
- Interface behavior simulation
- Demonstration and educational use

It allows developers and designers to experiment with VPN-style interfaces **without any real network interaction**.

---

## ✨ Features

- 📡 Server and subscription management  
- 🌍 Country flags displayed next to servers  
- 📶 Ping simulation (including unavailable states)  
- ⭐ Favorite servers  
- 📝 Custom server details and notes  
- 🕓 Connection history  
- 💾 Persistent data storage using `localStorage`  
- 🎨 Dark UI with animated gradient background  
- 🔄 Realistic connection state simulation  

All behaviors are **fully simulated** and intended for visual and logical demonstration only.

---

## 🖥️ Technology Stack

- **HTML** — structure  
- **CSS** — styling and animations  
- **Vanilla JavaScript** — application logic  
- **localStorage** — data persistence  

No backend, no network APIs, no system-level access.

---

## 🚨 Important Notice

> Win2RayTun does **NOT**:
> - connect to real VPN servers  
> - modify network settings  
> - encrypt or route traffic  
> - provide privacy or security protection  

This is a **UI simulation only**.

---

## 📦 DEMO KEY (NOT REAL)
This is a test key. It shows how the UI works.

```bash
KEY-YEST - W2RT:eyJ2IjoyLCJ0Ijoic3Vic2NyaXB0aW9uIiwiaWQiOiJzdWJfZDczODU2NWI0NDVmYThfMTliYzg0NWVhOTAiLCJuYW1lIjoiU3RhbmRhcnQiLCJpY29uIjoi4q2QIiwic2VydmVycyI6W3siaWQiOiJzcnZfNTc2OWM0OWE0NWE0MV8xOWJjODQ2MTEyOSIsIm5hbWUiOiJQb2xhbmQgIzEiLCJmbGFnS2V5IjoiUEwiLCJub3RlcyI6IiJ9LHsiaWQiOiJzcnZfNGQ2OTllYjc5NTJjM18xOWJjODQ2M2E4MCIsIm5hbWUiOiJQb2xhbmQgIzIiLCJmbGFnS2V5IjoiUEwiLCJub3RlcyI6IiJ9LHsiaWQiOiJzcnZfMmFkNDQ2YjkwYjJjMzhfMTliYzg0NjViZGMiLCJuYW1lIjoiUG9sYW5kICMzIiwiZmxhZ0tleSI6IlBMIiwibm90ZXMiOiIifSx7ImlkIjoic3J2X2ZmNjRhOWI3N2Y2OV8xOWJjODQ3MTBjNiIsIm5hbWUiOiJHZXJtYW55IHwgRnJhbmtmdXJ0ICAjMSIsImZsYWdLZXkiOiJERSIsIm5vdGVzIjoiIn0seyJpZCI6InNydl9iMmJjODdlYmY4NjVjXzE5YmM4NDc0NDhiIiwibmFtZSI6Ikdlcm1hbnkgfCBGcmFua2Z1cnQgICMyIiwiZmxhZ0tleSI6IkRFIiwibm90ZXMiOiIifSx7ImlkIjoic3J2Xzg3ZDFiNmZkY2RkMzdfMTliYzg0NzdjMGYiLCJuYW1lIjoiR2VybWFueSB8IEJlcmxpbiIsImZsYWdLZXkiOiJERSIsIm5vdGVzIjoiIn0seyJpZCI6InNydl8zMWRmZTVjYjRlYWRiOF8xOWJjODQ3ZTk4NCIsIm5hbWUiOiJVU0EgfCBOZXctWW9yayBDaXR5IiwiZmxhZ0tleSI6IlVTIiwibm90ZXMiOiIifSx7ImlkIjoic3J2XzZkZTk0MjVjMTk2ZjY4XzE5YmM4NDg1NWEwIiwibmFtZSI6IlVTQSB8IENoaWNhZ28iLCJmbGFnS2V5IjoiVVMiLCJub3RlcyI6IiJ9LHsiaWQiOiJzcnZfN2Q4MTI4YTY0M2FlYzhfMTliYzg0YmQ4OTUiLCJuYW1lIjoiTmV0aGVybGFuZHMgIzEiLCJmbGFnS2V5IjoiTkwiLCJub3RlcyI6IiJ9LHsiaWQiOiJzcnZfNmYzMTJhM2Q1ZmJiZThfMTliYzg0YmY1YWQiLCJuYW1lIjoiTmV0aGVybGFuZHMgIzIiLCJmbGFnS2V5IjoiTkwiLCJub3RlcyI6IiJ9LHsiaWQiOiJzcnZfYzgxMjQ1Y2U0YTE1YV8xOWJjODRjYjNiNyIsIm5hbWUiOiJTcGFpbiIsImZsYWdLZXkiOiJFUyIsIm5vdGVzIjoiIn0seyJpZCI6InNydl82MDdkZWYzZTdhZjlkXzE5YmM4NGNlYTBhIiwibmFtZSI6IlVLICMxIExvbmRvbiIsImZsYWdLZXkiOiJHQiIsIm5vdGVzIjoiIn0seyJpZCI6InNydl8wZDRiNTVmMTFlMjY1OF8xOWJjODRlNWEzYyIsIm5hbWUiOiJMVEUgMSDil48g0JLQodCVINCe0J/QldCg0JDQotCe0KDQqyIsImZsYWdLZXkiOiJFVSIsIm5vdGVzIjoiIn0seyJpZCI6InNydl8wYjc3ZDdlNzIzNDk1XzE5YmM4NGU3NjVjIiwibmFtZSI6IkxURSAxLjEg4pePINCS0KHQlSDQntCf0JXQoNCQ0KLQntCg0KsiLCJmbGFnS2V5IjoiRVUiLCJub3RlcyI6IiJ9LHsiaWQiOiJzcnZfODYwZGE2ZWRjNDE4Nl8xOWJjODRlOTM3YyIsIm5hbWUiOiJMVEUgMS4yIOKXjyDQktCh0JUg0J7Qn9CV0KDQkNCi0J7QoNCrIiwiZmxhZ0tleSI6IkVVIiwibm90ZXMiOiIifSx7ImlkIjoic3J2XzUzM2NlNjE2ZDJhYjdfMTliYzg0ZWIzNjAiLCJuYW1lIjoiTFRFIDEuMyDil48g0JLQodCVINCe0J/QldCg0JDQotCe0KDQqyIsImZsYWdLZXkiOiJFVSIsIm5vdGVzIjoiIn1dfQ==
```
---

# 🔗LINKS
🧪 UI preview available here: 
https://lightmimenn.github.io/Win2RayTun/

## ⚠️FAKE KEYS FOR TEST
https://telegra.ph/Subscribe-keys-FAKE-01-17
