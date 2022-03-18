import { Link } from "remix";

export default function AdminIndex() {

  return (
    <div>
      <Link to="new">Create a New Post</Link>
    </div>
  );
}
