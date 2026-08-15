import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import { useEffect } from "react";

const Requests = () => {
  const requests = useSelector((store) => store.requests);

  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addRequest(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0) return <h1>No Request found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-black text-4xl">Connection Requests</h1>
      {requests.map((request) => {
        const { _id, firstName, lastName, gender, photoUrl, about, age } =
          request.fromUserId;

        return (
          <div
            key={_id}
            className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
          >
            <div>
              <img
                className="w-20 h-20 my-2 rounded-full"
                src={photoUrl}
                alt="photo"
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div>
              <button class="btn btn-active btn-primary m-2">Primary</button>
              <button class="btn btn-active btn-secondary m-2">
                Secondary
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
