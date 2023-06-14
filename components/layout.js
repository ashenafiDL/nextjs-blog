import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Layout({ children, home }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // TODO - add skeleton feature instead of returning null
    return null;
  }

  function changeTheme() {
    const el = document.getElementById("btn");
    setTheme(theme === "light" ? "dark" : "light");
    el.innerText = theme === "light" ? "Theme: 🌙" : "Theme: ☀";
  }

  return (
    <div className="bg-white text-slate-800 dark:bg-slate-800 dark:text-white">
      <div className="mx-auto flex min-h-screen max-w-lg flex-col justify-between px-4 py-8 md:max-w-lg lg:max-w-xl lg:px-0 xl:max-w-2xl">
        <main>{children}</main>
        <footer className="flex flex-row justify-between pt-20">
          <div className="flex w-1/2 flex-row justify-between">
            <a href="https://twitter.com">
              <span>↗ follow me on twitter</span>
            </a>
            <a>
              <span>↗ contact me by email</span>
            </a>
          </div>
          <button id="btn" className="duration-200" onClick={changeTheme}>
            Theme: ☀
          </button>
        </footer>
      </div>
    </div>
  );
}
