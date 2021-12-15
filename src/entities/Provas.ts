import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('provas')
class ProvaEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nomeProva: string;
  @Column()
  categoriaProva: number;
  @Column()
  linkProva: string;
  @Column()
  profDisId: number;
}

export default ProvaEntity;
