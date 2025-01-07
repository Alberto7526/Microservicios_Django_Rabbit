const Form_init = () => {
  return (
    <>
      <h2
        className="mt-10 text-center font-semibold tracking-tight"
        style={{
          fontSize: "40px",
          color: "#8C1919",
          fontFamily: "Titillium Web",
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
              fontWeight: "bold",
            }}
          >
            Usuario
          </label>
          <div className="w-72">
            <input
              type="password"
              name="password"
              required
              className="block w-100 bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-700 sm:text-sm/6"
              style={{ borderRadius: "5px" }}
              placeholder="Ingresar contraseña"
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
              className="block w-100 bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              style={{ borderRadius: "5px" }}
              placeholder="Ingresar contraseña"
            />
          </div>
        </div>
        <div className="mt-10"></div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-normal text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            style={{
              backgroundColor: "#8C1919",
              borderRadius: "5px",
            }}
          >
            Continuar
          </button>
        </div>
      </form>
    </>
  );
};

export default Form_init;
