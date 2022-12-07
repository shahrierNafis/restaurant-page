export default function () {
    const content = document.createElement("div")
    content.id = "content"
    const headline = document.createElement("h1")
    headline.textContent = "Contacts"
    headline.classList.add("headline")
    content.appendChild(headline)

    const email = document.createElement("a")
    email.href = "mailto: shahriernafisog@gmail.com"
    email.classList.add("email")
    email.textContent = "shahriernafisog@gmail.com"

    content.appendChild(email)
    document.body.appendChild(content)
}