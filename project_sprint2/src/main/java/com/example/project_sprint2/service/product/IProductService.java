package com.example.project_sprint2.service.product;

import com.example.project_sprint2.dto.IProductDetailDTO;
import com.example.project_sprint2.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    Page<IProductDetailDTO> getListProduct(Pageable pageable,Integer id, String categoryDetailName, String productName);

    List<IProductDetailDTO> getNewProduct();

    Product getProductById(Integer id);
    Page<IProductDetailDTO> findAllProductByBrand(Pageable pageable,Integer id,
                                                  String categoryDetailName,
                                                  String productName);

    void saveProduct(Product product);
}
