import { getParkAreas, getServices, getServiceLocations, getGuests } from "./database.js";

const parkAreas = getParkAreas()
const services = getServices()
const serviceLocations = getServiceLocations()
const guests = getGuests()




export const parkInfo = () => {
    let html = ""
    for (const area of parkAreas) {
        html += `<div class="parkArea">`   
        html += `<h2 id="parkArea--${area.id}">${area.name}</h2>`
        html += "<ul>"
        for (const service of services) {
            for (const serviceLocation of serviceLocations) {
                if (area.id === serviceLocation.parkAreaId && serviceLocation.serviceId === service.id) {
                    html += `<li class="service">${service.name}</li>`
                }
            }
        }
        html += "</ul></div>"
    }
    return html
}

const totalGuests = (areas) => {
    let numOfGuests = 0

    for (const guest of guests) {
        if (guest.parkAreaId === areas.id) {
            numOfGuests += 1
        }
    }
    return numOfGuests
}



document.addEventListener(
    "click",
        (clickEvent) => {
            const itemClicked = clickEvent.target
            if (itemClicked.id.startsWith("parkArea")) {
                const [,parkAreaId] = itemClicked.id.split("--")
            
                for (const area of parkAreas) {
                    if (area.id === parseInt(parkAreaId)) {
                        const totalNumGuests = totalGuests(area)
                        if (totalNumGuests < 2) {
                            window.alert(`There is currently only one guest at ${area.name}.`)
                        }
                    else {
                        window.alert(`There are currently ${totalNumGuests} guests at ${area.name}.`)
                    }
                }
            }           
        }
    }
)