import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3Deploy from '@aws-cdk/aws-s3-deployment';
import { BucketAccessControl } from '@aws-cdk/aws-s3';
import { RemovalPolicy } from '@aws-cdk/core';

export class KcWebUiStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const s3WebsiteBucket = new s3.Bucket(this, 'KrakenChessWebsiteBucket', {
      bucketName: "kraken-chess-ui-website",
      // TODO: add CORS and be more restrictive once we have JS
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.RETAIN,
      websiteErrorDocument: 'error.html',
      websiteIndexDocument: 'index.html',
    });

    // export bucket name
    new cdk.CfnOutput(this, 'KrakenChessCFNOutputBucket', { value: s3WebsiteBucket.bucketName });

    // deploy local assets
    new s3Deploy.BucketDeployment(this, 'DeployKrakenChessWebsite', {
      sources: [
        s3Deploy.Source.asset('./website-dist')
      ],
      destinationBucket: s3WebsiteBucket,
    });
  }
}
