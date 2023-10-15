import { SecretsManager } from '@aws-sdk/client-secrets-manager';
import { AwsRegion } from '../types/enum/AwsRegion';

const DEFAULT_REGION = AwsRegion.US_EAST_1;

export interface AwsConfigOptions {
}

export class AwsConfig {
  public readonly region: AwsRegion;

  private secretsManager: SecretsManager;

  constructor() {
    this.region = process.env.AWS_REGION as AwsRegion || DEFAULT_REGION;
  }

  public getSecretsManager(): SecretsManager {
    if (!this.secretsManager) {
      this.secretsManager = new SecretsManager();
    }
    return this.secretsManager;
  }
}
