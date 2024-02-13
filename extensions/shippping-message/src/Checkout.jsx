import {useState} from 'react';
import {
  reactExtension,
  Text,
  BlockStack,
  List,
  ListItem,
  useDeliveryGroupTarget,
  useApplyAttributeChange,
} from '@shopify/ui-extensions-react/checkout';

// 1. Choose an extension target
export default reactExtension(
  'purchase.checkout.shipping-option-list.render-before',
  () => <Extension />,
);

function Extension() {
  const targetedDeliveryGroup =
    useDeliveryGroupTarget();
  const applyAttributeChange =
    useApplyAttributeChange();
  const [checked, setChecked] = useState(false);

  return (
    // <BlockStack>
    // <Text>Our warehouse cupids are working super hard to deliver.</Text>
    // <Text>Your orders in time for Valentine's Day.</Text>
    // </BlockStack>
    <List spacing="tight" marker='none'>
      <ListItem>Our warehouse cupids are working super hard to deliver</ListItem>
      <ListItem>your orders in time for Valentine's Day.</ListItem>
    </List>

  );

 
}
