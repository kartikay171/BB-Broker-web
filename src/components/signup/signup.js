const signup = () => {
  return (
    <>
      <section className="fxt-template-layout34 background">
        <div className="container">
          <div className="row">
            <div className="col-lg-8"></div>
            <div className="col-lg-4">
              <div className="fxt-column-wrap justify-content-center">
                <h4 className="sign">
                  Register with Builder Broker{" "}
                  <span className="login">
                    <u>LOGIN</u>
                  </span>{" "}
                </h4>
                <div className="fxt-form">
                  <form>
                    <div className="form-group">
                      <input
                        className="form-control inputsize"
                        id="name"
                        name="name"
                        placeholder="Full Name"
                        required
                      />
                      <p className="MuiFormHelperText-root css-1d1r5q-MuiFormHelperText-root"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control inputsize"
                        id="name"
                        type="name"
                        name="name"
                        placeholder="Company"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control inputsize"
                        id="name"
                        name="name"
                        placeholder="Designation"
                        required
                      />
                      <p className="MuiFormHelperText-root css-1d1r5q-MuiFormHelperText-root"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control inputsize"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                      <p className="MuiFormHelperText-root css-1d1r5q-MuiFormHelperText-root"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control inputsize"
                        id="number"
                        name="number"
                        placeholder="Mobile Number"
                        required
                      />
                      <p className="MuiFormHelperText-root css-1d1r5q-MuiFormHelperText-root"></p>
                    </div>

                    <div className="form-group">
                      <input
                        className="fxt-btn-fill"
                        type="submit"
                        value="REGISTER"
                      />
                    </div>
                  </form>
                </div>
                <div className="fxt-switcher-description31">
                  Have an invitation Code?
                  <a className="fxt-switcher-text">
                    <strong>
                      {" "}
                      <u> Click Here</u>
                    </strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default signup;
