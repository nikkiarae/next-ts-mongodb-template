import { ReactNode } from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next App Blog",
  description: "Generated by create next app",
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div>
        <header>
          <h1>Blog Global Header</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>Blog Global Footer</p>
        </footer>
    </div>
  );
}
