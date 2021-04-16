import React, { ReactElement } from "react";
import { Breadcrumb, BreadcrumbItem } from "carbon-components-react";
import './BreadCrumComponent.css'

interface Props {}

export default function BreadCrumComponent({}: Props): ReactElement {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/#">Breadcrumb 1</a>
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
        <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}
