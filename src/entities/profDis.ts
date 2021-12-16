import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import DisciplinasEntity from './disciplinas';
import ProfessoresEntity from './professores';

@Entity('profDis')
class ProfDisEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  disciplinasId: number;
  @Column()
  professoresId: number;

  @ManyToOne(() => ProfessoresEntity, (professores) => professores.id, {
    eager: true,
  })
  professores: ProfessoresEntity;

  @ManyToOne(() => DisciplinasEntity, (disciplinas) => disciplinas.id, {
    eager: true,
  })
  disciplinas: DisciplinasEntity;
}

export default ProfDisEntity;
