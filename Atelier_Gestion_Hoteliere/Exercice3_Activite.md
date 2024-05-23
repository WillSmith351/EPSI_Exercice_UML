graph TD
    A[Début] --> B[Choix de la méthode de réservation]
    B -->|Internet| C[Remplir le formulaire en ligne]
    B -->|Agence| D[Remplir le formulaire en agence]
    C --> E[Envoi des informations au système]
    D --> E
    E --> F[Vérification de la disponibilité des chambres]
    F -->|Disponible| G[Établissement de la réservation]
    G --> H[Attribution du numéro de réservation]
    H --> I[Paiement des avances]
    I --> J[Confirmation de la réservation]
    J --> K[Fin]
    F -->|Indisponible| L[Notification de l'indisponibilité]
    L --> K      