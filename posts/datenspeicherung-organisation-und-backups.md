---
title: "Datenspeicherung, Organisation und Backups"
slug: "datenspeicherung-organisation-und-backups"
date: "2026-11-06"
published_date: "2026-11-06"
icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4bb.png"
author: "Zarakuro"
---

## Was ich speichere und warum

## Meine Speicherorte

Für die Übersicht trenne ich die Speicherstruktur von der Software. Hier geht es zuerst darum, wo Originaldateien, Lightroom-Kataloge und Sicherungskopien liegen. Der Ablauf in den Programmen folgt in einem eigenen Diagramm weiter unten.

```mermaid
flowchart TB
    accTitle: Speicherstruktur für Fotos und Lightroom-Kataloge
    accDescr: Von der SD-Karte zu lokalen Projekten und zum NAS-Archiv. Eine getrennte Festplatte enthält Sicherungskopien der Fotos und des Lightroom-Katalogs.

    subgraph QUELLE[Aufnahme]
        SD@{ shape: card, label: "SD-Karte mit Originalfotos" }
    end

    subgraph RECHNER[Lokaler Rechner]
        AKTUELL@{ shape: lin-cyl, label: "Aktuelle Projekte und Originaldateien" }
        KATALOG[(Lightroom-Katalog und zugehörige Dateien)]
        EXPORT[Exportierte JPGs und fertige Bilder]
    end

    subgraph ARCHIV[Langfristige Ablage]
        NAS[(NAS mit Fotoarchiv)]
    end

    subgraph BACKUP[Getrennte Sicherung]
        PLATTE@{ shape: lin-cyl, label: "Backup-Festplatte: Fotos und Katalogsicherungen" }
    end

    SD -->|Fotos kopieren| AKTUELL
    AKTUELL -->|Abgeschlossene Projekte archivieren| NAS
    AKTUELL -->|Fertige Bilder exportieren| EXPORT
    KATALOG -. Verweise auf Fotos .-> AKTUELL
    KATALOG -. Verweise auf archivierte Fotos .-> NAS
    NAS -->|Fotoarchiv sichern| PLATTE
    AKTUELL -->|Aktuelle Projekte mit sichern| PLATTE
    KATALOG -->|Katalogsicherung ablegen| PLATTE

    classDef quelle fill:#253b52,stroke:#8dc9ee,color:#f4f8fb
    classDef lokal fill:#16465e,stroke:#66ccff,color:#f4f8fb
    classDef archiv fill:#21483c,stroke:#7ed9ac,color:#f4f8fb
    classDef backup fill:#514127,stroke:#e7bc73,color:#fff5df
    class SD quelle
    class AKTUELL,KATALOG,EXPORT lokal
    class NAS archiv
    class PLATTE backup
```

Durchgezogene Pfeile beschreiben Dateivorgänge. Gestrichelte Pfeile zeigen die Verknüpfung des Katalogs mit den Fotos: Die Bilddateien liegen außerhalb des Katalogs.

### Aktuelle Projekte

Aktuelle Projekte und der aktive Lightroom-Classic-Katalog sind in dieser Vorlage auf dem lokalen Rechner eingezeichnet. Den genauen Laufwerks- und Ordnerpfad ergänze ich noch.

### Das Archiv

Das NAS bildet die langfristige Ablage für abgeschlossene Fotoprojekte. Die Backup-Festplatte enthält eine weitere Kopie der Fotos sowie die Katalogsicherungen.

### Lightroom-Katalog und Fotos gehören zusammen

