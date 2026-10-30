import HackerText from "./HackerText";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { mainNav, type NavItem } from "../../lib/navigation";
import { useScrollToSection } from "../hooks/useScrollToSection";

function navPillClass(isActive: boolean) {
  return `neo-pill ${isActive ? "neo-pill-active" : ""}`;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { goToSection } = useScrollToSection();

  const handleNavClick = (item: NavItem) => {
    setMenuOpen(false);
    if (item.type === "section") {
      goToSection(item.sectionId);
    }
  };

  const isSectionActive = (sectionId: string) =>
    location.pathname === "/" && location.hash === `#${sectionId}`;

  return (
    <header className="sticky top-0 z-50 border-b-2 border-brand-ink bg-brand-header shadow-brutal-lg">
      <div className="flex w-full items-center justify-between gap-4 py-5 pl-4 pr-6 md:pl-6 md:pr-8">
        <Link
          to="/"
          className="neo-badge min-w-0 text-sm sm:text-base lg:text-lg"
          onClick={() => setMenuOpen(false)}
        >
          <span className="neo-badge-inner">
            <HackerText text="< Hamza Momin />" />
          </span>
        </Link>

        <nav className="ml-auto hidden flex-wrap items-center justify-end gap-3 lg:flex lg:gap-4">
          {mainNav.map((item) =>
            item.type === "route" ? (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => navPillClass(isActive)}
              >
                {item.label}
              </NavLink>
            ) : (
              <button
                key={item.sectionId}
                type="button"
                onClick={() => handleNavClick(item)}
                className={navPillClass(isSectionActive(item.sectionId))}
              >
                {item.label}
              </button>
            )
          )}
        </nav>

        <button
          type="button"
          className="neo-icon-btn lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t-2 border-brand-ink px-4 py-5 sm:px-6 lg:hidden">
          <ul className="neo-panel flex flex-col gap-3 p-4">
            <li>
              <Link
                to="/"
                className={`neo-pill w-full ${location.pathname === "/" ? "neo-pill-active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            {mainNav.map((item) =>
              item.type === "route" ? (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${navPillClass(isActive)} w-full`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ) : (
                <li key={item.sectionId}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item)}
                    className={`${navPillClass(isSectionActive(item.sectionId))} w-full`}
                  >
                    {item.label}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
