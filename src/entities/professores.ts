import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('professores')
class professoresEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nomeProfessor: string;
}

export default professoresEntity;
