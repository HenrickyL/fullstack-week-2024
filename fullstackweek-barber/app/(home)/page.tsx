import Header from "../_components/Header";
import { BookingItem } from "../_components/booking-item";
import {DateUtils} from '../_middleware'
import { Search } from "./_components/search";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Miguel!</h2>
        <p className="text-sm">{DateUtils.format(new Date(), `EEEE',' dd 'de' MMMM`)}</p>
      </div>
      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold  ">Agendamentos</h2>
        <BookingItem />
      </div>
    </div>
  );
}
