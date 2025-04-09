
# 🌍 Open in Google Maps - Chrome Extension

<p align="center">
  <img src="icons/icon128.png" width="96" alt="Extension icon" />
</p>

🔎 Select any text containing an address and, with a keyboard shortcut, instantly open the location on Google Maps!  
📍 Ideal for those who are constantly copying and pasting addresses - now everything can be solved with one command.

---

## 🚀 Features

✅ Keyboard shortcut to open Google Maps with selected text  
✅ Detects valid addresses automatically
✅ Search history accessible via popup  
✅ Stores the last 10 addresses searched locally  
✅ Simple, light and ad-free interface

---

## 📸 Preview

| Address selection | Popup with history |
|---------------------|---------------------|
| ![select text](https://github.com/user-attachments/assets/f6796532-3013-4d50-a07d-4bae9d9baa3a) | ![history popup](https://github.com/user-attachments/assets/e5a9fdc3-7db0-476e-8474-39d99698e59d) |

---

## 🎯 How to use

1. Install the extension in Chrome (see instructions below)
2. Select a text with an address
3. Press `Ctrl+Shift+L` (default shortcut)*
4. Google Maps will open with the search for that address

💡 You can also click on the extension icon to see the history of your recent searches.

---

## ⌨️ Keyboard shortcuts

- Standard shortcut: `Ctrl+Shift+L` (Windows/Linux) or `⌘+Shift+L` (Mac)
- You can change this shortcut by going to  
  chrome://extensions/shortcuts

---

## 🛠 Manual installation (developer mode)

1. Download or clone this repository
2. Go to chrome://extensions in your browser
3. Activate “Developer mode” in the top right corner
4. Click on “Upload without compression”
5. Select the folder where the extension files are
6. Done! Test it by selecting an address and pressing the shortcut

---

## 📁 Project structure

```
📦 open-in-google-maps
├── background.js        # Manage shortcuts and interactions
├── content.js           # (Optional) Communication with the flap
├── popup.html           # History UI
├── popup.js             # Logic of history
├── manifest.json        # Extension manifesto
├── icons/               # Extension icons
└── README.md
```

---

## 🧠 To-do / Future Ideas

- [ ] Support for more than one address per selection
- [ ] Integration with Google Maps API (for formatted name)
- [ ] GPS location support (mobile-like)
- [ ] History export

---

## 🤝 Contributing

Contributions are very welcome!  
Open an issue or send a pull request 🚀

---

## 📄 License

MIT © [Charleston Amaral]

---

## 📬 Contact

📧 charleston.silva03@gmail.com  
🐙 github.com/charleskx
