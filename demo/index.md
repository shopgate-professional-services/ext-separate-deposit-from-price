# Demo

## Separate Deposit Fee from Product Price
The Separate Deposit Fee from Product Price configuration is set up in the connect admin. All configurations are required Example configuration for the following images: 

#### Merchant Admin Config:
```json
{
  "triggerProductProperties": [{"label": "battery_deposit", "value": "yes", "depositAmount": 7.99}],
  "depositLabels": {
    "label": "Plus {deposit} battery deposit",
    "cartLabel": "Battery deposit"
  }
}
```

#### GMD Examples:
![](productDetailGMD.png)
![](productListGMD.png)
![](siiderGMD.png)
![](favoritesGMD.png)
![](cartGMD.png)

#### iOS Examples:
![](productDetailIos.png)
![](productListIos.png)
![](sliderIos.png)
![](favoritesIos.png)
![](cartIos.png)
