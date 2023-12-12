package com.example.project_sprint2.repository.images;

import com.example.project_sprint2.model.Images;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IImagesRepository extends JpaRepository<Images,Integer> {
    List<Images> findImagesByProduct_Id(Integer productId);
}
