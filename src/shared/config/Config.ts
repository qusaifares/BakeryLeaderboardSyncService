import { ProxyConfig } from './ProxyConfig';
import { ManagerConfig } from './ManagerConfig';
import { AwsConfig } from './AwsConfig';
import { RiotConfig } from './RiotConfig';

class Config {
  private managerConfig: ManagerConfig;

  private proxyConfig: ProxyConfig;

  private awsConfig: AwsConfig;

  private riotConfig: RiotConfig;

  // constructor() {}

  getManagerConfig() {
    if (!this.managerConfig) {
      this.managerConfig = new ManagerConfig(
        this.getAwsConfig(),
        this.getRiotConfig(),
        this.getProxyConfig(),
      );
    }
    return this.managerConfig;
  }

  getProxyConfig() {
    if (!this.proxyConfig) {
      this.proxyConfig = new ProxyConfig(this.getAwsConfig(), this.getRiotConfig());
    }
    return this.proxyConfig;
  }

  getAwsConfig() {
    if (!this.awsConfig) {
      this.awsConfig = new AwsConfig();
    }
    return this.awsConfig;
  }

  getRiotConfig() {
    if (!this.riotConfig) {
      this.riotConfig = new RiotConfig({ apiKey: 'RGAPI-68ae8b07-2f43-4af9-94fe-599f7447c6f4' });
    }
    return this.riotConfig;
  }
}

export const config = new Config();
