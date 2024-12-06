import { formatBigInt } from "../utils/format";


export const Count = ({ count }) => {
    return <p className='fontVw'>{formatBigInt(count)} grammes</p>
  };
  