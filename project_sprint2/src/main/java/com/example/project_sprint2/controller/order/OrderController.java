package com.example.project_sprint2.controller.order;
import com.example.project_sprint2.dto.IOrderDTO;
import com.example.project_sprint2.dto.IOrderDetailDTO;
import com.example.project_sprint2.dto.OrderDetailDTO;
import com.example.project_sprint2.model.OrderTable;
import com.example.project_sprint2.model.Product;
import com.example.project_sprint2.model.User;
import com.example.project_sprint2.service.cart.ICartService;
import com.example.project_sprint2.service.orderService.IOrderDetailService;
import com.example.project_sprint2.service.orderService.IOrderService;
import com.example.project_sprint2.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/member/order")
public class OrderController {

    @Autowired
    private IOrderService orderService;

    @Autowired
    private IOrderDetailService orderDetailService;
    @Autowired
    private ICartService cartService;

    @Autowired
    private IProductService productService;

    @PostMapping
    public ResponseEntity<String> saveOrder(@RequestBody List<OrderDetailDTO> orderDetail){
        if (orderDetail.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        OrderTable orderTable = new OrderTable();
        orderTable.setDateBuy(LocalDateTime.now());
        User user = new User();
        user.setId(orderDetail.get(0).getUserId());
        orderTable.setUser(user);
        OrderTable orderTable1 = orderService.saveOrder(orderTable);
        for (OrderDetailDTO list: orderDetail) {
            list.setPriceSale(list.getPriceSale() * list.getQuantity());
            list.setOrderId(orderTable1.getId());
            orderDetailService.saveOrderDetail(list);
            Product product = productService.getProductById(list.getProductId());
            product.setQuantity(product.getQuantity() - list.getQuantity());
        }
        cartService.deleteCartByUser_Id(orderDetail.get(0).getUserId());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }


    @GetMapping("/history-buy/{id}")
    public ResponseEntity<List<IOrderDTO>> getOrderByUserId(@PathVariable Integer id){
        if (id == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        List<IOrderDTO> getOrderByUserId = orderService.getListOrderByUserId(id);
        return new ResponseEntity<>(getOrderByUserId,HttpStatus.OK);
    }
}
