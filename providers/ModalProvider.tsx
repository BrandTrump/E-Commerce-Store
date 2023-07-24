"use client";
import PreviewModal from "@/components/PreviewModal";
import { useState, useEffect } from "react";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;
  return (
    <>
      <PreviewModal />
    </>
  );
}

export default ModalProvider;
