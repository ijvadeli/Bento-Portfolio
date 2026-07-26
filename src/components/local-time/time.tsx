import TimeProvider from "./script/time-provider";
import LocalTime from "./script/local-time";

export default function Time() {
  return (
    <div className="h-full flex flex-col items-center justify-center py-4">
      <div className="inline-flex items-center gap-1.5">
        <div className="inline-grid *:[grid-area:1/1]">
          <div className="status status-info animate-ping"></div>
          <div className="status status-info"></div>
        </div>{" "}
        Local Time
      </div>
      <h1 className="text-3xl">
        <TimeProvider>
          <LocalTime timezone="Europe/Amsterdam" />
        </TimeProvider>
      </h1>
    </div>
  );
}
