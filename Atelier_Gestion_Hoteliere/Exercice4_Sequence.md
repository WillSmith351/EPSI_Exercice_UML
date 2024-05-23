sequenceDiagram
    participant Client
    participant Agence
    participant Internet
    participant Systeme
    Client->>+Agence: Remplir formulaire de réservation
    Client->>+Internet: Remplir formulaire de réservation
    Agence->>+Systeme: Envoyer informations de réservation
    Internet->>+Systeme: Envoyer informations de réservation
    Systeme->>Systeme: Vérifier disponibilité des chambres
    alt Chambres disponibles
        Systeme-->>Agence: Confirmer réservation
        Systeme-->>Internet: Confirmer réservation
        Systeme-->>Client: Attribuer numéro de réservation
        Client->>+Systeme: Payer avances
        Systeme-->>Client: Confirmer réservation
    else Chambres indisponibles
        Systeme-->>Agence: Notification d'indisponibilité
        Systeme-->>Internet: Notification d'indisponibilité
        Systeme-->>Client: Notification d'indisponibilité
    end