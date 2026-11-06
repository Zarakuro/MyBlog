---
title: "Foto-Sicherungssystem für unterwegs"
slug: "foto-sicherungssystem-fuer-unterwegs"
date: "2026-11-06"
published_date: "2026-11-06"
cover: "https://raw.githubusercontent.com/Zarakuro/MyBlog/main/images/cover-foto-backup-unterwegs.png"
icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4bb.png"
author: "Zarakuro"
excerpt: "Wie ich meine Fotos auf Reisen sichere, welche Ausrüstung ich dafür nutze und wie mein täglicher Ablauf aussieht."
---

### Meine Ausrüstung
Auf längeren Reisen ( in der Regel alles mehr als eine Woche) nehme ich einen UT2 portablen NAS mit. Für mich hat der den Vorteil, dass er auf Akku läuft und SD sowie CFE Karten direkt per one click backup ohne bildschirm kopieren kann. 

### Mein Ablauf nach einem Fototag
Zuerst landen alle Daten von den SD-Karten auf dem NAS. Bei der Z6 II (zwei Kartenslots) wird danach die CFexpress-Karte geleert, die SD-Karte wandert in einen separaten Container. Vor allem, weil ich nur dre CFE Karten habe und mehr SD Karten. Bei der Z fc wandert die SD-Karte nach dem Sichern ebenfalls in den Container. Der Container und der NAS werden getrennt voneinander aufbewahrt, teilweise sogar in unterschiedlichen Koffern. So habe ich immer ein zweites Backup getrennt vom eigentlichen Kamerarucksack.

Das Diagramm übernimmt die Geräte und Kopierwege der bisherigen Skizze. Unify UT2 und SD-Karten-Container werden getrennt aufbewahrt. Bevor eine Karte erneut verwendet oder geleert wird, muss die Übertragung geprüft sein.

Zurück zu Hause werden die SD Karten und der UT2 in lightroom importiert. 
Diese Übersicht zeigt den Übergang von unterwegs zur Ablage zu Hause. Fotos und Lightroom-Katalog bleiben getrennte Bestandteile der Sicherung. Die ausführliche Speicherstruktur steht im Beitrag [Datenspeicherung, Organisation und Backups](https://zarakuro.de/?slug=datenspeicherung-organisation-und-backups#article).




```mermaid
flowchart LR
    accTitle: Fotosicherung unterwegs
    accDescr: Die Nikon Z6 II nutzt CFexpress und SD, die Nikon Z fc eine SD-Karte. Kopien gelangen auf den Unify UT2, die SD-Karten in einen getrennt aufbewahrten Kartencontainer.

    Z6["Nikon Z6 II (2 Kartenslots)"]
    ZFC["Nikon Z fc (1 Kartenslot)"]

    subgraph KARTEN[Speicherkarten]
        CF["CFexpress-Karte der Z6 II"]
        SD6["SD-Karte der Z6 II"]
        SDFC["SD-Karte der Z fc"]
    end

    subgraph KOPIEN[Aufbewahrung unterwegs]
        UT2@{ shape: lin-cyl, label: "Unify UT2" }
        CONTAINER["SD-Karten-Container"]
    end

    Z6 --> CF
    CF -->|Nach dem Kopieren Karte leeren und einsetzen| Z6
    Z6 --> SD6
    ZFC --> SDFC
    CF -.->|one Click Backup| UT2
    SDFC -.->|one Click Backup| UT2
    SD6 -->|Karte aufbewahren| CONTAINER
    SDFC -->|Nach dem Kopieren aufbewahren| CONTAINER

    classDef kamera fill:#253b52,stroke:#8dc9ee,color:#f4f8fb
    classDef karte fill:#16465e,stroke:#66ccff,color:#f4f8fb
    classDef sicherung fill:#8a450f,stroke:#ffad5c,color:#fff5df
    classDef aufbewahrung fill:#514127,stroke:#e7bc73,color:#fff5df
    class Z6,ZFC kamera
    class CF,SD6,SDFC karte
    class UT2 sicherung
    class CONTAINER aufbewahrung
```

