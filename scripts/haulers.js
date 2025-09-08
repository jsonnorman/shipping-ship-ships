import { getHaulers, getShippingShips } from "./database.js"


export const haulersList = () => {
    const haulers = getHaulers()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
       haulersHTML += `<li data-haulerid="${hauler.id}" 
                            data-dockForeignKey="${hauler.dock_id}"
                            data-type="hauler"> 
                            ${hauler.name}
                         </li>`
    }
    haulersHTML += "</ul>"

    return haulersHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {
            // Get the id of the hauler clicked
            const haulerId = itemClicked.dataset.haulerid
            // Start a counter variable at 0
            let shipcounter = 0
            // Iterate all of the shipping ships
            const shippingShips = getShippingShips ()
            for (const ship of shippingShips){
                if (parseInt(haulerId) === ship.ssId) { // Does the haulerId foreign key match the id?

                    shipcounter += 1   // Increase the counter by 1
                }
            }
                
            window.alert(` Aye, this hauler is carrying a lot of boats right now, like ${shipcounter}'s many shipping ships, Ayee`)
        }
    }
)