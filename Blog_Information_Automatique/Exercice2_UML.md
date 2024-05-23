classDiagram
    class DepêcheAFP {
        int id
        String titre
        String contenu
        Date date_creation
        String Source
    }

    class Article {
        int id
        int afp_id
        String titre
        String contenu
        Date date_creation
        String statut
        int ia_id
    }

    class IA {
        int id
        String nom
        String type
        String description
        String generateArticle()
    }

    class IAIllustration {
        int id
        String nom
        String type
        int taille
        String type_image
        String generateIllustration()
    }

    class Tag {
        int id
        String name
    }

    class MiseEnLigne {
        int id
        int article_id
        Date date_publie
        String url
    }

    class Illustration {
        int id
        int article_id
        String url
        String description
        date date_creation
        int ia_illustration_id
    }

    DepêcheAFP "0..*" --> "1..*" Article : afp_id
    Article "1" --> "1" MiseEnLigne : article_id
    Article "1..*" --> "0..1" Illustration : article_id
    Article "0..*" --> "0..*" IA : ia_id
    Tag "1" --> "0..*" Article : tag_id
    IA <|-- IAIllustration
    Illustration "1" --> "0..1" IAIllustration : ia_illustration_id
