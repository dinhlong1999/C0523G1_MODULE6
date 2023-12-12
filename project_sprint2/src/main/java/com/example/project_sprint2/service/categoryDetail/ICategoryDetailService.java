package com.example.project_sprint2.service.categoryDetail;

import com.example.project_sprint2.model.CategoryDetail;

import java.util.List;

public interface ICategoryDetailService {
    List<CategoryDetail> findAllByCategoryId(Integer id);

    List<CategoryDetail> findAll();
}
