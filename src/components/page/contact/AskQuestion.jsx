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
    <Container className={'!pt-0'}>
      <div className=" flex flex-col items-center justify-center h-80">
        <h2 className="text-3xl
         md:text-4xl lg:text-5xl text-white font-riviera tracking-[3.84px] font-normal whitespace-nowrap">ASK US A QUESTION</h2>
        <Button openModal={openModal} />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </Container>
  );
};

export default AskQuestion;
