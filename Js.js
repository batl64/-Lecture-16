let search1 = document.querySelector("#age-table")
let search2 = document.querySelectorAll("table label")
let search3 = document.querySelector("table td")
let search4 = document.querySelectorAll("form[name='search']")
let search5 = document.querySelectorAll("form[name='search']  input:first-child")
let search6 = document.querySelectorAll("form[name='search']  input")

console.log(search1)
for (let i of search2) {
    console.log(i)
}
console.log(search3)
for (let i of search4) {
    console.log(i)
}
for (let i of search5) {
    console.log(i)
}

console.log(search6[search6.length-1])
