import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact Direct Servicing Initiative for private loan servicing in Southern California. Call (626) 796-1680 or visit us at 2648 E. Workman Ave., West Covina, CA 91791.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
