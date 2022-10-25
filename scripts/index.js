let categories = [
    "Adventures",
    "Museums",
    "Wine Tastings"
];

let activities = [
    {
        category: "Adventures",
        id: "A101",
        name: "Renaissance-Explore Florence",
        location: "164 Renaissance. Main Street",
        description: "some text about the Explore Florence",
        price: 67.07,
    },
    {
        category: "Museums",
        id: "A201",
        name: "Palazzo Vecchio Guided Tour",
        location: "132 Palazzo. Main Street",
        description: "some text about Palazzo",
        price: 52.07,
    },
    {
        category: "Wine Tastings",
        id: "A301",
        name: "Tuscany Sightseeing Tour from Florence",
        location: "121 Wine. Main Street",
        description: "some text about Sightseeing from Florence",
        price: 45.00,
    },
];

function makeDropDown(list, onChangeCallback) {
    const select = document.createElement("select");
    list.forEach(text => {
        const option = document.createElement("option"); //create
        option.innerHTML = text; //add text
        option.value = text;
        select.appendChild(option)
    })
    select.addEventListener("change", onChangeCallback)
    return select;
}

//Create table then using insert methods for row and cell
function makeTable(activity) {
    const table = document.createElement("table");
    const headings = table.insertRow(-1);
    const values = table.insertRow(-1);
    let i = 0;
    for(key in activity) {
        const value = activity[key];
        const h = headings.insertCell(i);
        const v = values.insertCell(i);
        h.innerHTML = key.toUpperCase();
        v.innerHTML = value;
        i++;
    }
    return table;
}
function onChangeCallback(e) {
    results.innerHTML = "";
    //alert(e.target.selectedOptions[0].value);
    const value = e.target.selectedOptions[0].value;
    activities.filter(a => a.category == value).forEach(a => {
        results.appendChild(makeTable(a))
    })
}

document.body.appendChild(makeDropDown(categories, onChangeCallback));
const results = document.createElement("div");
results.setAttribute("id", "results");
document.body.appendChild(results);