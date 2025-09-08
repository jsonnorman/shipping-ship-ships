const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ], haulers: [
        { id: 1, name: "Polaris", dock_id: 1},
        { id: 2, name: "Persus", dock_id: 2},
        { id: 3, name: "Catepillar", dock_id: 3},
        { id: 4, name: "C2", dock_id: 4}
    ], shippingShips: [
        { id: 1, name: "Kraken", ssId: 1 },
        { id: 2, name: "Idris", ssId: 2 },
        { id: 3, name: "Bengal", ssId: 3 },
        { id: 4, name: "Jupiter", ssId: 4 },
        { id: 5, name: "Kingship", ssId: 2 },
        { id: 6, name: "Pegasus", ssId: 2 },
        { id: 7, name: "Kraken Privateer", ssId: 4 },
        { id: 8, name: "Driller", ssId: 1 },
        { id: 9, name: "Retribution", ssId: 2 },
        { id: 10, name: "Javelin", ssId: 3 },
    ]
}


export const getDocks = () => {
    return structuredClone(database.docks);
}

export const getHaulers = () => {
    return structuredClone(database.haulers);
}

export const getShippingShips = () => {
    return structuredClone(database.shippingShips)
}