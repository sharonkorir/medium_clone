import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./views/Home";
import Posts from "./views/posts/Posts";
import CreatePost from "./views/posts/CreatePost";
import SinglePost from "./views/posts/SinglePost";
import Error from "./views/Error";
import Login from "./views/auth/Login";
import ProtectedRoute from "./views/ProtectedRoute";
import Register from "./views/auth/Register";
import { useAuthStore } from "./Store";
import Profile from "./views/auth/Profile";
function App() {
  const user = useAuthStore((state) => state.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="profile"
          element={
            <ProtectedRoute user={user}>
              <Profile user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<SharedLayout user={user} />}>
          <Route index element={<Home />} />
          <Route
            path="posts"
            element={
              <ProtectedRoute user={user}>
                <Posts user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="create/post"
            element={
              <ProtectedRoute user={user}>
                <CreatePost user={user} />
              </ProtectedRoute>
            }
          />

          <Route
            path="post/:postId"
            element={
              <ProtectedRoute user={user}>
                <SinglePost user={user} />
              </ProtectedRoute>
            }
          />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
