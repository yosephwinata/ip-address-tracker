const ResultsCard = () => {
  return (
    <article className="flex flex-col gap-6 rounded-[15px] bg-white pt-[1.625rem]">
      <CardElement title="IP ADDRESS" data="192.212.174.101" />
      <CardElement title="LOCATION" data="Brooklyn, NY 10001" />
      <CardElement title="TIMEZONE" data="UTC -05:00" />
      <CardElement title="ISP" data="SpaceX Starlink" />
    </article>
  );
};

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

export default ResultsCard;
