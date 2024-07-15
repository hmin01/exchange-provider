// React hook
import { useCallback, useState } from "react";
// Type
import type { ChangeEvent } from "react";

export function useExchange() {
  const [source, setSource] = useState<number>(0);
  const [sourceUnit, setSourceUnit] = useState<string>("");
  const [target, setTarget] = useState<number>(0);
  const [targetUnit, setTargetUnit] = useState<string>("");

  const onChangeSource = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => setSource(Number(target.value)), []);
  const onChangeSourceUnit = useCallback((value: string) => setSourceUnit(value), []);
  const onChangeTarget = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => setTarget(Number(target.value)), []);
  const onChangeTargetUnit = useCallback((value: string) => setTargetUnit(value), []);

  return {
    onChangeSource,
    onChangeSourceUnit,
    onChangeTarget,
    onChangeTargetUnit,
    source,
    sourceUnit,
    target,
    targetUnit,
  };
}
