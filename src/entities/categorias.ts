import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import ProvaEntity from './Provas';

@Entity('categorias')
class CategoriasEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nomeCategoria: string;
}

export default CategoriasEntity;
