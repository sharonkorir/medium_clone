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
import Profile from "./views/auth/Profile";
import EditPost from "./views/posts/EditPost";

// const Profile = (lazy) => import("./views/auth/Profile");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="posts"
            element={
              <ProtectedRoute>
                <Posts />
              </ProtectedRoute>
            }
          />

          <Route
            path="single-post/:postId"
            element={
              <ProtectedRoute>
                <SinglePost />
              </ProtectedRoute>
            }
          />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="create-post"
          element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          }
        />
        <Route
          path="edit-post"
          element={
            <ProtectedRoute>
              <EditPost />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
