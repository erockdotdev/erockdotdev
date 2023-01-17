import MySpaceCard from "@/components/layouts/MySpaceCard";
import { writeToClipboard } from "@/lib/window-utils";
import { useState } from "react";

export default function Contact({ contact }: any) {
  const [copyEmailLabel, setCopyEmailLabel] = useState("Copy Email");

  const handleCopyEmail = (text: string) => {
    writeToClipboard(text);
    setCopyEmailLabel("Email Copied");
  };
  return (
    <section style={{ display: "flex", justifyContent: "space-between" }}>
      <span>
        email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </span>
      <button
        onClick={() => {
          handleCopyEmail(contact.email);
        }}
      >
        {copyEmailLabel}
      </button>
    </section>
  );
}
