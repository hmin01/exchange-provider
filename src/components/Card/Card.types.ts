// Type
import type { PropsWithChildren } from "react";

export interface CardProps extends PropsWithChildren {
  /** 설명 (= sub title) */
  description?: React.ReactNode;
  /** 카드 푸터 */
  footer?: React.ReactNode;
  /** 제목 */
  title?: React.ReactNode;
}
