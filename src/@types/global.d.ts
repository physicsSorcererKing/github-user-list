import { FunctionComponent, ReactNode } from 'react';

declare global {
  type FC<P = object> = FunctionComponent<P>;
  type ChildrenProp = { children?: ReactNode };
}
