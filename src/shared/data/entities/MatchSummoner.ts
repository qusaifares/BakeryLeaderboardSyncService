import { Column, Entity, PrimaryColumn } from 'typeorm';
import { PlayerRole } from '../../types/enum/PlayerRole';
import { TeamId } from '../../types/enum/TeamId';

@Entity()
export class MatchSummoner {
  @PrimaryColumn()
    matchId: string;

  @PrimaryColumn()
    summonerId: string;

  @Column({ type: 'enum', enum: PlayerRole })
    position: PlayerRole;

  @Column({ type: 'enum', enum: TeamId })
    team: TeamId;

  @Column()
    championId: number;

  // Stats
  @Column()
    kills: number;

  @Column()
    deaths: number;

  @Column()
    assists: number;

  @Column()
    creeps: number;

  @Column()
    damageToChampions: number;

  @Column()
    goldEarned: number;

  @Column()
    totalMinionsKilled: number;
}
