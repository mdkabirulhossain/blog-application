import Image from "next/image";
import Header from "./components/Header";
import BLogList from "./components/BLogList";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div >
      <Header></Header>
      <BLogList></BLogList>
      <Footer></Footer>
    </div>
  );
}
