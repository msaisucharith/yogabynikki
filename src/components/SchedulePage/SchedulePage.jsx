import { useParams } from "react-router-dom";

function SchedulePage() {
  const prrams = useParams();

  return <div>Schedule pages${prrams}</div>;
}

export default SchedulePage;
