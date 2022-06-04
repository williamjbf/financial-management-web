package com.github.williamjbf.app.repository;

import com.github.williamjbf.app.model.Financial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FinancialRepository extends JpaRepository<Financial, Long> {
}
