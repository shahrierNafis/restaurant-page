export default function () {
    const content = document.createElement("div")
    content.id = "content"
    const headline = document.createElement("h1")
    headline.textContent = "Restaurant Page"
    headline.classList.add("headline")
    content.appendChild(headline)

    const welcomeText = document.createElement("p")
    welcomeText.textContent = "Restaurant is a memory: of the past we have already lived and of a moment we feel today and will remember tomorrow. Restaurant is feeling"
    welcomeText.classList.add("welcomeText")
    content.appendChild(welcomeText)
    document.body.appendChild(content)
}