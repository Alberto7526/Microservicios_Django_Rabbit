function useFetch() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer m1L2zNoW90P2DkaISez1yzwO845iKw",
    },
  };

  fetch("http://localhost:8000/api/users/", options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Convertimos la respuesta a JSON
    })
    .then((data) => {
      console.log("Datos recibidos:", data);
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
    });
}

export default useFetch;
