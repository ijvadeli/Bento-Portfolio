import { createContext, useContext, useEffect, useState } from "react";

const TimeContext = createContext<Date>(new Date());

export default function TimeProvider({ children }: { children: React.ReactNode }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TimeContext.Provider value={now}>
      {children}
    </TimeContext.Provider>
  );
}

export function useCurrentTime() {
  return useContext(TimeContext);
}