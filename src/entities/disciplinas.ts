import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import ProfDisEntity from './profDis';

@Entity('disciplinas')
class DisciplinasEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nomeDisciplina: string;
  @Column()
  periodoDisciplina: number;

  @OneToMany(() => ProfDisEntity, (profDis) => profDis.professores)
  profDis: ProfDisEntity[];
}

export default DisciplinasEntity;
