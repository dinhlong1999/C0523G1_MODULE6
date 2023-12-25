package com.example.project_sprint2.service.orderService;

import com.example.project_sprint2.dto.IOrderDetailDTO;
import com.example.project_sprint2.dto.OrderDetailDTO;
import com.example.project_sprint2.repository.order.IOrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailService implements IOrderDetailService{
    @Autowired
    private IOrderDetailRepository orderDetailRepository;

    @Override
    public void saveOrderDetail(OrderDetailDTO orderDetailDTO) {
        orderDetailRepository.saveOrderDetail(orderDetailDTO.getPriceSale(),orderDetailDTO.getQuantity(),orderDetailDTO.getOrderId(),orderDetailDTO.getProductId());
    }

    @Override
    public List<IOrderDetailDTO> getOrderDetail() {
        return orderDetailRepository.getOrderDetail();
    }
}
