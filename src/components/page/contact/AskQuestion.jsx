"use client";
import Container from "@/components/shared/container/Container";
import Button from "./Button";
import { useState } from "react";
import Modal from "./Modal";

const AskQuestion = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <Container>
      <div className="grid place-items-center my-10 py-24  mt-40">
        <h2 className="text-5xl font-semibold text-white">ASK US A QUESTION</h2>
        <Button openModal={openModal} />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </Container>
  );
};

export default AskQuestion;
