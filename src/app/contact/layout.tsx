import { Meta } from "@once-ui-system/core";
import { baseURL, contact, person, about } from "@/resources";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: contact.title,
    description: contact.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(contact.title)}`,
    path: contact.path,
  });
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
