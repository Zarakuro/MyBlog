---
title: "Foto-Sicherungssystem für unterwegs"
slug: "foto-sicherungssystem-fuer-unterwegs"
date: "2026-11-06"
published_date: "2026-11-06"
icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4bb.png"
author: "Zarakuro"
---

## Warum ich meine Fotos unterwegs sichere

## Meine Ausrüstung

## Mein Ablauf nach einem Fototag

### Reise-Backup im Überblick

```mermaid
flowchart LR
    accTitle: Fotosicherung unterwegs
    accDescr: Die Nikon Z6 II nutzt CFexpress und SD, die Nikon Z fc eine SD-Karte. Kopien gelangen auf den Unify UT2, die SD-Karten in einen getrennt aufbewahrten Kartencontainer.

    subgraph KAMERAS[Kameras]
        Z6["Nikon Z6 II (2 Kartenslots)"]
        ZFC["Nikon Z fc (1 Kartenslot)"]
    end

    subgraph KARTEN[Speicherkarten]
        CF["CFexpress-Karte der Z6 II"]
        SD6["SD-Karte der Z6 II"]
        SDFC["SD-Karte der Z fc"]
    end

    subgraph KOPIEN[Aufbewahrung unterwegs]
        UT2[(Unify UT2)]
        CONTAINER["SD-Karten-Container"]
    end

    Z6 --> CF
    Z6 --> SD6
    ZFC --> SDFC
    CF -->|Fotos kopieren| UT2
    SDFC -->|Fotos kopieren| UT2
    SD6 -->|Karte aufbewahren| CONTAINER
    SDFC -->|Nach dem Kopieren aufbewahren| CONTAINER

    classDef kamera fill:#253b52,stroke:#8dc9ee,color:#f4f8fb
    classDef karte fill:#16465e,stroke:#66ccff,color:#f4f8fb
    classDef sicherung fill:#21483c,stroke:#7ed9ac,color:#f4f8fb
    classDef aufbewahrung fill:#514127,stroke:#e7bc73,color:#fff5df
    class Z6,ZFC kamera
    class CF,SD6,SDFC karte
    class UT2 sicherung
    class CONTAINER aufbewahrung
```

Das Diagramm übernimmt die Geräte und Kopierwege der bisherigen Skizze. Unify UT2 und SD-Karten-Container werden getrennt aufbewahrt. Bevor eine Karte erneut verwendet oder geleert wird, muss die Übertragung geprüft sein.

### Fotos übertragen

### Sicherung überprüfen

### Kopien getrennt aufbewahren

## Zurück zu Hause

```mermaid
flowchart LR
    accTitle: Vom Reise-Backup zum Fotoarchiv zu Hause
    accDescr: Die Fotos werden vom Unify UT2 oder von den SD-Karten über Lightroom Classic auf den Rechner importiert. Abgeschlossene Projekte gehen ins NAS-Archiv, das auf einer externen Festplatte gesichert wird.

    QUELLE["Unify UT2 oder SD-Karten"]

    subgraph LOKAL[Rechner zu Hause]
        LR["Lightroom Classic: Import und Bearbeitung"]
        FOTOS["Lokale Fotoprojekte"]
        KATALOG[(Lightroom-Katalog)]
    end

    NAS[(NAS mit Fotoarchiv)]
    BACKUP["Externe Backup-Festplatte"]

    QUELLE -->|Import| LR
    LR -->|Fotos lokal ablegen| FOTOS
    LR -. Katalog verwalten .-> KATALOG
    FOTOS -->|Abgeschlossene Projekte archivieren| NAS
    NAS -. Bei Bedarf wieder bearbeiten .-> LR
    NAS -->|Fotoarchiv sichern| BACKUP
    KATALOG -->|Katalogsicherung| BACKUP

    classDef quelle fill:#253b52,stroke:#8dc9ee,color:#f4f8fb
    classDef lokal fill:#16465e,stroke:#66ccff,color:#f4f8fb
    classDef archiv fill:#21483c,stroke:#7ed9ac,color:#f4f8fb
    classDef backup fill:#514127,stroke:#e7bc73,color:#fff5df
    class QUELLE quelle
    class LR,FOTOS,KATALOG lokal
    class NAS archiv
    class BACKUP backup
```

Diese Übersicht zeigt den Übergang von unterwegs zur Ablage zu Hause. Fotos und Lightroom-Katalog bleiben getrennte Bestandteile der Sicherung. Die ausführliche Speicherstruktur steht im Beitrag [Datenspeicherung, Organisation und Backups](https://zarakuro.de/?slug=datenspeicherung-organisation-und-backups#article).

## Was sich für mich bewährt hat

