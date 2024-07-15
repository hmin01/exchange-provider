// Component
import { Container, Table } from "@/components";
// Data
import data from "./assets/exchange.json";
import ExchangeCalculation from "./features/ExchangeCalculation";

function App() {
  return (
    <main>
      <header></header>
      <Container>
        <ExchangeCalculation />
        <Table
          headers={[
            { key: "cur_unit", label: "통화" },
            { key: "cur_nm", label: "통화명" },
            { key: "deal_bas_r", label: "금액" },
          ]}
          content={data}
        />
      </Container>
    </main>
  );
}

export default App;
