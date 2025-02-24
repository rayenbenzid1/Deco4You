package com.projet.venteProduit.Repository;

import com.projet.venteProduit.Entites.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    List<Reservation> findByClientId(Long id);
}
