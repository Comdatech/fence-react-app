import { Tooltip } from '@chakra-ui/react';
import React from 'react'

const Tooltips = ({label, element}) => {
  return (
    <>
      <Tooltip
        label={label}
        placement="right"
        hasArrow
        fontWeight={600}
        border="1px solid #6f1f2e"
      >
        {element}
      </Tooltip>
    </>
  );
}

export default Tooltips