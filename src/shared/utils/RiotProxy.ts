import { LolApi } from 'twisted/dist/apis/lol/lol';
import { RiotConfig } from '../config/RiotConfig';

export class RiotProxy {
  private readonly lolApi: LolApi;

  constructor(private readonly config: RiotConfig) {
    this.lolApi = new LolApi({ key: this.config.apiKey });
  }

  async getSummonerByName(summonerName: string) {
    return (await this.lolApi.Summoner.getByName(summonerName, this.config.region)).response;
  }

  async getMatchIdsByPuuid(puuid: string) {
    return (await this.lolApi.MatchV5.list(puuid, this.config.regionGroup)).response;
  }

  async getMatchById(id: string) {
    return (await this.lolApi.MatchV5.get(id, this.config.regionGroup)).response;
  }
}
