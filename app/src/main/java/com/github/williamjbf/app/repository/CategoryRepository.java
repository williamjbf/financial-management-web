package com.github.williamjbf.app.repository;

import com.github.williamjbf.app.model.CategoryFinancial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryFinancial, Long> {

    CategoryFinancial findByDescription(String description);
}
