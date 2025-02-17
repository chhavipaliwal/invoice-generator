import From from "./from";
import To from "./to";

export default function FromTo() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <From />
      <To />
    </div>
  );
}
