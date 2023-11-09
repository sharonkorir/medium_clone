// import { lazy, Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./views/Home";
import Posts from "./views/posts/Posts";
import CreatePost from "./views/posts/CreatePost";
import SinglePost from "./views/posts/SinglePost";
import Error from "./views/Error";
import Login from "./views/auth/Login";
import ProtectedRoute from "./views/ProtectedRoute";
import Register from "./views/auth/Register";
import { useStore } from "./Store";
import Profile from "./views/auth/Profile";

// const Profile = (lazy) => import("./views/auth/Profile");

function App() {
  const user = useStore((state) => state.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout user={user} />}>
          <Route index element={<Home />} />
          <Route
            path="posts"
            element={
              <ProtectedRoute user={user}>
                <Posts />
              </ProtectedRoute>
            }
          />

          <Route
            path="single-post/:postId"
            element={
              <ProtectedRoute user={user}>
                <SinglePost />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute user={user}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route
          path="create-post"
          element={
            <ProtectedRoute user={user}>
              <CreatePost />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
