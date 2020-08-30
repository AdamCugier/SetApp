import React from 'react';
import { useParams } from "react-router";

export const Track: React.FC = () => {
  let { trackId } = useParams();
  return (
    <div>
      Track: {trackId}
    </div>
  )
};
