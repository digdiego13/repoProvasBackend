import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import CategoriasEntity from './categorias';
import ProfDisEntity from './profDis';

@Entity('provas')
class ProvaEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nomeProva: string;
  @Column()
  categoriasId: number;
  @Column()
  linkProva: string;
  @Column()
  profDisId: number;
}

export default ProvaEntity;
