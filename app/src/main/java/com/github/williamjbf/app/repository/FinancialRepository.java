package com.github.williamjbf.app.repository;

import com.github.williamjbf.app.model.Financial;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FinancialRepository extends JpaRepository<Financial, Long> {
}
