import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import ProfDisEntity from './profDis';
@Entity('professores')
class ProfessoresEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nomeProfessor: string;

  @OneToMany(() => ProfDisEntity, (profDis) => profDis.professores)
  profDis: ProfDisEntity[];
}

export default ProfessoresEntity;
