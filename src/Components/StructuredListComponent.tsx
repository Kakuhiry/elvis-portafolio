import React, { ReactElement } from "react";
import "carbon-components/css/carbon-components.min.css";
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from "carbon-components-react";
interface Props {}

export default function StructuredListComponent({}: Props): ReactElement {
  return (
    <div>
      <StructuredListWrapper>
        <StructuredListHead>
          <StructuredListRow head>
            i<StructuredListCell head>ColumnA</StructuredListCell>
            <StructuredListCell head>ColumnB</StructuredListCell>
            <StructuredListCell head>ColumnC</StructuredListCell>
          </StructuredListRow>
        </StructuredListHead>
        <StructuredListBody>
          <StructuredListRow>
            <StructuredListCell noWrap>Row 1</StructuredListCell>
            <StructuredListCell>Row 1</StructuredListCell>
            <StructuredListCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
              magna, finibus id tortor sed, aliquet bibendum augue. Aenean
              posuere sem vel euismod dignissim. Nulla ut cursus dolor.
              Pellentesque vulputate nisl a porttitor interdum.
            </StructuredListCell>
          </StructuredListRow>
          <StructuredListRow>
            <StructuredListCell noWrap>Row 2</StructuredListCell>
            <StructuredListCell>Row 2</StructuredListCell>
            <StructuredListCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
              magna, finibus id tortor sed, aliquet bibendum augue. Aenean
              posuere sem vel euismod dignissim. Nulla ut cursus dolor.
              Pellentesque vulputate nisl a porttitor interdum.
            </StructuredListCell>
          </StructuredListRow>
        </StructuredListBody>
      </StructuredListWrapper>
    </div>
  );
}
