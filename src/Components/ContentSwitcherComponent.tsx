import React, { ReactElement } from "react";
import "carbon-components/css/carbon-components.min.css";
import "./ContentSwitcherComponent.css";

import { ContentSwitcher, Switch } from "carbon-components-react";

interface Props {
  passPage: (a: number) => void;
}
export default function ContentSwitcherComponent({
  passPage,
}: Props): ReactElement {
  return (
    <div className='openSwitch' style={{width: '100%', height: '40%', marginTop: 0, marginBottom: 0, marginLeft: 'auto', marginRight: 'auto'}}>
      <ContentSwitcher style={{width: '100%'}} onChange={() => {}}>
        <Switch
          onClick={() => passPage(1)}
          style={{ justifyContent: "center" }}
          name="one"
          text="First section"
        />
        <Switch
          onClick={() => passPage(2)}
          style={{ justifyContent: "center" }}
          name="two"
          text="Second section"
        />
        <Switch
          onClick={() => passPage(3)}
          style={{ justifyContent: "center" }}
          name="three"
          text="Third section"
        />
      </ContentSwitcher>
    </div>
  );
}
