import InputField from "./assets/components/InputField";
import ResultsCard from "./assets/components/ResultsCard";

function App() {
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
      <InputField />
      <ResultsCard />
    </div>
  );
}

export default App;
