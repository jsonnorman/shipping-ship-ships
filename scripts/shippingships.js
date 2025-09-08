import { getShippingShips, getHaulers } from "./database.js"


export const shippingShipsList = () => {
    const shippingShips = getShippingShips()

    let shippingShipsHTML = "<ul>"

    for (const ss of shippingShips) {
        shippingShipsHTML += `<li data-shipid="${ss.id}"
                                    data-haulerforeignkey="${ss.ssId}"
                                    data-type="shipping ship"
                                    data-name= "${ss.name}"> 
                                ${ss.name}
                                 </li>`    }
    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
            if (itemClicked.dataset.type === "shipping ship") {

            // Get the haulerId value of the shipping ship clicked
                const haulerforeignkey = itemClicked.dataset.haulerforeignkey
            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }

            // Iterate the array of hauler objects
                const haulers = getHaulers ()
                for (const hauler of haulers) {
                // Does the haulerId foreign key match the id of the current hauler?
                        if (parseInt(haulerforeignkey) === hauler.id) {
                    // Reassign the value of `haulingShip` to the current hauler
                                haulingShip = `${hauler.name}`
                    }
                }
            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip}`)
    }
}
)