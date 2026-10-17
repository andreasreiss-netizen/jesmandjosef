# JesmandJosef – Mittelbadisch-Quiz

Ein Quiz für den mittelbadischen Dialekt (Dialekt ⇄ Hochdeutsch).
**Die Excel-Datei bleibt bei dir und wird nie hochgeladen.** Auf GitHub liegt nur `data/woerterbuch.js` mit den Wörtern, die im Quiz vorkommen.

## Ordner

| Datei | Zweck |
|---|---|
| `data/woerterbuch.js` | Die Quiz-Wörter. Diese Datei wird hochgeladen. |
| `data/dialekt_woerterbuch.xlsx` | Dein Wörterbuch. **Nur lokal, nicht hochladen** (ist in diesem Paket nicht enthalten). |
| `tools/build_data.py` | Macht aus der Excel-Datei die Datei `woerterbuch.js`. |
| `Daten-aktualisieren.bat` | Doppelklick unter Windows: führt das Skript aus. |
| `index.html`, `manifest.webmanifest`, `assets/` | Die App und ihre Bilder/Icons. |
| `.github/workflows/pages.yml` | Veröffentlicht die Seite automatisch bei jeder Änderung. |

## Einmalig einrichten (im Browser)

1. Auf github.com ein neues Repository anlegen, z. B. `jesmandjosef`.
2. Alle Dateien aus diesem Ordner hochladen: **Add file → Upload files**, Inhalt hineinziehen, **Commit changes**.
   Der versteckte Ordner `.github` wird oft nicht mitgezogen. Dann: **Add file → Create new file**, als Namen `.github/workflows/pages.yml` eintippen und den Inhalt der Datei hineinkopieren.
3. **Settings → Pages → Build and deployment → Source: GitHub Actions** wählen.
4. Im Reiter **Actions** läuft „Quiz veröffentlichen“. Nach ca. einer Minute ist die Seite online (Adresse unter Settings → Pages).

## Neue Begriffe ergänzen

1. Deine `dialekt_woerterbuch.xlsx` in den Ordner `data/` legen (oder beim Aufruf den Pfad angeben).
2. Unter dem letzten Eintrag eine Zeile anlegen und ausfüllen:
   - `dialekt_text` – das Dialektwort
   - `hochdeutsch` – die Bedeutung (bis 90 Zeichen, kurz halten)
   - `status` – **freigegeben**
3. Excel speichern und schließen. Dann unter Windows `Daten-aktualisieren.bat` doppelklicken (braucht Python), sonst im Terminal:
   ```
   pip install -r requirements.txt
   python tools/build_data.py
   ```
4. Auf GitHub im Ordner `data` die Datei **`woerterbuch.js`** mit **Add file → Upload files** hochladen (gleicher Name, ersetzt die alte) und committen. Nach ein bis zwei Minuten ist die Seite aktualisiert.

Welche Zeilen ins Quiz kommen (Spalte `status`):

- `freigegeben` oder leer: kommt ins Quiz.
- `neu`: kommt ins Quiz, aber nur, wenn der Text keine Scan-Fehler-Zeichen enthält.
- `in Prüfung`, `abgelehnt`: kommt nicht ins Quiz.

Das Skript zeigt am Ende, welche Zeilen aus welchem Grund fehlen. Das Quiz braucht mindestens 4 Einträge. Die Spaltenüberschriften in Zeile 2 und der Blattname „Wörterbuch“ müssen bleiben.

## Hinweise vor der Veröffentlichung

- **Urheberrecht:** Die Startdaten stammen aus einem Buch-Scan. Die im Quiz verwendeten Wörter sind auf der öffentlichen Seite für jeden sichtbar. Vor der Veröffentlichung klären, ob du sie so nutzen darfst.
- **Datenschutz/Impressum:** Die App lädt keine externen Schriften und speichert nur das beste Ergebnis auf dem Gerät. GitHub selbst protokolliert Zugriffe. Ob für eine öffentliche Seite ein Impressum oder eine Datenschutzerklärung nötig ist, solltest du prüfen.
