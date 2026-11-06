---
title: "Test 12: Formatierungsbeispiele für Markdown, Bilder und Carrd"
slug: "test-12-formatierungsbeispiele"
date: "2026-11-06"
published_date: "2026-11-06"
cover: "https://raw.githubusercontent.com/Zarakuro/MyBlog/main/images/WallpaperDownload%20%2812%29.jpg"
excerpt: "Ein Beispielbeitrag zum Nachschlagen: Textformate, Farben, Links, Bilder, Carrd-Aktionen und die Grenzen des Markdown-Renderers."
author: "Zarakuro"
author_url: "https://zarakuro.de/"
icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4bb.png"
---

## So benutzt du diesen Beispielbeitrag

Dieser Beitrag zeigt die Formate des Blog-Embeds in Version 1.0.1. Öffne die Markdown-Datei zum Kopieren der Syntax und vergleiche sie mit dem veröffentlichten Artikel. Die GitHub-Vorschau und Carrd können unterschiedlich aussehen.

Das Cover gehört zur Galerieübersicht. Die Bilder weiter unten stehen im Artikel. Autor, Icon und Veröffentlichungsdatum kommen aus dem Metadatenblock oben.

## Überschriften

Die Ebenen eins bis vier haben im Renderer eigene Schriftgrößen:

# Beispiel für Ebene 1
## Beispiel für Ebene 2
### Beispiel für Ebene 3
#### Beispiel für Ebene 4

Auch fünf und sechs werden erkannt. Dafür sind in dieser Version allerdings keine eigenen Schriftgrößen hinterlegt; die Darstellung kann deshalb abweichen:

##### Beispiel für Ebene 5
###### Beispiel für Ebene 6

## Textauszeichnung

Normaler Text als Vergleich.

**Fett geschriebener Text**

*Kursiv mit Sternchen*

_Kursiv mit Unterstrichen_

__Unterstrichener Text__

~~Durchgestrichener Text~~

==Markierter Text==

`Inline-Code: date und published_date`

Tiefstellung: H~2~O und CO~2~.

Hochstellung: m^2^ und ein Hinweis^1^.

Kombiniert: **Fett mit _kursivem Teil_** sowie __unterstrichen mit **fettem Teil**__.

Bei diesem Renderer bedeutet ein doppelter Unterstrich Unterstreichung. GitHub interpretiert dieselbe Schreibweise als Fettdruck.

## Farben und Kombinationen

