package com.example.project_sprint2.service.images;

import com.example.project_sprint2.model.Images;

import java.util.List;

public interface IImagesService {

    List<Images> findAll();

    List<Images> findAllByProductAndId(Integer productId);
}
