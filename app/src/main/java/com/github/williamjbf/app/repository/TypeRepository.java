package com.github.williamjbf.app.repository;

import com.github.williamjbf.app.model.TypeFinancial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeRepository extends JpaRepository<TypeFinancial, Long> {

    TypeFinancial findByDescription(String description);

}
