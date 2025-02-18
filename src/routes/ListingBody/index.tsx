import Filter from "../../components/Filter";
import Header from "../../components/Header";
import Listing from "../../components/Listing";
import "./styles.css";

export default function ListingBody() {
  return (
    <>
      <Header />
      <main>
        <div>
          <Filter />
        </div>
        <div className="DSF-main">
        <Listing />
        </div>
      </main>
    </>
  );
}
