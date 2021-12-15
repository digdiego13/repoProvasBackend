import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categorias')
class categoriasEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nomeCategorias: string;
}

export default categoriasEntity;
