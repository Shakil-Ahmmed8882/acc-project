"use client";
import Container from "@/components/shared/container/Container";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

  const sendEmail = (email) => {
    // Open the default email client with a pre-filled recipient
    window.location.href = `mailto:${email}`;
  };

  const sendEmailToAll = () => {
    // Create a comma-separated list of all emails
    const emailList = emails.map((email) => email.email).join(",");
    // Open the default email client with all emails in the recipient field
    window.location.href = `mailto:${emailList}`;
  };

  return (
    <Container>
      <motion.h3
        className="text-xl text-light-text uppercase border-b-2 border-light-text md:max-w-fit pb-4 md:pb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Admin: Newsletter Subscribers
      </motion.h3>
      {loading ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading...
        </motion.p>
      ) : error ? (
        <motion.p
          className="text-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {error}
        </motion.p>
      ) : (
        <>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {emails.map((email) => (
              <motion.li
                key={email._id}
                className="mb-4 mt-6 p-4 border border-gray-700 rounded-lg bg-gray-800 shadow-md flex justify-between items-center"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-white">Email: {email.email}</p>
                <button
                  onClick={() => sendEmail(email.email)}
                  className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                >
                  Send Email
                </button>
              </motion.li>
            ))}
          </motion.ul>
          <motion.button
            onClick={sendEmailToAll}
            className="mt-6 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
            whileHover={{ scale: 1.05 }}
          >
            Send Email to All
          </motion.button>
        </>
      )}
    </Container>
  );
};

export default UserEmail;
