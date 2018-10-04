import { storiesOf } from "@storybook/react";
import * as React from "react";

import OrderShippingMethodEditDialog from "../../../orders/components/OrderShippingMethodEditDialog";
import {
  shippingMethods
} from "../../../orders/fixtures";
import Decorator from "../../Decorator";

storiesOf("Orders / OrderShippingMethodEditDialog", module)
  .addDecorator(Decorator)
  .add("default", () => (
    <OrderShippingMethodEditDialog
      onClose={undefined}
      onSubmit={undefined}
      open={true}
      shippingMethod={null}
      shippingMethods={shippingMethods}
    />
  ));
