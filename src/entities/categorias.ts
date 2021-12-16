import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categorias')
class CategoriasEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nomeCategorias: string;
}

export default CategoriasEntity;
