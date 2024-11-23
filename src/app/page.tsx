"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

const data = [
  "Danawi Liam",
  "Tarjaya",
  "Daruna",
  "Warsoni",
  "John Wick",
  "Hadi PS",
  "Derian Lekso",
];
export default function Home() {
  const [allData, setAllData] = useState<string[]>(data);

  const [search, setSearch] = useState<string>("");

  const handleSearch = () => {
    setAllData(
      data.filter((e) => e.toLowerCase().includes(search.toLowerCase()))
    );
  };

  useEffect(() => {
    console.log(allData);
  });
  return (
    <div className="p-10 flex flex-col">
      {allData.map((e, i) => (
        <p key={i}>{e}</p>
      ))}
      <Input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={() => handleSearch()}>Search</Button>
    </div>
  );
}
