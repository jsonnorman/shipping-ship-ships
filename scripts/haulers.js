import { getHaulers } from "./database.js"


export const haulersList = () => {
    const haulers = getHaulers()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
       haulersHTML += `<li data-haulerId="${hauler.id}" 
                            data-dockForeignKey="${hauler.dock_id}"
                            data-type="hauler"> 
                            ${hauler.name}
                         </li>`
    }
    haulersHTML += "</ul>"

    return haulersHTML
}