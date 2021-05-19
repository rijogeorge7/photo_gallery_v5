baguetteBox.run('.gallery');

function filterSearch() {
    let input = document.getElementById('search').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('gallery-item');
    for (i = 0; i < x.length; i++) { 
        let caption = x[i].getAttribute("data-caption");
        if (!caption.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="inline";                 
        }
    }
}

document.getElementById("search").addEventListener("keyup", filterSearch);