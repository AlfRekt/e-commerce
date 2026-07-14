import { useState, useEffect } from "react";

async function hashEmail(email) {
  const normalized = email.trim().toLowerCase();
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(normalized));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function Gravatar({ email, size = 30, className = "" }) {
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (email) hashEmail(email).then(setHash);
  }, [email]);

  if (!hash) return null;

  return (
    <img
      src={`https://www.gravatar.com/avatar/${hash}?s=${size * 2}&d=identicon`}
      width={size}
      height={size}
      alt="avatar"
      className={className}
    />
  );
}

export default Gravatar;