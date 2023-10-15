# nopCommerce UI Automation

nopCommerce website UI automation using WebdriverIO.

Project URL: https://demo.nopcommerce.com/

Packages: wdio, mocha, node-xlsx, allure-reporter.

Required Node 16 to latest version. And Java 8 or higher version to run allure-commanline.



## Authors

- [@hridoydas](https://github.dev/hridoydas/)


## Documentation

To run the automation user need to have Node version 16 or higher and Java version 8 or higher.

This is a page object model based automation framework. Where I used WebdriverIO for automation client liabrary and Mocha as framework.

Moreover, this one is a data driven based framework. Where I used node-xlsx package to read data from a speadsheet and write data into this. 

To get the report after completing the run, I used Allure reporter. This helps to generate report and take screenshot when a steps become failed.

To find any resource or data related information from resources folder with a dataFile.xlsx file.

## Run Locally

Clone the project. 
```bash
  git clone https://github.com/hridoydas/nopCommerce-automation.git
```

Then Go to the project directory and select the branch nopCommerce-automation.

```bash
  cd nopCommerce-automation
```

Install dependencies

```bash
  npm install
```

Run test for Feature-1: Nopcommerce registration feature Test

```bash
  npm run registration
```

Run test for Feature-2: Nopcommerce login feature Test

NOTE: Create a user with Email: hridoy@yopmail.com and Password: Test@@00

```bash
  npm run login
```

Run test for Feature-3: Nopcommerce place order feature Test

```bash
  npm run placeOrder
```

Run the all the features as suite

```bash
  npm run nopCommerce
```

Run all the feature parallely

```bash
  npm run test
```

Get report

```bash
  npm run getReport
```

## Demo

Feature-1: Nopcommerce registration feature Test.

URL: https://drive.google.com/file/d/15dcSjE1mj1hRvMjWboz4zqjbr8PPwhQE/view?usp=sharing

Feature-2: Nopcommerce login feature Test.

URL: https://drive.google.com/file/d/1DWLhmH4fDDFzo_HoQkGCq2b4OWsKyQif/view?usp=drive_link

Feature-3: Nopcommerce place order feature Test.

URL: https://drive.google.com/file/d/1QnDthsfU-xZ2Gu9aoDE75Q33TOmMOY7r/view?usp=sharing

Full suite journey and get allure report.

URL: https://drive.google.com/file/d/1RaTPeka7LPpXMHGQoj6a2vzeJ6e1H2dC/view?usp=sharing

