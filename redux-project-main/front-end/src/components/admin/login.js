import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/userSlice";
import "./login.css";

const Login = () => {
  let navigate = useNavigate();
  const user = useSelector((state) => state.user.isLogged);
  // console.log(user);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setUserData({
      ...userData,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setUserData({
      ...userData,
    });
    dispatch(login(userData));
  };
  useEffect(() => {
    if (user) {
      navigate("/main", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, [user]);

  return (
    <form onSubmit={handleSubmit}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="form-outline mb-4">
        <label class="form-label" for="form2Example1">
          Email address
        </label>
        <input
          type="email"
          id="form2Example1"
          class="form-control"
          onChange={handleChange}
        />
      </div>

      <div class="form-outline mb-4">
        <label class="form-label" for="form2Example2">
          Password
        </label>
        <input
          type="password"
          id="form2Example2"
          class="form-control"
          onChange={handleChange}
        />
      </div>

      <div class="row mb-4">
        <div class="col d-flex justify-content-center">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="form2Example31"
              checked
            />
            <label class="form-check-label" for="form2Example31">
              {" "}
              Remember me{" "}
            </label>
          </div>
        </div>

        <div class="col">
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <button type="button" class="btn btn-primary btn-block mb-4" onClick={handleSubmit}>
        Sign in
      </button>

      <div class="text-center">
        <p>
          Not a member? <a href="#!">Register</a>
        </p>
        <p>or sign up with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>
    </form>
  );
};

export default Login;
