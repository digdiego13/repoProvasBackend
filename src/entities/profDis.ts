import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('profDis')
class profDisEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  disciplinaId: number;
  @Column()
  professorId: number;
}

export default profDisEntity;
