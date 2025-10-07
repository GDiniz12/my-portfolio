import ContentAbout from "./components/ContentAbout/ContentAbout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Gabriel Diniz",
  description: "This is the about me page of Gabriel Diniz's portfolio."
};

export default function PageAbout() {
    return <ContentAbout />;
}