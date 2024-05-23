classDiagram
    class Hotel {
        int id
        String nom
        String adresse
        String classe
        List chambres
        List Prestation
        ajouterChambre()
        modifierChambre()
        supprimerChambre()
        consulterDisponibilites()
        enregistrerAvances()
        enregistrerArrivee()
        enregistrerConsommation()
        etablirFacture()
    }

    class Chambre {
        int id
        String categorie
        int capacite
        String confort
        double prix
        boolean estDisponible
    }

    class Client {
        int id
        String nom
        String adresse
        String tel
        String email
        List reservations
        effectuerReservation()
    }

    class Reservation {
        int id
        Date dateReservation
        Date dateDebut
        Date dateFin
        String statut
        double montantTotal
        String typeReservation
        int montantTotal
        int id_hotel
        int id_chambre
        int id_client
    }

    Hotel "1..*" --o "1" Chambre : reserve
    Client "0..*" --o "1" Reservation : effectue
    Reservation "1" --o "0..*" Hotel : concerne
    Reservation "1" --o "0..*" Chambre : reserve

