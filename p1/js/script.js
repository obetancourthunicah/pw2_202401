let txtSearchElement;
let imageCollection;
// {title: string, description:string, node: Element}[]
document.addEventListener("DOMContentLoaded", function () {
    const h1Element = document.querySelector("header h1");
    txtSearchElement = document.getElementById("txtSearch");
    const cardsOnDom = document.querySelectorAll(".card-holder .card");
    imageCollection = [];
    cardsOnDom.forEach((card) => {
        const title = card.querySelector("h2").innerText;
        const description = card.querySelector("p").innerText;
        imageCollection.push({
            title,
            description,
            "node": card
        });
    });
    const btnSearchElement = document.getElementById("btnSearch");
    if (h1Element) {
        h1Element.addEventListener("click", function () {
            alert("Click on Header 1 from JS Script File");
        });
    }
    if (btnSearchElement) {
        btnSearchElement.addEventListener("click", btnSearch_OnClick);
    }
})

const btnSearch_OnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const value = txtSearchElement.value;

    imageCollection.forEach(
        (image) => {
            if (image.title.toLowerCase().includes(value.toLowerCase()) || image.description.toLowerCase().includes(value.toLowerCase())) {
                image.node.classList.remove("hidden");
            } else {
                image.node.classList.add("hidden");
            }
        }
    );
}