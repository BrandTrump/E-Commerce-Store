"use client";

import { useState, useEffect } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "NZD",
});

interface CurrencyProps {
  value?: string | number;
}

function Currency({ value }: CurrencyProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
}

export default Currency;
