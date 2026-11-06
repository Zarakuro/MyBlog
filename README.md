# Carrd Blog Template

## 1. Add a Post

1. Open the `posts/` folder in your GitHub repository.

   **Tip:** The folder already contains a sample post. To use it as a starting point, click the pencil icon to edit it, replace the sample content with your own, and click **Commit changes** to save.

2. To create a new post instead, click **Add file → Create new file**.

3. Name your file after your post title using lowercase letters and hyphens, such as `my-first-post.md`. **The `.md` extension is required.**

4. Copy the following template into your file and replace the example values with your own:

  ### Required Fields

```yaml
---
title: "My First Post"
slug: "my-first-post"
date: "2026-10-27"
---

Write your article here.
```

- `title`: Your post title.
- `slug`: A unique name used in the post URL. Each post must have a different slug.
- `date`: The post date in `YYYY-MM-DD` format. This does not schedule publication.

### Optional Fields

```yaml
cover: "https://example.com/cover.jpg"
excerpt: "A short introduction to my post."
author: "John Doe"
author_url: "https://example.com"
icon: "https://example.com/avatar.jpg"
```

- `cover`: Cover image URL. Optional; omit if not needed.
- `excerpt`: Short summary shown in the post list. Optional; an excerpt is generated automatically if omitted.
- `author`: Author's name. Optional; defaults to your GitHub profile name or username. Set to `null` to hide or enter a custom name to override.
- `author_url`: URL linked to the author name. Optional; defaults to your GitHub website or profile URL. Set to `null` to hide or enter a custom URL to override.
- `icon`: Author avatar or icon. Optional; defaults to your GitHub profile avatar. Set to `null` to hide or enter a custom image URL or emoji to override.

5. Click **Commit changes** to save your post. It may take a few minutes for your post to appear on your Carrd website.

## 2. Deleting a Post

1. Open the `.md` file you want to delete in the `posts/` folder.
2. Click the three-dot menu (`...`) in the top-right corner and select **Delete file**.
3. Click the green **Commit changes** button to confirm.
   
## 3. Supported Formatting

All Carrd-supported text and link syntax is supported.

**Note:** `clipboard:` and `spoiler:` only work if the corresponding elements already exist on your Carrd page.

### Headings

