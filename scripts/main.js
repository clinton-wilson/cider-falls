import { parkInfo } from "./parkArea.js"
import { displayGuests } from "./guest.js"
import { displayServiceLocations } from "./services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<section class="serviceLocations">
    ${displayServiceLocations()}
</section>
<article class="parksAndGuests"
<section class="parkAreasAndServices">    
    ${parkInfo()}
</section>

<section class="guests">
    <h2>Guests</h2>
   ${displayGuests()}
</section>
</article>
`

mainContainer.innerHTML = applicationHTML
