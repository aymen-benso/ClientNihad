"use client";
import { Dashboard } from "@/components/dashboard";
import Image from "next/image";

export default function Home() {
  return ( 
    <Dashboard csvFilePath="Industrie_FINALE.csv" csvModelPath="industrie_finale_model.pkl" />

  );
}
