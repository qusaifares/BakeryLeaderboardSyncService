import { RegionGroups, Regions, regionToRegionGroup } from 'twisted/dist/constants';

export interface RiotConfigOptions {
  apiKey: string;
}

export class RiotConfig {
  public readonly apiKey: string;

  public readonly region: Regions;

  public readonly regionGroup: RegionGroups;

  constructor(options: RiotConfigOptions) {
    this.apiKey = options.apiKey;
    this.region = Regions.AMERICA_NORTH;
    this.regionGroup = regionToRegionGroup(this.region);
  }
}
