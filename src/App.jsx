import Navbar from "./component/Navbar";
import Profile from "./component/Profile";
import RepoCard from "./component/RepoCard";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      <Navbar />
      
      <Profile />

      <main className="grid grid-cols-3 gap-8 px-20 pt-8">
        <RepoCard name="portfolio" description="My personal page built with React." language="JavaScript" commits="48 commits" />
        <RepoCard name="todo-api" description="A small REST API for a to-do list." language="Java" commits="31 commits" />
        <RepoCard name="dotfiles" description="My terminal and editor settings." language="Shell" commits="12 commits" />
      </main>

      <footer className="mt-auto bg-[#222222] px-20 py-6 text-center text-xl text-[#FAF3E1]">
        <p>Every profile on DevHub is public.</p>
      </footer>
    </div>
  );
}

export default App;