[Text in deiner Farbe]{#16465E}

[Ein heller Blauton]{#66CCFF}

[Text mit einem Farbnamen]{orange}

[**Fett und farbig**]{#16465E}

[Ein Satz mit *kursivem Teil* und __Unterstreichung__]{#66CCFF}

Die Farbschreibweise mit eckigen und geschweiften Klammern ist eine Erweiterung des Renderers, kein allgemeiner Markdown-Standard.

## Absätze, Zeilenumbrüche und Abstände

Dieser Satz steht in der ersten Zeile.
Dieser Satz folgt nach einem einfachen Zeilenumbruch.

Vor diesem Absatz steht eine Leerzeile.

Ein ausdrücklicher Carrd-Zeilenumbruch folgt hier:\nDieser Text steht danach in einer neuen Zeile.

Ein zusätzlicher geschützter Abstand steht zwischen diesen Wörtern: Foto\sWorkflow.

Umlaute und Sonderzeichen: Ä, Ö, Ü, ä, ö, ü, ß, ©, €, & sowie „Anführungszeichen“.

Emojis im Artikeltext: 📷 🎞️ 💻 📝. Als Autoren-Icon verwenden wir dagegen eine PNG-Adresse.

## Normale Links und Abschnittslinks

[Externe Beispielseite](https://example.com)

[Zarakuro-Website](https://zarakuro.de/)

[Zur Blogübersicht](#blog)

[Zum Downloadbereich](#downloads)

[Link mit **fetter Beschriftung**](https://example.com)

Externe Weblinks werden vom Renderer in einem neuen Tab geöffnet. Abschnittslinks funktionieren, wenn der entsprechende Abschnitt auf deiner Carrd-Seite existiert.

Weitere erkannte Linktypen sind `mailto:`, `tel:` und `skype:`. Sie benötigen ein passendes Ziel beziehungsweise eine passende Anwendung; hier werden keine erfundenen Kontaktdaten verlinkt.

## Querformatbilder

Querformat: 80 % Breite, 12 px Rundung, zentriert.

![Vogel im Flug über einer offenen Landschaft](https://raw.githubusercontent.com/Zarakuro/MyBlog/main/images/WallpaperDownload%20%2812%29.jpg){width=80% round=12px align=center}

Ein zweites Querformat mit denselben Einstellungen:

![Schwan mit ausgebreiteten Flügeln auf dem Wasser](https://raw.githubusercontent.com/Zarakuro/MyBlog/main/images/WallpaperDownload%20%289%29.jpg){width=80% round=12px align=center}

## Hochkantbilder

Hochformat: 50 % Breite, 12 px Rundung, zentriert.

![Fotorucksack auf felsigem Untergrund](https://raw.githubusercontent.com/Zarakuro/MyBlog/main/images/IMG_1125.jpg){width=50% round=12px align=center}

Ein zweites Hochformat mit denselben Einstellungen:

![Dunkler Rucksack im Schnee an einem Baum](https://raw.githubusercontent.com/Zarakuro/MyBlog/main/images/Z6G_9713.jpg){width=50% round=12px align=center}

## PNG und Diagramme

Auch ein PNG wird mit derselben Bildsyntax eingebunden:

![Diagramm zur Fotosicherung](https://raw.githubusercontent.com/Zarakuro/MyBlog/main/images/Untitled%20diagram-2025-12-07-215740.png){width=80% round=12px align=center}

## Weitere Bildoptionen zum Nachschlagen

Unser Standard steht oben. Für andere Darstellungen lassen sich die Optionen bewusst ändern:

Breite: `width=80%`, `width=320px`, `width=20rem` oder `width=20em`.

Rundung: `round=12px`, `round=0px` für eckige Bilder oder `round=50%` für einen ovalen Zuschnitt. Ein quadratisches Motiv wird mit 50 % Rundung kreisförmig dargestellt.

Ausrichtung: `align=left`, `align=center` oder `align=right`.

Die Optionen stehen direkt nach der schließenden Bildklammer in geschweiften Klammern. Sie sind einzeln optional. Ohne Optionen wird das Bild höchstens so breit wie der verfügbare Bereich und behält sein Seitenverhältnis.

Dateinamen mit Leerzeichen und Klammern müssen in der URL kodiert sein. Deshalb steht in den Bildadressen beispielsweise `%20` für ein Leerzeichen und `%28` beziehungsweise `%29` für Klammern.

## Carrd-Aktionen: Browser und Drucken

Diese Links führen Aktionen aus:

[Zurück im Browser](browser:back)

[Vorwärts im Browser](browser:forward)

[Nach oben scrollen](browser:top)

[Druckdialog öffnen](browser:print)

Zurück und Vorwärts hängen vom Verlauf deines Browsers ab. Die Aktion zum Scrollen benötigt die entsprechende Carrd-Funktion.

## Carrd-Aktionen: Abschnitte und Scrollpunkte

Diese Beispiele benötigen passende Abschnitte beziehungsweise Scrollpunkte auf deiner Carrd-Seite. Sie können den aktuellen Artikel verlassen:

[Nächster Abschnitt](section:next) · [Vorheriger Abschnitt](section:previous)

[Erster Abschnitt](section:first) · [Letzter Abschnitt](section:last)

[Nächster Scrollpunkt](scrollpoint:next) · [Vorheriger Scrollpunkt](scrollpoint:previous)

[Erster Scrollpunkt](scrollpoint:first) · [Letzter Scrollpunkt](scrollpoint:last)

## Kopieren und Spoiler: zusätzliche Carrd-Funktionen nötig

Die folgenden Beispiele sind nur dann funktional, wenn die zugehörigen Funktionen beziehungsweise Elemente auf der Carrd-Seite eingerichtet sind. Der Blog-Renderer allein stellt diese Funktionen nicht bereit.

[Beispieltext kopieren](copy:Foto-Workflow)

[Beispieltext in die Zwischenablage übernehmen](clipboard:Foto-Workflow)

Spoiler-Beispiel: ||Dieser Text soll erst nach dem Aufdecken sichtbar sein.||

Der Renderer erzeugt für den Spoiler ein eigenes Element. Ohne zusätzliche Unterstützung kann der Inhalt einfach sichtbar bleiben. Die README erwähnt außerdem `spoiler:`-Links; dafür enthält diese Renderer-Version keine eigene Umsetzung.

## Kompatibilitätscheck: klassisches Markdown

Die folgenden Beispiele sind absichtliche Prüfbeispiele. Der aktuelle Renderer setzt sie nicht als echte Listen, Zitate, Tabellen, Trennlinien oder Codeblöcke um. GitHub kann sie dagegen korrekt darstellen. Für solche Elemente ist eine Erweiterung des Renderers nötig.

### Ungeordnete Liste

- Erster Listenpunkt
- Zweiter Listenpunkt
  - Verschachtelter Listenpunkt

### Nummerierte Liste

1. Fotos importieren
2. Auswahl treffen
3. Bilder bearbeiten

### Aufgabenliste

- [x] Testbeitrag angelegt
- [ ] Darstellung im veröffentlichten Artikel vergleichen

### Zitat

> Ein Bild kann eine Geschichte erzählen.

### Tabelle

| Format | Breite | Rundung |
| --- | --- | --- |
| Querformat | 80 % | 12 px |
| Hochformat | 50 % | 12 px |

### Horizontale Trennlinie

---

### Codeblock

```yaml
date: "2026-11-06"
published_date: "2026-11-06"
author: "Zarakuro"
```

### HTML und nicht unterstützte Erweiterungen

<strong>Dieses HTML wird als Text ausgegeben und nicht ausgeführt.</strong>

Fußnoten-Schreibweise als Prüfbeispiel: Ein Satz mit Fußnote[^1].

[^1]: Der aktuelle Renderer erzeugt daraus keine verlinkte Fußnote.

Eine nackte URL wird nicht automatisch zum Link: https://example.com

## Veröffentlichungsdatum und Aktualisierung

Bei diesem Beitrag sind `date` und `published_date` gleich. Deshalb erscheint nur „Veröffentlicht am“. Um auch „Aktualisiert am“ zu testen, behältst du `published_date` bei und setzt `date` auf einen späteren Inhaltsstand. Die Sortierung richtet sich weiterhin nach `date`.

## Bildschutz ausprobieren

Bei eingebundenem Carrd-Zusatz blockieren Rechtsklick und Ziehen auf Artikelbildern die Standardaktion. Dabei erscheint der Hinweis auf den Downloadbereich. Das ist eine Bedienhürde und kein vollständiger Kopierschutz.
