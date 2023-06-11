import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { FormEvent, FormEventHandler, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props{
    onSearch : (searchText: string) => void;
}

const SearchInput = ({ onSearch } : Props) => {
    const handleSubmit  = (event: FormEvent) => {
        event.preventDefault();
        if(ref.current) onSearch(ref.current.value);
    } 

    const ref = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input  ref={ref}  borderRadius={20} placeholder="Search games..." variant="filled" />
        </InputGroup>
    </form>
  );
};

export default SearchInput;
