import { writeToClipboard } from "@/lib/window-utils";
import { useState } from "react";

import styles from "./styles.module.scss";

export default function Contact({ contact }: any) {
  const [copyEmailLabel, setCopyEmailLabel] = useState("Copy Email");

  const handleCopyEmail = (text: string) => {
    writeToClipboard(text);
    setCopyEmailLabel("Email Copied");
  };
  return (
    <section className={styles.contact}>
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
