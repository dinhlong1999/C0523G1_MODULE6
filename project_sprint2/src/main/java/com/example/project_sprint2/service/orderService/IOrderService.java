package com.example.project_sprint2.service.orderService;

import com.example.project_sprint2.dto.IOrderDTO;
import com.example.project_sprint2.dto.OrderDTO;
import com.example.project_sprint2.model.OrderTable;

import java.util.List;

public interface IOrderService {
    OrderTable saveOrder(OrderTable orderTable);

    List<IOrderDTO> getListOrderByUserId(Integer userId);
}
