import { Link, Outlet } from "react-router-dom";
import { Nav } from "../nav/nav";

function Schedule() {
  const shedules = [1, 2, 3];

  return (
    <>
      <Nav />

      <Link to={`/SchedulePage/${"sai"}`}>About</Link>
      <div>
        {shedules.map((shedule) => (
          <Link to={`/SchedulePage/${shedule}`} key={shedule}>
            Profile
          </Link>
        ))}
      </div>

      <Outlet />
    </>
  );
}

export default Schedule;
