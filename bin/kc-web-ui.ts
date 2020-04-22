#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import * as dotenv from "dotenv";
import { KcWebUiStack } from '../lib/kc-web-ui-stack';

// configure .env file environment variables
dotenv.config();

const environment: cdk.Environment = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};
const isEnvironmentProvided: boolean =
  environment.account != undefined && environment.region != undefined;

console.log(
  "CDK Environment configurations: Account=%s, Region=%s",
  environment.account,
  environment.region
);

if (!isEnvironmentProvided) {
  throw Error(
    "CDK Environment could not be properly configured. \
    Please ensure Environment Variables are configured correctly: \
    <CDK_DEFAULT_ACCOUNT, CDK_DEFAULT_REGION>"
  );
}

const app = new cdk.App();
new KcWebUiStack(app, 'KrakenChessWebsiteStack', {
    env: environment
});
