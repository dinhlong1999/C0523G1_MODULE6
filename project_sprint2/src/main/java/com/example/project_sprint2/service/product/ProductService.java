package com.example.project_sprint2.service.product;

import com.example.project_sprint2.dto.IProductDetailDTO;
import com.example.project_sprint2.model.Product;
import com.example.project_sprint2.repository.product.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;


    @Override
    public Page<IProductDetailDTO> getListProduct(Pageable pageable, Integer id, String categoryDetailName, String productName) {
        return productRepository.findAllProduct(pageable,id,"%"+categoryDetailName+"%","%"+productName+"%");
    }

    @Override
    public List<IProductDetailDTO> getNewProduct() {
        return productRepository.findAllNewProduct();
    }

    @Override
    public Product getProductById(Integer id) {
        return productRepository.findById(id).orElseThrow(null);
    }

    @Override
    public Page<IProductDetailDTO> findAllProductByBrand(Pageable pageable, Integer id, String categoryDetailName, String productName) {
        return productRepository.findAllProductByBrand(pageable,id,"%"+categoryDetailName+"%","%"+productName+"%");
    }

    @Override
    public void saveProduct(Product product) {
        productRepository.save(product);
    }
}
