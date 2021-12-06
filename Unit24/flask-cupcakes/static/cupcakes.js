function generateCupcakeHTML(cupcake) {
    return `
      <div data-cupcake-id=${cupcake.id}>
        <li>
        <img class="Cupcake-img"
        src="${cupcake.image}"
        alt="(no image provided)">
          ${cupcake.flavor} / ${cupcake.size} / ${cupcake.rating}
          <button class="delete-cupcake">X</button>
        </li>
      </div>
    `;
  }

  async function showInitialCupcakes() {
    const response = await axios.get(`http://127.0.0.1:5000//api/cupcakes`); 
    for (let cupcakeData of response.data.cupcakes) {
      let newCupcake = generateCupcakeHTML(cupcakeData);
      $("#cupcakes-list").append(newCupcake);
    }
  }  


$("#cupcakes-list").on("click", ".delete-cupcake", async function (evt) {
    evt.preventDefault();
    let $cupcake = $(evt.target).parent().parent();
    let cupcakeId = $cupcake.attr("data-cupcake-id");
  
    await axios.delete(`http://127.0.0.1:5000//api/cupcakes/${cupcakeId}`);
    $cupcake.remove();
  });



$("#new-cupcake-form").on("submit", async function (evt) {
    evt.preventDefault();
  
    let flavor = $("#form-flavor").val();
    let rating = $("#form-rating").val();
    let size = $("#form-size").val();
    let image = $("#form-image").val();
  
    const newCupcakeResponse = await axios.post(`http://127.0.0.1:5000//api/cupcakes`, {
      flavor,
      rating,
      size,
      image
    });
    let newCupcake = generateCupcakeHTML(newCupcakeResponse.data.cupcake);
    $("#cupcakes-list").append(newCupcake);
    $("#new-cupcake-form").trigger("reset");
  });
  

  showInitialCupcakes();
