import { getServices, getParkAreas, getServiceLocations } from "./database.js";

const services = getServices()
const parkAreas = getParkAreas()
const serviceLocations = getServiceLocations()

export const displayServiceLocations = () => {
    let html = ""
    for (const service of services) {
        html += `<section class="serviceLocations">`   
        html += `<h2 id="serviceLocations--${service.id}">${service.name}</h2>`
        html += "</section>"
    }
    return html
}

const locationServices = (services) => {
    let locationString = ""
    for (const serviceLocation of serviceLocations) {
        for (const parkArea of parkAreas) {   
        if (services.id === serviceLocation.serviceId && serviceLocation.parkAreaId === parkArea.id) {
            locationString += `${parkArea.name} `
                }
            }
        }
    return locationString
}

document.addEventListener(
    "click",
        (clickEvent) => {
            const itemClicked = clickEvent.target
            if (itemClicked.id.startsWith("serviceLocations")) {
                const [,serviceLocationsId] = itemClicked.id.split("--")
            
                for (const service of services) {
                    if (service.id === parseInt(serviceLocationsId)) {
                        const totalLocations = locationServices(service)
                       
                        window.alert(`${service.name} is offered at ${totalLocations} `)
                }
            }
        }           
    }
)