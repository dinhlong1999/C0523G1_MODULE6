package com.example.project_sprint2.controller.product;

import com.example.project_sprint2.dto.IProductDetailDTO;
import com.example.project_sprint2.model.Product;
import com.example.project_sprint2.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("/{id}")
    public ResponseEntity<Page<IProductDetailDTO>> getListProduct(@PathVariable Integer id,
                                                                  @RequestParam(name = "categoryDetailName",defaultValue = "",required = false)String categoryDetailName,
                                                                  @RequestParam(name = "productName",defaultValue = "",required = false)String productName,
                                                                  @RequestParam(name = "page",defaultValue = "0",required = false)int page
    ){
        Pageable pageable = PageRequest.of(page,6);
        Page<IProductDetailDTO> productList = productService.getListProduct(pageable,id,categoryDetailName,productName);
        if (productList == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productList,HttpStatus.OK);
    }


    @GetMapping("/detail/{id}")
    public ResponseEntity<Product> getProductDetail(@PathVariable Integer id){
        Product product = productService.getProductById(id);
        if (product == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(product,HttpStatus.OK);
    }

    @GetMapping("/brand/{id}")
    public ResponseEntity<Page<IProductDetailDTO>> getAllProductByBrand(@PathVariable Integer id,
                                                                        @RequestParam(name = "categoryDetailName",defaultValue = "",required = false)String categoryDetailName,
                                                                        @RequestParam(name = "productName",defaultValue = "",required = false)String productName,
                                                                        @RequestParam(name = "page",defaultValue = "0",required = false)int page){
       Pageable pageable = PageRequest.of(page,6);
       Page<IProductDetailDTO> productBrandList = productService.findAllProductByBrand(pageable,id,categoryDetailName,productName);
       if (productBrandList.isEmpty()){
           return new ResponseEntity<>(HttpStatus.NO_CONTENT);
       }
       return new ResponseEntity<>(productBrandList,HttpStatus.OK);
   }



}
