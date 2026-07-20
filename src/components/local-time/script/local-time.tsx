import { useCurrentTime } from "../script/time-provider";

type Props = {
  timezone: string;
};

export default function LocalTime({ timezone }: Props) {
  const now = useCurrentTime();

  return (
    <span>
      {new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hour: "numeric",
        minute: "2-digit",
        hour12: false,
      }).format(now)}
    </span>
  );
}