---
title: "Datenspeicherung und Backups"
slug: "datenspeicherung-organisation-und-backups"
date: "2026-11-06"
published_date: "2026-11-06"
cover: "https://raw.githubusercontent.com/Zarakuro/MyBlog/main/images/cover-datenspeicherung-backups.png"
icon: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4bb.png"
author: "Zarakuro"
excerpt: "Ein Überblick darüber, wie ich meine Fotos zu Hause organisiere, archiviere und sichere – mit Einblicken in meinen Aufbau und meine Erfahrungen."
---

## Meine Speicherorte

Für das Foto-Backup zu Hause gehe ich ähnlich vor wie mit meinen anderen Daten – auch wenn ich meine Disziplin da noch etwas verbessern könnte. Auf meinem PC liegen die Fotos zur Bearbeitung auf einer separaten eingebauten M.2-SSD. Hier werden auch alle Fotos vom UT2 oder den SD-Karten per Lightroom-Import abgelegt. Die Fotos, die bereits bearbeitet wurden, verschiebe ich auf einen Home-NAS und kann sie von dort bei Bedarf wieder auf den PC holen, wenn ich noch einmal daran arbeiten möchte.
Der NAS wird regelmäßig komplett (mit allen anderen Daten) auf eine externe Festplatte gespiegelt. Diese Festplatte sollte am besten an einem anderen Ort gelagert werden (Offsite-Backup).

Das hier soll eine kurze Übersicht werden zu meiner Speicherstruktur der Fotos und wie ich PC, NAS und Festplatten mit Lightroom nutze, um meine Fotos zu organisieren. 
Das Ganze startet mit den Speicherkarten, die in Lightroom importiert werden. in Lightroom wird dann der Hauptkatalog genutzt, um fotos auf der PC festplatte und dem NAS zu verwalten. Alle Fotos die ich aktiv bearbeite, liegen auf dem PC lokal. Alle Fotos, die schon bearbeitet wurden, liegen auf dem NAS (das sind etwa die letzten 5 Jahre). Aus dem Hauptkatalog werden ungerschiedliche andere kataloge abgeleitet, die jeweils ein stück auf dem PC liegen, ein Stück auf dem NAS. Alle fotos, die "nie wieder" genutzt werden, werden auf eine Festplatte als separate Kataloge exportiert. Der lokale Hauptkatalog verwaltet Fotos auf dem Rechner und dem NAS. Daraus entstehen weitere Kataloge für das Deep Foto Archive enthält die als separate Kataloge exportierten Langzeitbestände mit ihren zugehörigen Originalfotos.

## Meine Erfahrungen
Mit diesem Aufbau stelle ich mich etwas gegen die [Kataloggrundlagen](https://helpx.adobe.com/uk/lightroom-classic/desktop/manage-catalogs-and-files/lightroom-catalog-basics.html) von Adobe, passe mich aber an die  [Anleitung zur Katalogsicherung](https://helpx.adobe.com/in/lightroom-classic/desktop/manage-catalogs-and-files/back-catalog.html)
an. Entgegen der Aussage der [Adobe-Katalog-FAQ](https://helpx.adobe.com/in/lightroom-classic/desktop/technical-support/workflow-issues/catalog-issues/catalog-faq-lightroom.html) läuft bei mir ein aktiver Katalog auf einem NAS share eins A.


```mermaid
flowchart TB
    accTitle: Speicherorte und Lightroom-Kataloge
    accDescr: Fünf Speicherbereiche von oben nach unten mit Fotos, Hauptkatalog, abgeleiteten Katalogen, Exporten und getrennten Sicherungen. Beschriftete Pfeile unterscheiden Dateivorgänge und Katalogverweise.

    SD@{ shape: card, label: "Originalfotos von SD-Karte der Kamera" }

    subgraph PC_BEREICH[Rechner]
        direction TB
        HAUPTKATALOG@{ shape: lin-cyl, label: "Lightroom-Hauptkatalog" }
    end

    subgraph NAS_BEREICH[NAS]
        direction TB
        subgraph NAS_SHARE_A["Share A – Fotoarchiv"]
            NAS_FOTOS@{ shape: lin-cyl, label: "Fotoarchiv: bearbeitete Fotos der letzten fünf Jahre" }
        end
        subgraph NAS_SHARE_B["Share B – Exporte"]
            EXPORTE["Exportierte JPGs der fertigen Bilder"]
        end
    end

    subgraph BACKUP_BEREICH[Backup-Festplatte]
        direction TB
        BACKUP_FOTOS@{ shape: lin-cyl, label: "Sicherung des Fotoarchivs" }
        BACKUP_KATALOGE@{ shape: lin-cyl, label: "Sicherungen von Hauptkatalog" }
        BACKUP_EXPORTE["backup der Exportierten JPGs"]
    end

    subgraph DEEP_BEREICH[Deep Archive Festplatte]
        direction TB
        DEEP_KATALOGE@{ shape: lin-cyl, label: "Als separate Lightroom-Kataloge exportierte Bestände" }
    end




    SD lr_import@-->|Fotos kopieren / Import| HAUPTKATALOG
    NAS_FOTOS lr_langzeit@-->|Langzeitbestände als einzelne Kataloge pro Projekt exportieren| DEEP_KATALOGE
    NAS_BEREICH sync_backup@==>|Spiegelung| BACKUP_BEREICH
    PC_BEREICH sync_pc_backup@==>|Spiegelung| BACKUP_BEREICH


    HAUPTKATALOG lr_export@-->|Fertige Bilder exportieren| EXPORTE
    HAUPTKATALOG lr_archiv@-->|Abgeschlossene Projekte archivieren| NAS_FOTOS

    LEG_ARBEIT[" "] lr_legende@-->|Lightroom| LEG_DATEIEN[" "]
    LEG_NAS[" "] sync_legende@==>|Sync. Software| LEG_BACKUP[" "]

    %% Blau: Lightroom-Vorgaenge; Gruen: Sync zur Backup-Festplatte.
    classDef lightroomPfeil stroke:#66ccff,color:#66ccff
    class lr_import,lr_langzeit,lr_export,lr_archiv,lr_legende lightroomPfeil
    %% Feste Pfeilnamen: Die Sync-Farbe bleibt beim Umsortieren erhalten.
    classDef syncPfeil stroke:#7ed9ac,color:#7ed9ac
    class sync_backup,sync_pc_backup,sync_legende syncPfeil

    classDef quelle fill:#253b52,stroke:#8dc9ee,color:#f4f8fb
    classDef lokal fill:#16465e,stroke:#66ccff,color:#f4f8fb
    classDef archiv fill:#21483c,stroke:#7ed9ac,color:#f4f8fb
    classDef backup fill:#514127,stroke:#e7bc73,color:#fff5df
    classDef deep fill:#37334f,stroke:#baacec,color:#f4f8fb
    class SD quelle
    class HAUPTKATALOG,AKTUELL,EXPORTE lokal
    class NAS_FOTOS, archiv
    class BACKUP_FOTOS,BACKUP_KATALOGE,BACKUP_EXPORTE backup
    class DEEP_KATALOGE,DEEP_FOTOS deep
    classDef legende fill:transparent,stroke:none,color:#eef6fa
    class LEG_ARBEIT,LEG_DATEIEN,LEG_NAS,LEG_BACKUP legende
```








