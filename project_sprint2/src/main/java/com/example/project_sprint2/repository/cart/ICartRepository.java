package com.example.project_sprint2.repository.cart;

import com.example.project_sprint2.dto.ICartDetailDTO;
import com.example.project_sprint2.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;

public interface ICartRepository extends JpaRepository<Cart,Integer> {
    @Query(value = "select `user`.id as userId,  product.id as productId, cart.id as cartId, product.`name` as productName ,product.`price` as productPrice,product.price_sale as priceSale," +
            "cart.quantity as quantity, `user`.`name` as userName, `user`.address as userAddress,`user`.phone_number " +
            "as phoneNumber,max(images.file_path) as images " +
            "from `user` " +
            "join cart on cart.user_id = `user`.id and `user`.id = :id " +
            "join product on product.id = cart.product_id " +
            "join images on images.product_id = product.id " +
            "group by cart.user_id,cart.id",nativeQuery = true)
    List<ICartDetailDTO> getCartByUser_Id(@Param("id") int id);

    Cart getCartByProduct_IdAndUser_Id(Integer productId, Integer userId);


    @Transactional
    @Modifying
    @Query(value = "insert into cart(quantity,product_id,user_id) " +
            "values(:quantity, :product_id, :user_id)",nativeQuery = true)
    void addToCart(@Param("quantity") Integer quantity,
                   @Param("product_id") Integer productId,
                   @Param("user_id") Integer userId);

    @Transactional
    @Modifying
    @Query(value = "update cart set quantity = :quantity where cart.id = :cartId",nativeQuery = true)
    void updateQuantityProduct(@Param("quantity")Integer quantity,
                               @Param("cartId") Integer cartId);

    @Query(value = "select * from cart where  id = :id",nativeQuery = true)
    Cart getCartByCartId(@Param("id") Integer id);

    @Transactional
    @Modifying
    @Query(value = "delete from cart where user_id = :id",nativeQuery = true)
    void deleteCartByUser_Id(@Param("id") Integer userId);
}
