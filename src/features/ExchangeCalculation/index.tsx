// Component
import { Card, Select } from "@/components";
import { Input } from "@/components/ui/input";
// Data
import categories from "../../assets/category.json";
// Icon
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
// Hook
import { useExchange } from "./ExchangeCalculation.hooks";

export default function ExchangeCalculation() {
  const { onChangeSource, onChangeSourceUnit, onChangeTarget, onChangeTargetUnit, source, sourceUnit, target, targetUnit } = useExchange();

  return (
    <Card title="환율 계산">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-row gap-4 w-full">
          <div className="flex-1">
            <Input className="w-full" onChange={onChangeSource} placeholder="금액(Amount)을 입력해 주세요" type="number" value={source.toString()} />
          </div>
          <div className="basis-40">
            <Select defaultValue={categories[0].value} onValueChange={onChangeSourceUnit} options={categories} value={sourceUnit} />
          </div>
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:px-6">
          <FiArrowRight className="text-xl" />
        </div>
        <div className="flex justify-center py-4 lg:hidden">
          <FiArrowDown className="text-xl" />
        </div>
        <div className="flex gap-4 w-full">
          <div className="flex-1">
            <Input className="w-full" disabled onChange={onChangeTarget} placeholder="금액(Amount)을 입력해 주세요" type="number" value={target.toString()} />
          </div>
          <div className="basis-40">
            <Select defaultValue={categories[0].value} options={categories} />
          </div>
        </div>
      </div>
    </Card>
  );
}
