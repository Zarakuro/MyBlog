# Veröffentlichungsdatum und Aktualisierungen

Für Beiträge, die du regelmäßig überarbeitest, stehen zwei Datumsfelder im Metadatenblock:

```yaml
---
title: "Fotoworkflow"
slug: "fotoworkflow"
date: "2027-02-15"
published_date: "2026-11-06"
---
```

- `published_date`: Datum der ursprünglichen Veröffentlichung. Bei späteren Überarbeitungen beibehalten.
- `date`: Datum des aktuellen Inhaltsstands. Bei der Erstveröffentlichung gleich wie `published_date`; bei einer Überarbeitung auf das Aktualisierungsdatum setzen.

Im Beispiel erscheint mit dem aktualisierten Carrd-Zusatz:

> Veröffentlicht am 06.11.2026 · Aktualisiert am 15.02.2027

Der bestehende Blog-Embed sortiert absteigend nach `date`. Damit steht dieser Beitrag vor Beiträgen mit einem älteren Inhaltsstand. Bei gleichen Datumsangaben ist keine bestimmte Reihenfolge garantiert.

## Einen neuen Beitrag veröffentlichen

1. Den Text in `drafts/` fertigstellen und Entwurfsnotizen entfernen.
2. `date` und `published_date` auf das Veröffentlichungsdatum setzen, jeweils im Format `YYYY-MM-DD` und in Anführungszeichen.
3. Die Datei nach `posts/` verschieben, committen und pushen.
4. Die GitHub Action erzeugt `posts.json` automatisch. Diese Datei nicht lokal bearbeiten.

Bei gleichen Datumsangaben zeigt der Zusatz nur „Veröffentlicht am …“ an. Ein Datum in der Zukunft plant keine Veröffentlichung; sobald die Datei unter `posts/` veröffentlicht ist, ist sie sichtbar.

## Einen bestehenden Beitrag aktualisieren

1. Den Text in `posts/` bearbeiten.
2. Nur `date` auf das Datum der Überarbeitung setzen; `published_date` beibehalten. `date` sollte nicht vor `published_date` liegen.
3. Committen und pushen, dann die GitHub Action abwarten.

Das Aktualisierungsdatum ist eine bewusste redaktionelle Angabe. Es wird nicht automatisch bei jedem Commit geändert. Das vom Generator erzeugte Feld `updated_at` beschreibt den Git-Commit und wird hier nicht als redaktionelles Datum verwendet.

## Bestehende Beiträge ohne ursprüngliches Datum

Beiträge ohne `published_date` funktionieren weiter mit der bisherigen Datumsanzeige. Vor der ersten Überarbeitung das bisherige Veröffentlichungsdatum als `published_date` ergänzen und erst danach `date` ändern. Das Originaldatum wird nicht automatisch aus der Git-Historie rekonstruiert.

## Anzeige in Carrd aktivieren

Den gesamten aktuellen Inhalt von `carrd-cover-fix.html` in den bestehenden Zusatz-Embed in Carrd übernehmen und die Seite erneut veröffentlichen. Der externe Blog-Embed bleibt unverändert.

Der Zusatz zeigt die beiden Datumsangaben nur im geöffneten Artikel an. Die Galerieübersicht behält ihre bisherige Datumsanzeige und sortiert weiterhin nach `date`. Die GitHub Action übernimmt `published_date` aus den Markdown-Metadaten automatisch in ihren Index.
