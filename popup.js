document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("history", (data) => {
    const history = data.history || []
    const list = document.getElementById("history")

    if (history.length === 0) {
      const item = document.createElement("li")

      item.textContent = "Nenhuma pesquisa ainda."
      list.appendChild(item)
    } else {
      history.forEach((address) => {
        const item = document.createElement("li")

        item.textContent = address
        item.addEventListener("click", () => {
          const url = `https://google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
          chrome.tabs.create({ url })
        })
        
        list.appendChild(item)
      })
    }
  })
})
