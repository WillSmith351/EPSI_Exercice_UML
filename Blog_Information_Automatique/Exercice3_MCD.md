erDiagram
    DEPECHEAFP {
        int id
        String titre
        String contenu
        Date date_creation
        String Source
    }

    ARTICLE {
        int id
        int afp_id
        String titre
        String contenu
        Date date_creation
        String statut
        int ia_id
    }

    IA {
        int id
        String nom
        String type
        String description
    }

    IAILLUSTRATION {
        int id
        String nom
        String type
        int taille
        String type_image
    }

    TAG {
        int id
        String nom
    }

    MISEENLIGNE {
        int id
        int article_id
        Date date_publie
        String url
    }

    ILLUSTRATION {
        int id
        int article_id
        String url
        String description
        Date date_creation
        int ia_illustration_id
    }

    DEPECHEAFP ||--o{ ARTICLE : afp_id
    ARTICLE ||--o{ MISEENLIGNE : article_id
    ARTICLE ||--o{ ILLUSTRATION : article_id
    ARTICLE ||--o{ IA : ia_id
    ARTICLE ||--o{ TAG : tag_id
    IA ||--|| IAILLUSTRATION : inherits
    ILLUSTRATION ||--|| IAILLUSTRATION : ia_illustration_id
