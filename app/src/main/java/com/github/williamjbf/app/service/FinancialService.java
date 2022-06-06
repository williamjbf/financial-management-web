package com.github.williamjbf.app.service;

import com.github.williamjbf.app.dto.FinancialDto;
import com.github.williamjbf.app.model.Financial;
import com.github.williamjbf.app.repository.CategoryRepository;
import com.github.williamjbf.app.repository.FinancialRepository;
import com.github.williamjbf.app.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FinancialService {

    @Autowired
    FinancialRepository financialRepository;

    @Autowired
    TypeRepository typeRepository;

    @Autowired
    CategoryRepository categoryRepository;

    public Financial save(FinancialDto financialDto){
        Financial financial = new Financial();

        financial.setName(financialDto.getName());
        financial.setValue(financialDto.getValue());
        financial.setPoint(financialDto.getPoint());
        financial.setType(typeRepository.findById(financialDto.getType()).get());
        financial.setCategory(categoryRepository.findById(financialDto.getCategory()).get());

        return financialRepository.saveAndFlush(financial);
    }

}
