export default function () {
    const navbar = document.createElement("div")
    navbar.classList.add("navbar")

    const home = document.createElement("button")
    home.textContent = "Home"
    const menu = document.createElement("button")
    menu.textContent = "Menu"
    const contact = document.createElement("button")
    contact.textContent = "Contact"
    navbar.append(home, menu, contact)
    document.body.appendChild(navbar)
}