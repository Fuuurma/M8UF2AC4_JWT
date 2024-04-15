window.onload = () => {
    // Add listeners
    deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", deleteProduct)
    })
}

function deleteProduct(event) {
    const formData = new URLSearchParams();
    formData.append('name', event.target.id);

    const options = {
        method: 'POST',
        body: formData
    };

    fetch("/deleteProduct", options)
        .then((response) => { 
            location.reload()
         })
        .catch((error) => { console.log(error) })
}   