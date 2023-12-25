package com.example.project_sprint2.service.orderService;

import com.example.project_sprint2.dto.IOrderDetailDTO;
import com.example.project_sprint2.dto.OrderDetailDTO;

import java.util.List;

public interface IOrderDetailService {
    void saveOrderDetail(OrderDetailDTO orderDetailDTO);

    List<IOrderDetailDTO> getOrderDetail();
}
