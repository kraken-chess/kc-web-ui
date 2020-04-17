#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { KcWebUiStack } from '../lib/kc-web-ui-stack';

const app = new cdk.App();
new KcWebUiStack(app, 'KcWebUiStack');
