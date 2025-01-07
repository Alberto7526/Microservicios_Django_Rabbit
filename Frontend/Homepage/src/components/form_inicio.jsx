import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Form_init = () => {
  return (
    <div className="d-flex align-items-center" style={{ height: "100vh" }}>
      {/* Contenedor del formulario */}
      <div
        className="container"
        style={{
          width: "70%",
          height: "487px",
          padding: "20px",
          marginLeft: "130px",
        }}
      >
        <h2
          className="text-center"
          style={{
            fontSize: "40px",
            color: "#8C1919",
            fontFamily: "Titillium Web",
            fontWeight: "bold",
          }}
        >
          Bienvenido
        </h2>
        <form>
          <div>
            <label
              className="mt-10 text-center font-bold tracking-tight"
              style={{
                fontSize: "20px",
                color: "#8C1919",
                fontFamily: "Titillium Web",
              }}
            >
              Usuario
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="username"
                required
                className="form-control"
                style={{
                  borderRadius: "5px",
                  width: "236px",
                  height: "30px",
                }}
                placeholder="Ingresar usuario"
              />
            </div>
          </div>
          <br />
          <div>
            <label
              className="mt-10 text-center font-bold tracking-tight"
              style={{
                fontSize: "20px",
                color: "#8C1919",
                fontFamily: "Titillium Web",
                fontWeight: "bold",
              }}
            >
              Contraseña
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                required
                className="form-control"
                style={{
                  borderRadius: "5px",
                  width: "236px",
                  height: "30px",
                }}
                placeholder="Ingresar contraseña"
              />
            </div>
          </div>
          <div className="mt-10"></div>
          <div>
            <div>
              <label style={{ color: "#44403C", fontWeight: "bold" }}>
                Olvidé mi contraseña
              </label>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="mx-auto block my-8 btn "
                style={{
                  borderRadius: "9px",
                  backgroundColor: "#8C1919",
                  width: "85%",
                  height: "30px",
                  color: "white",
                }}
              >
                Continuar
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Contenedor de imágenes */}
      <div
        className="container"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#8C1919",
          borderRadius: "60px 0px 0px 50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <img
          src="/logo_blanco.png"
          alt="distrital_log"
          className="img-fluid"
          style={{ maxWidth: "100%", height: "300px" }}
        />
        <img
          src="/sede1.png"
          alt="sede1"
          className="img-fluid"
          style={{ maxWidth: "100%", height: "auto", marginTop: "110px" }}
        />
      </div>
    </div>
  );
};

export default Form_init;
