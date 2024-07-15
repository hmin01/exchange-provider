export interface SelectOptionProps {
  /** 라벨 */
  label: string;
  /** 값 */
  value: string;
}

export interface SelectProps {
  /** 기본 값 */
  defaultValue?: string;
  /** 값 변경 이벤트 핸들러 */
  onValueChange?: (value: string) => void;
  /** 옵션 데이터 */
  options: SelectOptionProps[];
  /**  */
  value?: string;
}
