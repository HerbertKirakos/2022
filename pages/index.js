import { Home } from "../src/components/Home";


export default function HomePage({valutes}) {
  return (
   <div>
      <Home valutes={valutes}  />
   </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
  const data = await res.json();

  const valutes = [];
  const charCodes = ['USD', 'EUR', 'CNY'];

  for (let code in data.Valute) {
    if (charCodes.includes(code)) {
        valutes.push(data.Valute[code]);
    }
  }

  return { props: { valutes } }
}


