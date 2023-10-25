import { useParams } from "react-router-dom";

export default function SinglePost() {
  const { postId } = useParams();
  return <div>Post {postId}</div>;
}
