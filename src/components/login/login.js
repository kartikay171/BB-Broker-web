const login = () => {
  return (
    <>
      <section className="fxt-template-layout34 background">
        <div className="container">
          <div className="row">
            <div className="col-lg-8"></div>
            <div className="col-lg-4">
              <div className="fxt-column-wrap justify-content-center">
                <h4 className="sign">Sign in to Builder Broker</h4>
                <div className="fxt-form">
                  <form>
                    <div className="form-group">
                      <input
                        className="form-control inputsize"
                        id="email"
                        name="email"
                        placeholder="Enter Email or Mobile Number"
                        required
                      />
                      <p className="MuiFormHelperText-root css-1d1r5q-MuiFormHelperText-root"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control inputsize"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="********"
                      />
                    </div>
                    <div className="form-group">
                      <div className="fxt-switcher-description2 text-right">
                        <a className="fxt-switcher-text">Forgot Password</a>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        className="fxt-btn-fill"
                        type="submit"
                        value="SUBMIT"
                      />
                    </div>
                  </form>
                </div>
                <div className="fxt-switcher-description3">
                  Sign In as
                  <a className="fxt-switcher-text">
                    <strong> Admin</strong>
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
export default login;
