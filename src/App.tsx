import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useIPAddress } from "./useIPAddress";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Map from "./components/MapContainer";
import mobileImage from "/src/assets/images/pattern-bg-mobile.png";
import desktopImage from "/src/assets/images/pattern-bg-desktop.png";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 3 * 1000, // in milisecond
//       // refetchOnWindowFocus: false, // default: true
//     },
//   },
// });

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AppContainer />
    </QueryClientProvider>
  );
};

function AppContainer() {
  const [searchInput, setSearchInput] = useState("");
  const [fetchKeyword, setFetchKeyword] = useState("");
  const { data } = useIPAddress(fetchKeyword);
  // const { data, isLoading, isError } = useIPAddress(fetchKeyword);
  const ip = data?.ip;
  const location = `${data?.location?.city}, ${data?.location?.region}`;
  const timezone = `UTC ${data?.location?.timezone}`;
  const isp = data?.isp || "N/A";
  const lat = data?.location?.lat;
  const lng = data?.location?.lng;

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // This will trigger React Query to fetch the API
      setFetchKeyword(searchInput);
    }
  };

  return (
    <div className="relative flex h-screen flex-col">
      <img
        src={mobileImage}
        alt="Background"
        className="block h-auto w-screen md:hidden"
      />
      <img
        src={desktopImage}
        alt="Background"
        className="hidden h-auto w-screen md:block"
      />
      <Map lat={lat} lng={lng} />
      <div className="absolute left-1/2 top-0 z-20 mt-[1.625rem] w-[20.4375rem] -translate-x-1/2 md:mt-8 md:w-[70rem]">
        <h1 className="mb-7 text-center text-[1.625rem] font-medium -tracking-[0.23px] text-white md:mb-8 md:text-[2rem]">
          IP Address Tracker
        </h1>
        <div className="mx-auto mb-6 w-full overflow-hidden rounded-[15px] md:mb-12 md:w-[35rem]">
          <input
            className="h-[3.625rem] w-full px-6 text-[1.125rem] text-very-dark-gray"
            placeholder="IP address or domain"
            value={searchInput}
            onChange={handleSearchInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <article className="flex flex-col gap-2 rounded-[15px] bg-white px-2 py-6 md:flex-row md:py-9">
          <CardElement title="IP ADDRESS" data={ip} />
          <CardElement title="LOCATION" data={location} />
          <CardElement title="TIMEZONE" data={timezone} />
          <CardElement title="ISP" data={isp} />
        </article>
      </div>
    </div>
  );
}

interface CardElementProps {
  title: string;
  data?: string;
}

const CardElement = ({ title, data = "" }: CardElementProps) => {
  return (
    <div className="px-8">
      <p className="mb-2 text-center text-[0.625rem] font-bold tracking-[1.46px] text-dark-gray md:text-left md:text-[0.75rem] md:tracking-[1.75px]">
        {title}
      </p>
      <p className="md:tracking-[-0.23px text-center text-[1.25rem] font-medium -tracking-[0.18px] text-very-dark-gray md:text-left md:text-[1.625rem] md:leading-tight">
        {data}
      </p>
    </div>
  );
};

export default App;
