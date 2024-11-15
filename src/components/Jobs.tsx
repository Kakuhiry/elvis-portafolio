import React, { ReactElement } from "react";
import Curbo from "../jobs/Curbo";
import MediaRevolution from '../jobs/MediaRevolution'
import Lemontech from '../jobs/Lemontech'
import Naxmek from '../jobs/Naxmek'
import DigitalHuman from '../jobs/DigitalHuman'

export default function Jobs(): ReactElement {
  return (
    <>

    <Naxmek/>
    <DigitalHuman />
    <Lemontech/>
    <Curbo />
    <MediaRevolution />
    
    </>
  );
}
