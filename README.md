# Shopgate Engage - Separate Deposit from Price Extension

This extension will removed deposit amount from items prices for products that have a triggering product property. A hint will be added to the product indicating that a deposit will be added. The total deposit amount will be added as a cart sub total line.

## Configuration
triggerProductProperties
```json
{
  "triggerProductProperties": [{"label": "battery_deposit", "value": "yes", "depositAmount": 7.99}]
}
```
depositLabel
```json
{
  "depositLabel": "Battery Deposit"
}
```
## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## License

Shopgate Connect - Extension Boilerplate is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.
