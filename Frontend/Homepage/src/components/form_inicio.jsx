const Form_init = () => {
  return (
    <div className="dark">
      <div className="flex items-center justify-center min-h-screen bg-[#edeef1] dark:bg-[#6d6d6d] border border-[#d7dbe0] dark:border-[#4a5568]">
        <div className="relative flex flex-col m-6 space-y-8 bg-white dark:bg-[#1f1f1f] shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-2 md:p-11">
            <span className="mb-3 text-4xl text-[#8C1919] dark:text-[#ffffff] text-center font-bold">
              Bienvenido
            </span>
            <span className="text-[#44403C] dark:text-[#878787] mb-3 font-semibold text-center">
              Por favor ingresar tu correo
            </span>
            <div className="py-4">
              <span className="mb-2 text-md text-[#8C1919] dark:text-[#878787] font-semibold">
                Email
              </span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 dark:border-[#626362] hover:border-red-700 focus:border-red-700 dark:bg-[#242424] dark:text-white dark:hover:border-[#51814f] rounded-md placeholder:font-light placeholder:text-red-700"
                name="email"
                id="email"
              />
            </div>
            <div className="py-2">
              <span className="mb-2 text-md text-[#8C1919] dark:text-[#878787] font-semibold">
                Contraseña
              </span>
              <input
                type="password"
                name="pass"
                id="pass"
                className="w-full p-2 border border-gray-300 dark:border-[#626362] rounded-md placeholder:font-light hover:border-red-700 focus:border-red-700 dark:bg-[#242424] dark:text-white dark:hover:border-[#51814f] placeholder:text-gray-500"
              />
            </div>
            <div className="flex justify-between w-full py-4 text-[#44403C] dark:text-[#878787]">
              <div className="mr-24 accent-[#8C1919] dark:accent-[#51814f]">
                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                <span className="text-md">Recordar por 30 días</span>
              </div>
              <span className="font-bold text-md text-[#8C1919] dark:text-[#878787]">
                Olvidé mi contraseña
              </span>
            </div>
            <button className="w-full bg-[#8C1919] text-white p-2 rounded-lg mb-6 hover:bg-[#480707] hover:bg-opacity-90 hover:text-white hover:border hover:border-gray-300 font-semibold dark:bg-[#626362] dark:hover:bg-[#454545]">
              Iniciar Sesión
            </button>
            <div className="text-center text-gray-400 dark:text-gray-500">
              <span className="font-semibold text-[#44403C] dark:text-[#878787]">
                Ó
              </span>
            </div>
            <div className="py-2"></div>
            <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-[#8C1919] hover:bg-opacity-90 hover:text-white dark:bg-[#242424] dark:hover:bg-[#454545] dark:text-white">
              <img
                src="Microsoft_logo.svg"
                alt="Microsoft Icon"
                className="w-6 h-6 inline mr-2"
              />
              Iniciar sesión con AD
            </button>
          </div>
          <div className="relative">
            <div
              className="container-fluid d-flex flex-column align-items-center justify-content-center bg-[#8C1919] dark:bg-[#454545]"
              style={{
                borderRadius: "60px 16px 16px 60px",
                padding: "10px",
                width: "auto",
                height: "auto",
                display: "block",
                alignItems: "center",
              }}
            >
              <img
                src="/logo_blanco.png"
                alt="distrital_log"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  height: "300px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <img
                src="/sede1.png"
                alt="sede1"
                className="img-fluid"
                style={{ maxWidth: "720px", height: "auto", marginTop: "80px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form_init;

