import axios from "axios";
import { BASE_URL } from "../utils/constant";

const Signup = () => {
  const handleSignup = async () => {
    try {
      const res = await axios.post(BASE_URL + "/signup");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Signup</h2>
          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">First Name</span>
            </div>
            <input
              type="text"
              value={(e) => e.targte.value}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label">
              <span className="label-text">Last Name</span>
            </div>
            <input
              type="text"
              value={(e) => e.targte.value}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              value={(e) => e.targte.value}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              value={(e) => e.targte.value}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <div>
            <button
              className="btn btn-active btn-success"
              type="submit"
              value="Submit"
              onClick={handleSignup}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
