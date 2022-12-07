import "./style.css"
import navbar from "./navbar"
import homePage from "./homePage";
import menuPage from "./menuPage"
import contactPage from "./contactPage"
navbar()
homePage();
const navBtns = document.querySelectorAll("button")
navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        (document.getElementById(`content`)).remove()
        switch (btn.textContent) {
            case "Home":
                homePage();
                break;
            case "Menu":
                menuPage()
                break;
            case "Contact":
                contactPage()
                break;
            default:
                homePage();
                break;
        }

    })
});