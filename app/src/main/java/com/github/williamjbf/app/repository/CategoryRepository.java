package com.github.williamjbf.app.repository;

import com.github.williamjbf.app.model.CategoryFinancial;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<CategoryFinancial, Long> {
}
