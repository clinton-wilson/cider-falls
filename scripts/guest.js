import { getGuests } from "./database.js"

const guests = getGuests()

export const displayGuests = () => {
    let html = "<ul>"
    for (const guest of guests) {
        html += `<li class="guest">${guest.firstName} ${guest.lastName}</li>`
    }
    return html + "</ul>"
}