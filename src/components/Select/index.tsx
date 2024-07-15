// ShadcnUI Component
import { SelectContent, SelectItem, SelectTrigger, SelectValue, Select as ShadcnSelect } from "../ui/select";
// Type
import type { SelectOptionProps, SelectProps } from "./Select.types";

export default function Select({ defaultValue, onValueChange, options, value }: SelectProps) {
  return (
    <ShadcnSelect defaultValue={defaultValue} onValueChange={onValueChange} value={value}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="통화 단위를 선택해 주세요" />
      </SelectTrigger>
      {options && (
        <SelectContent>
          {options.map(
            (elem: SelectOptionProps): JSX.Element => (
              <SelectItem className="data-[state='checked']:bg-blue-600 data-[state='checked']:text-white" key={elem.value} value={elem.value}>
                {elem.label}
              </SelectItem>
            )
          )}
        </SelectContent>
      )}
    </ShadcnSelect>
  );
}
