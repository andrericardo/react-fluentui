import * as React from "react";
import {
  Stack,
  IStackTokens,
  Breadcrumb,
  IBreadcrumbItem,
  Pivot,
  PivotItem,
  IStyleSet,
  ILabelStyles,
  Label,
} from "@fluentui/react";
import { DetailsListDocumentsExample } from "./DetailsListDocumentsExample";

const numericalSpacingStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: "l1 l2", // https://github.com/microsoft/fluentui/blob/dab45a2afe609709735b9b6e604a1af40d50e809/packages/react/src/components/Stack/StackUtils.test.ts#L103-L104
};

const itemsWithHref: IBreadcrumbItem[] = [
  // Normally each breadcrumb would have a unique href, but to make the navigation less disruptive
  // in the example, it uses the breadcrumb page as the href for all the items
  {
    text: "Level title",
    key: "t1",
    href:
      "https://developer.microsoft.com/en-us/fluentui#/controls/web/breadcrumb",
    target: "_blank",
  },
  { text: "Level title", key: "t2" },
  {
    text: "Page header",
    key: "pageHeader",
    href:
      "https://developer.microsoft.com/en-us/fluentui#/controls/web/breadcrumb",
    target: "_blank",
    isCurrentItem: true,
  },
];

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: {},
};

export const PageContent: React.FunctionComponent = () => {
  return (
    <Stack
      verticalFill
      tokens={numericalSpacingStackTokens}
      styles={{
        root: {
          backgroundColor: "LightPink", // header blue
        },
      }}
    >
      <Stack>
        <Stack.Item>
          <Breadcrumb
            items={itemsWithHref}
            ariaLabel="Breadcrumb with items rendered as links"
            overflowAriaLabel="More links"
          />
        </Stack.Item>
        <Stack.Item>
          <Pivot aria-label="Basic Pivot Example">
            <PivotItem
              headerText="Tab"
              headerButtonProps={{
                "data-order": 1,
                "data-title": "Tab Title",
              }}
            >
              <DetailsListDocumentsExample />
            </PivotItem>
            <PivotItem headerText="Tab">
              <Label styles={labelStyles}>Pivot #2</Label>
            </PivotItem>
            <PivotItem headerText="Tab">
              <Label styles={labelStyles}>Pivot #3</Label>
            </PivotItem>
          </Pivot>
        </Stack.Item>
      </Stack>
    </Stack>
  );
};
