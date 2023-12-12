package com.example.project_sprint2.controller.images;

import com.example.project_sprint2.model.Images;
import com.example.project_sprint2.service.images.IImagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/images")
public class ImagesController {

    @Autowired
    private IImagesService iImagesService;

    @GetMapping("/product/{id}")
    public ResponseEntity<List<Images>> getAll(@PathVariable Integer id){
        List<Images> images = iImagesService.findAllByProductAndId(id);
        if (images.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(images,HttpStatus.OK);
    }
}
