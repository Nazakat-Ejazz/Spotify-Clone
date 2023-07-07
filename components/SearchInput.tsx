"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { useEffect } from "react";

import useDebounce from "@/hooks/useDebounce";
import Input from "./Input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debounceValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debounceValue,
    };

    const url = queryString.stringifyUrl({
      url: "/search",
      query: query,
    });

    router.push(url);
  }, [debounceValue, router]);

  return (
    <Input
      placeholder="What's on your mode ?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
