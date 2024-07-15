import { ContainerProps } from "./Container.types";

export default function Container({ children }: ContainerProps) {
  return <section className="mx-auto px-6 md:max-w-[768px] lg:max-w-[1024px] sm:max-w-[576px] xl:max-w-[1280px]">{children}</section>;
}
