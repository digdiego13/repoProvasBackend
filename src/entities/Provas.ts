import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
