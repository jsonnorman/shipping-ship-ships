import { dockList } from "./docks.js"
import { haulersList } from "./haulers.js"
import { shippingShipsList } from "./shippingships.js"

const mainContainer = document.querySelector("#container")


const applicationHTML = `
<h1>Shipping Ship Tracker 🚢</h1>


<article class="details">
    <section class="column">
        <h2>Hauling Ships</h2>
        ${haulersList()}
    </section>
    <section class="column">
        <h2>Shipping Ships</h2>
        ${shippingShipsList()}
    </section>
    <section class="column">
        <h2>Docks</h2>
        ${dockList()}
    </section>
</article>
`



mainContainer.innerHTML = applicationHTML