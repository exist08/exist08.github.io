let barGraph = document.getElementById('bar-graph')

const data = [
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]

data.forEach(dat=>{
    barGraph.innerHTML +=
        `
        <div class="bar">
        <span class="spawn">${dat.amount}</span>
        <div class="block" id="blockbar" style="height: ${dat.amount * 2.75}px;"></div>
        <span>${dat.day}</span>
        </div>
        `
})