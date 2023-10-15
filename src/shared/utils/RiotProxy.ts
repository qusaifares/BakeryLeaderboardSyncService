import { LolApi } from 'twisted/dist/apis/lol/lol';
import { RiotConfig } from '../config/RiotConfig';

export class RiotProxy {
  private readonly lolApi: LolApi;

  constructor(private readonly config: RiotConfig) {
    this.lolApi = new LolApi({ key: this.config.apiKey });
  }

  getSummonerByName(summonerName: string) {
    this.lolApi.Summoner.getByName(summonerName, this.config.region);
  }

  getMatchIdsByPuuid(puuid: string) {
    this.lolApi.MatchV5.list(puuid, this.config.regionGroup);
  }

  getMatchById(id: string) {
    this.lolApi.MatchV5.get(id, this.config.regionGroup);
  }
}
