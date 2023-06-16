"use client";

import qs from "query-string";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Input from "./Input";

interface SearchInputProps {}

const SearchInput: React.FC<SearchInputProps> = ({}) => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    const query = { title: debouncedValue };
    const url = qs.stringifyUrl({ url: "/search", query });
    router.push(url);
  }, [debouncedValue, router]);

  return <Input placeholder="What do you want to listen to?" value={value} onChange={(e) => setValue(e.target.value)} />;
};

export default SearchInput;
