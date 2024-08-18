import Image from "next/image";
import Header from "./components/Header";
import BLogList from "./components/BLogList";

export default function Home() {
  return (
    <div >
      <Header></Header>
      <BLogList></BLogList>
    </div>
  );
}
