const Form_init = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#edeef1] border border-[#d7dbe0]">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-2 md:p-11">
            <span className="mb-3 text-4xl text-[#8C1919] text-center font-bold">
              Bienvenido
            </span>
            <span className="text-[#44403C] mb-3 font-semibold text-center">
              Por favor ingresar tu correo
            </span>
            <div className="py-4">
              <span className="mb-2 text-md text-[#8C1919] font-semibold">
                Email
              </span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300  hover:border-red-700 focus:border-red-700 rounded-md placeholder:font-light placeholder:text-red-700"
                name="email"
                id="email"
              />
            </div>
            <div className="py-2">
              <span className="mb-2 text-md text-[#8C1919] font-semibold">
                Contraseña
              </span>
              <input
                type="password"
                name="pass"
                id="pass"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light  hover:border-red-700 focus:border-red-700 placeholder:text-gray-500"
              />
            </div>
            <div className="flex justify-between w-full py-4 text-[#44403C]">
              <div className="mr-24 accent-[#8C1919]">
                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                <span className="text-md">Remember for 30 days</span>
              </div>
              <span className="font-bold text-md text-[#8C1919]">
                Forgot password
              </span>
            </div>
            <button className="w-full bg-[#8C1919] text-white p-2 rounded-lg mb-6 hover:bg-[#8C1919] hover:bg-opacity-90 hover:text-white hover:border hover:border-gray-300 font-semibold">
              Iniciar Sesión
            </button>
            <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-[#8C1919] hover:bg-opacity-90 hover:text-white">
              <img
                src="google.svg"
                alt="Google Icon"
                className="w-6 h-6 inline mr-2"
              />
              Sign in with Google
            </button>
            <div className="text-center text-gray-400">
              <span className="font-bold text-[#8C1919]">Sign up for free</span>
            </div>
          </div>
          <div className="relative">
            <div
              className="container-fluid d-flex flex-column align-items-center justify-content-center"
              style={{
                backgroundColor: "#8C1919",
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
    </>
  );
};

export default Form_init;
