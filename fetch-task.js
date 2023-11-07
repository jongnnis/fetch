const datas = fetch('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0')
    .then((response)=> {
        return response.json()
    })
    .then((data)=> {
        return data.dataseries
    })

async function sub(){
    const data = await datas
    const keys = Object.keys(data[0])
    const sub = document.getElementById('sub')
    const subRow = document.createElement("tr")
    for (let i=0; i<keys.length; i++){
        const key = keys[i]
        const keyCell = document.createElement('th')
        keyCell.textContent = key
        sub.appendChild(keyCell)
    }
}

sub()

async function contents(){
    const data = await datas
    const keys = Object.keys(data[0])
    const table = document.getElementById('myTable')
    const tbody = table.querySelector('tbody')
    console.log(Object.values(data[0]))
    for (let i=0; i<data.length; i++){
        const row = document.createElement('tr')
        const rowInfo = Object.values(data[i])
        for (let k=0; k<keys.length; k++){
            const info = document.createElement('td')
            info.textContent = rowInfo[k]
            row.appendChild(info)
        }
        tbody.appendChild(row)
    }
}

contents()