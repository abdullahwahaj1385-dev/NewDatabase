import type { RowDataPacket } from"mysql2";

export interface Utente extends RowDataPacket {
  id: number;
  Nome: string;
  Cognome: string;
  dataNascita: Date;
  eta: number;
  email: string;
  Address: string;
  telefono: string;
  sesso: string;
}