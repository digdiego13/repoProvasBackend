import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('disciplinas')
class disciplinasEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nomeDisciplina: string;
  @Column()
  periodoDisciplina: number;
}

export default disciplinasEntity;
