import CounterIcon from "../CounterIcon";
import "./styles.css";

export default function Header() {
  return (
    <header className="DSF-header">
      <div className="DSF-header-content  DSF-container">
        <div>
          <h1>DSFilter</h1>
        </div>
        <div>
          <CounterIcon />
        </div>
      </div>
    </header>
  );
}
