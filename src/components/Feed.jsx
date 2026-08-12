import { useSelector } from "react-redux";

function Feed() {
  const user = useSelector((store) => store.user);
  return (
    <>
      <div>hello {user.firstName}</div>
    </>
  );
}

export default Feed;
