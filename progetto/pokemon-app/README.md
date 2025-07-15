# Come installare e avviare l'app

## Requisiti

- Node.js (>= 18)
- npm

## Installazione

1. **Clona la repo:**
   ```bash
   git clone <repo-url>
   cd <nome-cartella-repo>
   ```

2. **Installa le dipendenze:**
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

## Build del frontend

Dal root della repo:
```bash
cd frontend
npm run build
```
Questo comando compila Angular e copia i file statici in `backend/public`.

## Avvio del backend

Dal root della repo:
```bash
cd backend
npm start
```
Il server sarà disponibile su [http://localhost:3000](http://localhost:3000).

## Modalità sviluppo

- Per lavorare solo sul frontend:  
  ```bash
  cd frontend
  npm start
  ```
  (Angular sarà su [http://localhost:4200](http://localhost:4200))

- Per lavorare solo sul backend:  
  ```bash
  cd backend
  npm start
  ```


## Deploy su Render

- **Root Directory:** `backend`
- **Build Command:**  
  `export NODE_OPTIONS=--openssl-legacy-provider && cd ../frontend && npm install && npm run build && cd ../backend && npm install`
- **Start Command:**  
  `node src/index.js`

- **Variabile d'ambiente consigliata:**
  - Chiave: `NODE_OPTIONS`
  - Valore: `--openssl-legacy-provider`

Questo risolve i problemi di compatibilità tra Angular/webpack e Node.js 17+ su Render.

