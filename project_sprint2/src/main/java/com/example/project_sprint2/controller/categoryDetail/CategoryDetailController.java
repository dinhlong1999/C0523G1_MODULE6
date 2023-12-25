package com.example.project_sprint2.controller.categoryDetail;

import com.example.project_sprint2.model.CategoryDetail;
import com.example.project_sprint2.service.categoryDetail.ICategoryDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/public/category-detail")
public class CategoryDetailController {

    @Autowired
    private ICategoryDetailService categoryDetailService;

    @GetMapping("/{id}")
    public ResponseEntity<List<CategoryDetail>> findAllByCategoryId(@PathVariable Integer id){
        List<CategoryDetail> categoryDetailList = categoryDetailService.findAllByCategoryId(id);
        if (categoryDetailList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(categoryDetailList,HttpStatus.OK);
    }
    @GetMapping
    public ResponseEntity<List<CategoryDetail>> findAll(){
        List<CategoryDetail> categoryDetailList = categoryDetailService.findAll();
        if (categoryDetailList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(categoryDetailList,HttpStatus.OK);
    }
}
