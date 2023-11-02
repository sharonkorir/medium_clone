import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      editorsPick: [
        {
          id: 1,
          author: "Freecodecamp",
          title: "Persisting data in React apps",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor neque vitae tempus quam. Id velit ut tortor pretium. Pulvinar neque laoreet suspendisse interdum. Sed augue lacus viverra vitae congue eu consequat ac. Mattis rhoncus urna neque viverra. Consequat ac felis donec et. Suspendisse sed nisi lacus sed viverra tellus in. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Et netus et malesuada fames ac turpis egestas maecenas. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. In cursus turpis massa tincidunt dui ut ornare. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Varius vel pharetra vel turpis nunc eget. Enim nec dui nunc mattis enim ut. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Consectetur a erat nam at lectus urna. Scelerisque varius morbi enim nunc faucibus a",
        },
        {
          id: 2,
          author: "John Smigla",
          title: "Testing your dummy data",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor neque vitae tempus quam. Id velit ut tortor pretium. Pulvinar neque laoreet suspendisse interdum. Sed augue lacus viverra vitae congue eu consequat ac. Mattis rhoncus urna neque viverra. Consequat ac felis donec et. Suspendisse sed nisi lacus sed viverra tellus in. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Et netus et malesuada fames ac turpis egestas maecenas. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. In cursus turpis massa tincidunt dui ut ornare. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Varius vel pharetra vel turpis nunc eget. Enim nec dui nunc mattis enim ut. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Consectetur a erat nam at lectus urna. Scelerisque varius morbi enim nunc faucibus a",
        },
      ],
      posts: [
        { id: 1, title: "to be deleted", content: "more dummy content" },
        { id: 2, title: "to be deleted also", content: "more dummy content" },
      ],
      currentUser: null,
      setCurrentUser: (currentUser) => set({ currentUser }),
      //clear user to logout
      logout: () =>
        set(() => {
          return {
            currentUser: null,
          };
        }),
    }),
    { name: "user-storage" }
  )
);
