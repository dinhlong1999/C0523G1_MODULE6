package com.example.project_sprint2.repository.categoryDetail;

import com.example.project_sprint2.model.CategoryDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICategoryDetailRepository extends JpaRepository<CategoryDetail,Integer> {

    List<CategoryDetail> findAllByCategory_Id(Integer id);
}
