package com.example.project_sprint2.service.orderService;

import com.example.project_sprint2.dto.IOrderDTO;
import com.example.project_sprint2.model.OrderTable;
import com.example.project_sprint2.repository.order.IOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService implements IOrderService{

    @Autowired
    private IOrderRepository orderRepository;

    @Override
    public OrderTable saveOrder(OrderTable orderTable) {
        OrderTable order = orderRepository.save(orderTable);
        return order;
    }

    @Override
    public List<IOrderDTO> getListOrderByUserId(Integer userId) {
        return orderRepository.getListOrderByUserId(userId);
    }
}
