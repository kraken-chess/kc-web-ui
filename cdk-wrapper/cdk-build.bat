@echo off
rem cdk-build.bat
set profile=%1
shift
set CDK_DEFAULT_ACCOUNT=%1
shift
set CDK_DEFAULT_REGION=%1
shift
cdk --profile %*
