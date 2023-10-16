"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

//
import { AiFillBug } from "react-icons/ai";

export default function NavBar() {
  // link items
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  const currentPath = usePathname();

  return (
    <nav className="flex gap-5 py-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex gap-5">
        {links.map((link) => {
          return (
            <Link
              key={link.href}
              href={link.href}
              className={classNames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
            >
              {link?.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
