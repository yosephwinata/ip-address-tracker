import { ChangeEvent, KeyboardEvent, useState } from "react";
import ResultsCard from "./assets/components/ResultsCard";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // This will trigger React Query to fetch the API
      console.log("fetching:", searchInput);
      // updateFetchKeyword(searchInput.trim());
    }
  };

  return (
    <div className="relative h-screen px-6 pt-[1.625rem]">
      <img
        src="/src/assets/images/pattern-bg-mobile.png"
        alt="Background"
        className="absolute left-0 top-0 -z-10 h-auto w-screen"
      />
      <h1 className="mb-7 text-center text-[1.625rem] font-medium -tracking-[0.23px] text-white">
        IP Address Tracker
      </h1>
      <div className="mb-6 overflow-hidden rounded-[15px]">
        <input
          className="text-very-dark-gray h-[3.625rem] w-full px-6 text-[1.125rem]"
          placeholder="IP address or domain"
          value={searchInput}
          onChange={handleSearchInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <article className="flex flex-col gap-6 rounded-[15px] bg-white pt-[1.625rem]">
        <CardElement title="IP ADDRESS" data="192.212.174.101" />
        <CardElement title="LOCATION" data="Brooklyn, NY 10001" />
        <CardElement title="TIMEZONE" data="UTC -05:00" />
        <CardElement title="ISP" data="SpaceX Starlink" />
      </article>
    </div>
  );
}

interface CardElementProps {
  title: string;
  data: string;
}

const CardElement = ({ title, data }: CardElementProps) => {
  return (
    <div>
      <p className="text-dark-gray mb-2 text-center text-[0.625rem] font-bold tracking-[1.46px]">
        {title}
      </p>
      <p className="text-very-dark-gray text-center text-[1.25rem] font-medium -tracking-[0.18px]">
        {data}
      </p>
    </div>
  );
};

export default App;
