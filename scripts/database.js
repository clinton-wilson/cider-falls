const database = {
    parkAreas: [
    {
        id: 1,
        name: "Lodge, Hotel and Restaurant"
    }, 
    {
        id: 2,
        name: "Lost Wolf Hiking Trail"
    },
    {
        id: 3,
        name: "Chamfort River"
    },
    {
        id: 4,
        name: "Gander River Nature Preserve"
    },
    {
        id: 5,
        name: "Campground"
    },
    {
        id: 6,
        name: "Pine Bluffs Trails"
    }
],

    services: [
    {
        id: 1,
        name: "Rafting"
    },
    {
        id: 2,
        name: "Canoeing"
    },
    {
        id: 3,
        name: "Fishing"
    },
    {
        id: 4,
        name: "Hiking"
    },
    {
        id: 5,
        name: "Picnicking"
    },
    {
        id: 6,
        name: "Rock Climbing"
    },
    {
        id: 7,
        name: "Lodging"
    },
    {
        id: 8,
        name: "Parking"
    },
    {
        id: 9,
        name: "Information"
    },
    {
        id: 10,
        name: "Zip Lines"
    }
],

    guests: [
        {
            id: 1,
            firstName: "Hannah",
            lastName: "Beddoe",
            parkAreaId: 1
        },
        {
            id: 2,
            firstName: "Clinton",
            lastName: "Wilson",
            parkAreaId: 1
        },
        {
            id: 3,
            firstName: "Wendy",
            lastName: "Puppercorn",
            parkAreaId: 1
        },
        {
            id: 4,
            firstName: "Jim",
            lastName: "Osterberg",
            parkAreaId: 2
        },
        {
            id: 5,
            firstName: "Richard",
            lastName: "Gilmore",
            parkAreaId: 3
        },
        {
            id: 6,
            firstName: "Emily",
            lastName: "Gilmore",
            parkAreaId: 3
        },
        {
            id: 7,
            firstName: "Michael Gary",
            lastName: "Scott",
            parkAreaId: 4
        },
        {
            id: 8,
            firstName: "Dwight Kurt",
            lastName: "Schrute",
            parkAreaId: 5
        },
        {
            id: 9,
            firstName: "Henry",
            lastName: "Pollard",
            parkAreaId: 6
        },
        {
            id: 10,
            firstName: "Casey",
            lastName: "Klein",
            parkAreaId: 6
        }
    ],
    serviceLocations : [
        {
            id: 1,
            parkAreaId: 1,
            serviceId: 1
            
        },
        {
            id: 2,
            parkAreaId: 1,
            serviceId: 2
            
        },
        {
            id: 3,
            parkAreaId: 1,
            serviceId: 3
            
        },
        {
            id: 4, 
            parkAreaId: 2,
            serviceId: 4
            
        },
        {
            id: 5,
            parkAreaId: 2,
            serviceId: 5
            
        },
        {
            id: 6, 
            parkAreaId: 2,
            serviceId: 6
            
        },
        {
            id: 7, 
            parkAreaId: 3,
            serviceId: 7
            
        },
        {
            id: 8, 
            parkAreaId: 3,
            serviceId: 8
            
        },
        {
            id: 9,
            parkAreaId: 3,
            serviceId: 9
            
        },
        {
            id: 10, 
            parkAreaId: 3,
            serviceId: 5
            
        },
        {
            id: 11, 
            parkAreaId: 4,
            serviceId: 3
            
        },
        {
            id: 12, 
            parkAreaId: 4,
            serviceId: 4
            
        },
        {
            id: 13, 
            parkAreaId: 5,
            serviceId: 9
            
        },
        {
            id: 14,
            parkAreaId: 5,
            serviceId: 7
            
        },
        {
            id: 15, 
            parkAreaId: 5,
            serviceId: 8
            
        },
        {
            id: 16, 
            parkAreaId: 6,
            serviceId: 4
            
        },
        {
            id: 17, 
            parkAreaId: 6,
            serviceId: 5 
            
        },
        {
            id: 18, 
            parkAreaId: 6,
            serviceId: 10
            
        }
    ]

}

export const getParkAreas = () => {
    return database.parkAreas.map(parkArea => ({...parkArea}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getServiceLocations = () => {
    return database.serviceLocations.map(serviceLocation => ({...serviceLocation}))
}