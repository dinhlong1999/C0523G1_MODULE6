package com.example.project_sprint2.service.images;

import com.example.project_sprint2.model.Images;
import com.example.project_sprint2.repository.images.IImagesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImagesService implements IImagesService {

    @Autowired
    private IImagesRepository iImagesRepository;


    @Override
    public List<Images> findAll() {
        return iImagesRepository.findAll();
    }

    @Override
    public List<Images> findAllByProductAndId(Integer productId) {
        return iImagesRepository.findImagesByProduct_Id(productId);
    }
}
