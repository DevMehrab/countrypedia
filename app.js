let input = document.querySelector("#input")
let flag = document.querySelector("img")
let cname = document.querySelector(".name")
let area = document.querySelector(".area")
let capital = document.querySelector(".cap")
let reg = document.querySelector(".reg")
let pop = document.querySelector(".pop")
let lan = document.querySelector(".lan")
let a = document.querySelector(".visit")
let a2 = document.querySelector(".fvisit")
let list = document.querySelector(".list")
let disnam = document.querySelector(".disname")

let nam = "Bangladesh"
function country() {
  fetch(`https://restcountries.com/v3.1/name/${nam}`)
    .then(res => res.json())
    .then(res => {
      a.setAttribute("href", res[0].maps.googleMaps)
      a2.setAttribute("href", res[0].maps.googleMaps)
      flag.setAttribute("src", res[0].flags.png)
      cname.innerHTML = res[0].name.common
      disnam.innerHTML = res[0].name.common
      area.innerHTML = res[0].area + ' km²'
      capital.innerHTML = res[0].capital[0]
      reg.innerHTML = res[0].region
      pop.innerHTML = res[0].population
      lan.innerHTML = res[0].languages[Object.keys(res[0].languages)[0]]
    })
}
country()

input.addEventListener("input", () => {
  nam = input.value
  if (input.value==='') {
    location.reload()
  }
  country()
})

fetch(`https://restcountries.com/v3.1/all`)
.then(res => res.json())
.then(res => {
  console.log(res[0])
  res.forEach(element => {
    let minidis = document.createElement("div")
    let flagnew = document.createElement("div")
    let infonew = document.createElement("div")
    let imgnew = document.createElement("img")
    let newa = document.createElement("a")

    imgnew.setAttribute("src", element.flags.png)
    minidis.classList.add("minidis")
    minidis.classList.add("flex")
    flagnew.classList.add("flag")
    infonew.classList.add("info")
    newa.classList.add("visit")
    newa.setAttribute("href", '#')
    newa.innerHTML=element.name.common

    flagnew.appendChild(imgnew)
    minidis.appendChild(flagnew)
    minidis.appendChild(infonew)
    list.appendChild(minidis)
    infonew.appendChild(newa)
 
    // console.log(element)
    newa.addEventListener("click", () => {
      nam = newa.innerHTML
      country()
    })
  });
})
