export default function () {
    const content = document.createElement("div")
    content.id = "content"
    const headline = document.createElement("h1")
    headline.textContent = "Menu"
    headline.classList.add("headline")
    content.appendChild(headline)

    const menu = document.createElement("ul")
    menu.classList.add("menu")

    const cocoaMillefeuille = document.createElement("li")
    cocoaMillefeuille.textContent = "Cocoa Millefeuille - 72% chocolate ganache, cocoa grue ice cream"

    const honey = document.createElement("li")
    honey.textContent = "Honey - cooked pollen cream, candied lemon biscuit, buttermilk ice cream, honeycomb"

    const undergrowth = document.createElement("li")
    undergrowth.textContent = "Undergrowth - chestnuts with juniper, cranberry compote and vanilla ice cream"

    const caramel = document.createElement("li")
    caramel.textContent = "Caramel tarte tatin, puff pastry ice cream, almond chips"

    menu.append(cocoaMillefeuille, honey, undergrowth, caramel)
    content.appendChild(menu)
    document.body.appendChild(content)
}