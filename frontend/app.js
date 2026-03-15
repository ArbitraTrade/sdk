async function loadCompute(){

    const res = await fetch("http://localhost:3000/compute")

    const data = await res.json()

    const list = document.getElementById("computeList")

    list.innerHTML = ""

    data.forEach(c => {

        const li = document.createElement("li")

        li.innerText = c.gpu + " - " + c.price

        list.appendChild(li)

    })

}
