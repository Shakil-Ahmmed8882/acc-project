'use client'

import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

const CloudinaryPage = () => {
  const [uploadPreset] = useState("wunhlfmm"); // Set your Cloudinary upload preset here

  const fetchSignature = async () => {
    const response = await fetch(`/api/sign-upload?upload_preset=${uploadPreset}`);
    const data = await response.json();
    return data;
  };

  return (
    <section className="bg-[#2f2c2c] h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl text-white">Hey I am CloudinaryPage</h1>

      <CldUploadWidget
        uploadPreset={uploadPreset}
        signatureEndpoint="/api/sign-upload"
        signature={({ signature, timestamp }) => ({
          signature,
          timestamp,
        })}
      >
        {({ open }) => {
          return <button className="bg-white p-3 rounded-lg mt-8" onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>
    </section>
  );
};

export default CloudinaryPage;