Der Katalog enthält Verweise, Bewertungen und Bearbeitungsinformationen; die Originalfotos werden getrennt gespeichert. Beides muss im Sicherungskonzept berücksichtigt werden. Eine Lightroom-Katalogsicherung allein sichert die Fotos nicht mit. Das beschreibt Adobe in den [Kataloggrundlagen](https://helpx.adobe.com/uk/lightroom-classic/desktop/manage-catalogs-and-files/lightroom-catalog-basics.html) und der [Anleitung zur Katalogsicherung](https://helpx.adobe.com/in/lightroom-classic/desktop/manage-catalogs-and-files/back-catalog.html).

Der aktive Lightroom-Classic-Katalog bleibt lokal. Originalfotos können auf dem NAS liegen; einen aktiven Katalog auf einem Netzlaufwerk unterstützt Lightroom Classic laut [Adobe-Katalog-FAQ](https://helpx.adobe.com/in/lightroom-classic/desktop/technical-support/workflow-issues/catalog-issues/catalog-faq-lightroom.html) nicht.

## Software und Arbeitsschritte

Diese zweite Ansicht zeigt die Aufgaben in Lightroom Classic und beim Sichern. Die Speichergeräte aus der ersten Übersicht treten hier hinter den Arbeitsschritten zurück.

```mermaid
flowchart TB
    accTitle: Software-Ablauf vom Import bis zur Archivierung
    accDescr: Importieren, Auswählen und Bearbeiten in Lightroom Classic, anschließend Export und Archivierung sowie eine getrennte Sicherung von Fotos und Katalog.

    subgraph LIGHTROOM[Lightroom Classic]
        IMPORT[1. Importieren und Ordner zuordnen]
        SICHTEN[2. Sichten und auswählen]
        ORDNEN[3. Bewerten und verschlagworten]
        BEARBEITEN[4. Bilder bearbeiten]
        EXPORTIEREN[5. Für Website oder Druck exportieren]
        ARCHIVIEREN[6. Abgeschlossene Projekte archivieren]
        KATALOGSICHERUNG[Katalogsicherung erstellen]
    end

    subgraph SICHERUNG[Sicherung und Kontrolle]
        FOTOSICHERUNG[Foto-Backup ausführen: Software noch ergänzen]
        PRUEFEN[Sicherung und Wiederherstellung prüfen]
    end

    IMPORT --> SICHTEN --> ORDNEN --> BEARBEITEN
    BEARBEITEN --> EXPORTIEREN
    BEARBEITEN --> ARCHIVIEREN
    ARCHIVIEREN --> FOTOSICHERUNG
    BEARBEITEN --> KATALOGSICHERUNG
    FOTOSICHERUNG --> PRUEFEN
    KATALOGSICHERUNG --> PRUEFEN

    classDef arbeit fill:#16465e,stroke:#66ccff,color:#f4f8fb
    classDef ergebnis fill:#21483c,stroke:#7ed9ac,color:#f4f8fb
    classDef sichern fill:#514127,stroke:#e7bc73,color:#fff5df
    class IMPORT,SICHTEN,ORDNEN,BEARBEITEN arbeit
    class EXPORTIEREN,ARCHIVIEREN ergebnis
    class KATALOGSICHERUNG,FOTOSICHERUNG,PRUEFEN sichern
```

Das Diagramm ist eine grobe Übersicht, kein fester Sicherungszeitplan. Die konkrete Häufigkeit und das verwendete Backup-Programm ergänze ich noch. Ordner, deren Fotos bereits katalogisiert sind, verschiebe ich innerhalb von Lightroom Classic, damit die Verweise erhalten bleiben.

| Aufgabe | Software oder Funktion | Noch zu dokumentieren |
| :--- | :--- | :--- |
| Import | Lightroom Classic | Zielordner, Benennung und Importvorgaben |
| Auswahl und Organisation | Lightroom Classic | Bewertungen, Markierungen und Schlagwörter |
| Bearbeitung | Lightroom Classic | Grundschritte und verwendete Vorgaben |
| Export | Lightroom Classic | Bildgrößen, Dateiformate und Zielordner |
| Archivierung | Ordnerverwaltung in Lightroom Classic | Zeitpunkt und Zuordnung zum Fotoarchiv |
| Katalogsicherung | Sicherungsfunktion von Lightroom Classic | Sicherungsziel und Aufbewahrung |
| Foto-Backup | Programm noch ergänzen | Sicherungsumfang, Zeitplan und Versionierung |

### Vorhandene Skizze als Ausgangspunkt

![Bisherige Übersicht mit Reise-Backup und Heim-Backup](https://raw.githubusercontent.com/Zarakuro/MyBlog/main/images/Untitled%20diagram-2025-12-07-215740.png){width=80% round=12px align=center}

Die vorhandene Skizze kombiniert Geräte und Arbeitsschritte. Die beiden neuen Diagramme teilen diese Informationen in eine Speicheransicht und eine Softwareansicht auf. Der Reiseteil mit den Kameras und dem Unify UT2 kann später im eigenen Artikel zur Sicherung unterwegs ausführlicher beschrieben werden.

## Ordnerstruktur und Dateinamen

Die folgende Struktur ist ein Vorschlag zum Ausfüllen, noch keine Bestandsaufnahme der tatsächlichen Ordner:

```text
Lokaler Rechner/
  Fotos/
    Aktuell/
      JJJJ-MM-TT_Projekt/
        Originale/
        Exporte/
  Lightroom/
    Katalog/
      Mein-Katalog.lrcat
      weitere zugehörige Katalogdateien
    Katalogsicherungen/

NAS/
  Fotoarchiv/
    JJJJ/
      JJJJ-MM-TT_Projekt/

Backup-Festplatte/
  Fotoarchiv-Backup/
  Aktuelle-Projekte-Backup/
  Lightroom-Katalogsicherungen/
```

## Meine Backup-Strategie

### Was wird wann gesichert?

### Getrennte Sicherungskopien

### Wiederherstellung prüfen

## Pflege und Aufräumen

## Meine Erfahrungen

