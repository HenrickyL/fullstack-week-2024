import Header from "../_components/Header";
import {DateUtils} from '../_middleware'
export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Miguel!</h2>
        <p className="text-sm">{DateUtils.format(new Date(), `EEEE',' dd 'de' MMMM`)}</p>
      </div>
    </div>
  );
}
