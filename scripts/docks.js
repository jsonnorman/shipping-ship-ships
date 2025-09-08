import { getDocks } from "./database.js"


export const dockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li data-dockid="${dock.id}"
                          data-type="dock"
                          data-location="${dock.location}"> 
        ${dock.location} can hold ${dock.volume} of cargo
        </li>`
        }

    docksHTML += "</ul>"

    return docksHTML
}