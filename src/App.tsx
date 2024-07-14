// Component
import { Table } from "@/components";
// Data
import data from "./assets/exchange.json";

function App() {
  return (
    <main>
      <header></header>
      <section>
        <div>
          <Table
            headers={[
              { key: "cur_unit", label: "통화" },
              { key: "cur_nm", label: "통화명" },
              { key: "deal_bas_r", label: "금액" },
            ]}
            content={data}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