Use `#` to `####` at the beginning of a line to create headings of different levels.

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
```

### Images

Use standard Markdown image syntax:

```markdown
![Image description](https://example.com/image.jpg)
```

You can optionally add `{}` to control image width, round and alignment. These settings are not required.

```markdown
![Image](https://example.com/image.jpg){width=50%}
![Image](https://example.com/image.jpg){align=center}
![Image](https://example.com/image.jpg){round=12px}
![Image](https://example.com/image.jpg){width=80% round=50% align=center}
```

### Line Breaks

Line breaks(Enter) work normally on your Carrd website. However, they may not appear in GitHub's preview when you press Enter. If the preview looks different from what you expected, try adding two spaces at the end of a line before pressing Enter. This is optional and only affects the GitHub preview.

## 4. Zusätzliche Blockformate mit dem Carrd-Zusatz

Den vollständigen Inhalt von `carrd-cover-fix.html` als zusätzlichen Carrd-Embed unter **Code / Hidden / Body End** nach dem Blog-Embed einfügen und veröffentlichen. Das externe `embed.js` bleibt unverändert.

`carrd-cover-fix.html` ist die einzige HTML-Datei für den Zusatz und enthält einen kleinen Loader. **Zuerst `blog-enhancements.js` im Hauptverzeichnis dieses öffentlichen Repositories zu GitHub pushen**, dann den vollständigen Inhalt der HTML-Datei in den bestehenden Carrd-Zusatz übernehmen und veröffentlichen. Der Loader lädt die JavaScript-Datei aus `Zarakuro/MyBlog`, Branch `main`. Bei einem anderen Repository die Adresse im Loader anpassen. Der eigentliche, lesbare Code steht in `blog-enhancements.js` und muss nicht mehr in das Carrd-Feld kopiert werden.

Der Loader bleibt deutlich unter Carrds Grenze von 16.384 Zeichen. Immer den gesamten bisherigen Zusatz ersetzen und prüfen, dass am Ende `</script>` steht. Wenn die JavaScript-Datei noch nicht auf GitHub liegt oder nicht geladen werden kann, fehlen die Zusatzfunktionen; der externe Blog-Embed arbeitet weiter. Für spätere Änderungen an `blog-enhancements.js` genügt ein GitHub-Push und ein Neuladen der Seite.

Der Zusatz ergänzt im geöffneten Artikel:

- **Diagramme:** Codeblöcke mit dem Sprachnamen `mermaid` werden im Browser als Diagramm gerendert. Die Bibliothek Mermaid 11.12.0 wird bei Bedarf von jsDelivr geladen. Diagramme lassen sich wie Fotos vergrößern. Bei einem Fehler bleibt der Quelltext erhalten. Beispiele für getrennte Speicher- und Softwareansichten stehen im Beitrag `posts/datenspeicherung-organisation-und-backups.md`.
- **Fotoansicht:** Artikelbilder per Klick oder mit Enter beziehungsweise Leertaste groß öffnen. Ein weiterer Klick auf das Bild wechselt zwischen eingepasster Ansicht und Originalgröße; in Originalgröße lässt sich der Ausschnitt über die Scrollleisten verschieben. Mit Escape, „Schließen“ oder einem Klick auf den freien Hintergrund der Fotoansicht schließen. Verwendet wird die eingebundene Originaldatei; zusätzliche Bilddetails werden nicht erzeugt.
- **Bildbeschriftungen:** Aufnahmeinformationen direkt unter ein Bild setzen, beginnend mit `**Brennweite:**`. Die nächste Zeile beginnt mit `**Kamera:**`, optional folgt `**Standort:**`. Der Zusatz fasst diese Zeilen als kleine, dezente Bildunterschrift in der Breite des Fotos zusammen. Keine Leerzeilen innerhalb des Datenblocks verwenden; danach mit einer Leerzeile zum Artikeltext zurückkehren.
- **Tabellen:** Kopfzeile und Trennzeile mit mindestens drei Bindestrichen je Spalte. `:---` richtet links aus, `---:` rechts und `:---:` zentriert. Breite Tabellen lassen sich horizontal scrollen. Ein senkrechter Strich innerhalb einer Zelle kann mit `\|` geschrieben werden.
- **Codeblöcke:** Drei Backticks oder Tilden vor und nach dem Code, optional mit einem Sprachnamen nach dem öffnenden Trenner. Einrückungen, Zeilenumbrüche und Sonderzeichen bleiben erhalten. Es gibt keine Syntaxhervorhebung.
- **Zitate:** Jede Zitatzeile mit `>` beginnen; für einen Absatz innerhalb des Zitats eine Zeile mit nur `>` verwenden.
- **Aufgabenlisten:** `- [ ]` für offen und `- [x]` für erledigt. Die Kästchen sind eine Anzeige des gespeicherten Zustands und im Artikel nicht bearbeitbar.
- **Fußnoten:** Mit `[^name]` auf eine Erklärung verweisen und sie an beliebiger Stelle außerhalb von Codeblöcken mit `[^name]: Erklärung` definieren. Die Erklärungen erscheinen am Artikelende mit Rücksprunglinks. Mehrere Verweise auf dieselbe Fußnote sind möglich. Fortsetzungszeilen mit vier Leerzeichen einrücken.
- **Kopierlinks:** `[Text kopieren](copy:Inhalt)` und `[Text kopieren](clipboard:Inhalt)` kopieren den angegebenen Inhalt in die Zwischenablage. Der Zusatz zeigt Erfolg oder einen blockierten Zugriff an. Beide Varianten lassen sich auch mit Enter oder Leertaste auslösen.

- **Horizontale Trennlinien:** `---`, `***` oder `___` in einer eigenen Zeile schreiben. Innerhalb eines Codeblocks bleiben diese Zeichen unverändert. Ein vorangestellter Backslash ist dafür nicht nötig.

Ein vollständiges Beispiel steht in `posts/test-12-formatierungsbeispiele.md`. Normale Listen werden durch diesen Zusatz nicht ergänzt. HTML wird weiterhin als Text behandelt. Eine nackte URL wird nicht automatisch verlinkt; dafür die Schreibweise `[Beschriftung](https://example.com)` verwenden.

Der Zusatz lädt den Markdown-Quelltext des geöffneten Beitrags zusätzlich aus GitHub und verwendet für die bisherigen Text-, Bild- und Linkformate weiterhin das `markdown.js` des eingebundenen Blog-Embeds. Bei einem Ladefehler bleibt die ursprüngliche Artikelanzeige erhalten. Galerie und Sortierung werden nicht verändert. `posts.json` wird ausschließlich von der GitHub Action erzeugt.
