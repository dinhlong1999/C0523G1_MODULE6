package com.example.project_sprint2.service.categoryDetail;

import com.example.project_sprint2.model.CategoryDetail;
import com.example.project_sprint2.repository.categoryDetail.ICategoryDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryDetailService implements ICategoryDetailService{

    @Autowired
    private ICategoryDetailRepository categoryDetailRepository;
    @Override
    public List<CategoryDetail> findAllByCategoryId(Integer id) {
        return categoryDetailRepository.findAllByCategory_Id(id);
    }

    @Override
    public List<CategoryDetail> findAll() {
        return categoryDetailRepository.findAll();
    }
}
