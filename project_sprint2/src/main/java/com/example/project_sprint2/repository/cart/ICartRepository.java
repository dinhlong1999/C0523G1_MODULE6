package com.example.project_sprint2.repository.cart;

import com.example.project_sprint2.dto.ICartDetailDTO;
import com.example.project_sprint2.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICartRepository extends JpaRepository<Cart,Integer> {
    @Query(value = "select product.`name` as productName ,product.`price` as productPrice,product.price_sale as priceSale," +
            "cart.quantity as quantity, `user`.`name` as userName, `user`.address as userAddress,`user`.phone_number " +
            "as phoneNumber,max(images.file_path) as images " +
            "from `user` " +
            "join cart on cart.user_id = `user`.id and `user`.id = :id " +
            "join product on product.id = cart.product_id " +
            "join images on images.product_id = product.id " +
            "group by cart.user_id,cart.id",nativeQuery = true)
    List<ICartDetailDTO> getCartByUser_Id(@Param("id") int id);
}
