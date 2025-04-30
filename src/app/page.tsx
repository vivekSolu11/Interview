import HomePage from "@/components/Home/Homepage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Homepage",
};

export default function Home() {
  return <HomePage />;
}
