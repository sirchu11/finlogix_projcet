import { memo } from 'react';

const GateComponent = (props: any) => {
  const { is, children } = props;
  return is ? children : null;
}

export default memo(GateComponent);