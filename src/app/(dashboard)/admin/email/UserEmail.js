"use client";
import Container from "@/components/shared/container/Container";
import React, { useEffect, useState } from "react";

const UserEmail = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await fetch("/api/email", {
          method: "GET",
        });
        const result = await response.json();
        if (result.success) {
          setEmails(result.data);
        } else {
          setError(result.message);
        }
      } catch (err) {
        setError("An error occurred while fetching emails.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  return (
    <Container>
      <h3 className="text-sm text-light-text uppercase border-b-2 border-light-text md:max-w-fit pb-4 md:pb-8 text-center">
        Admin: Newsletter Subscribers
      </h3>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul>
          {emails.map((email) => (
            <li key={email._id} className="mb-2">
              <p className="text-white">Email: {email.email}</p>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default UserEmail;
