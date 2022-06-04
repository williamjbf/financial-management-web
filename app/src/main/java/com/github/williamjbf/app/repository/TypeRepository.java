package com.github.williamjbf.app.repository;

import com.github.williamjbf.app.model.TypeFinancial;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeRepository extends JpaRepository<TypeFinancial, Long> {
}
