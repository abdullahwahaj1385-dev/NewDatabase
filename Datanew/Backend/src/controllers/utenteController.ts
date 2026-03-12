//definizione dei metodi di inserimento / modifica / cancellazione / visualizzazione degli utenti
import type { Request, Response, NextFunction } from 'express';
import { db } from '../database/db.js';
import type { Utente } from '../models/utente.js';


// Create an item
/*export const createItem = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    const newItem: Item = { id: Date.now(), name };
    items.push(newItem);
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
};*/
export const insertUtente = async (req: Request, res: Response): Promise<void> => {
  try {
    const { Nome, Cognome, Data_Nascita, Email, Numero_telefono, Sesso } = req.body;

    const query = `
      INSERT INTO utente (Nome, Cognome, Data_Nascita, Email, Numero_telefono, sesso)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.execute(query, [
      Nome,
      Cognome,
      Data_Nascita,
      Email,
      Numero_telefono,
      Sesso
    ]);

    res.status(201).json({
      id: (result as any).insertId,
      Nome,
      Cognome,
      Data_Nascita,
      Email,
      Numero_telefono,
      Sesso
    });

  } catch (error) {
    res.status(500).json({ message: "Errore nella creazione utente", error });
  }
};

// Read all items
export const getUtenti = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
      const [rows] = await db.query<Utente[]>("SELECT * FROM utente");
      res.json(rows);
  } catch (error) {
      next(error);
  }
};

/*
export const getItemById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const item = items.find((i) => i.id === id);
    if (!item) {
      res.status(404).json({ message: 'Item not found' });
      return;
    }
    res.json(item);
  } catch (error) {
    next(error);
  }
};

// Update an item
export const updateItem = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { name } = req.body;
    const itemIndex = items.findIndex((i) => i.id === id);
    if (itemIndex === -1) {
      res.status(404).json({ message: 'Item not found' });
      return;
    }
    items[itemIndex].name = name;
    res.json(items[itemIndex]);
  } catch (error) {
    next(error);
  }
};

// Delete an item
export const deleteItem = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const itemIndex = items.findIndex((i) => i.id === id);
    if (itemIndex === -1) {
      res.status(404).json({ message: 'Item not found' });
      return;
    }
    const deletedItem = items.splice(itemIndex, 1)[0];
    res.json(deletedItem);
  } catch (error) {
    next(error);
  }
};
*/