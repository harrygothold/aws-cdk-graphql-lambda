import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apiGateway from '@aws-cdk/aws-apigateway';
import * as path from 'path';
export class GraphqlLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const graphqlLambda = new lambda.Function(this, 'graphqlLambda', {
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda')),
      handler: 'graphql.handler',
      runtime: lambda.Runtime.NODEJS_12_X,
    });
    new apiGateway.LambdaRestApi(this, 'graphqlEndpoint', {
      handler: graphqlLambda,
    });
  }
}
