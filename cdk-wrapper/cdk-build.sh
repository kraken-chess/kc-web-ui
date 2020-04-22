#!/bin/bash
# cdk-build.sh
PROFILE=$1
shift
export CDK_DEFAULT_ACCOUNT=$1
shift
export CDK_DEFAULT_REGION=$1
shift
echo AWS profile used: $PROFILE
cdk --profile $PROFILE "$@"
