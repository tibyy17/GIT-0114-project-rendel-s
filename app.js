const result = document.getElementById(".result");

window.addEventListener("load", async () => {

    const res = await fetch("order.json");
    const data = await res.json();

    console.log(data);

    let output = "";

    data.map(order => {

        output += `
        
        <div class="order">
        
        <div>
        <img src='${order.kep}' alt="pizza" />
        </div>
        <h3>${order.pizza}</h3>
        <hr>
        <h4>Ár:${order.ar}</h4>
        </div>
        `;

    })
  
    result.innerHTML = output;
})