function isValidAddress(address) {
  return address && address.trim().length > 0 && /[a-zA-Z]+/.test(address) && /\d+/.test(address)
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openInGoogleMaps",
    title: "Abrir no Google Maps",
    contexts: ["selection"],
  })
})

chrome.contextMenus.onClicked.addListener((info) => {
  const address = info.selectionText.trim()

  if (isValidAddress(address)) {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`

    // Open the Google Maps URL in a new tab
    chrome.tabs.create({ url: googleMapsUrl })

    // Store the address in local storage
    if (chrome?.storage?.local) {
      chrome.storage.local.get(["history"], (result) => {
        const history = result.history || []

        history.unshift(address)
        chrome.storage.local.set({ history: history.slice(0, 10) })
      })
    }
  } else {
    // Show an error message if the address is invalid
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/icon16.png",
      title: "Endereço inválido",
      message: "Por favor, selecione um endereço válido.",
    })
  }
})

chrome.commands.onCommand.addListener((command) => {
  if (command === "open-maps") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: "getSelection" }, (response) => {
        console.log(response)
        if (response?.text && isValidAddress(response.text)) {
          const googleMapsUrl = `https://google.com/maps/search/?api=1&query=${response.text}`

          chrome.tabs.create({ url: googleMapsUrl })
        } else {
          chrome.notifications.create({
            type: "basic",
            iconUrl: "icons/icon16.png",
            title: "Endereço inválido",
            message: "Por favor, selecione um endereço válido.",
          })
        }
      })
    })
  }
})