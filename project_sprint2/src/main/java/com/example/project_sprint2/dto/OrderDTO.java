package com.example.project_sprint2.dto;

import java.time.LocalDateTime;

public class OrderDTO {
    private LocalDateTime localDateTime;
    private Integer userId;

    public OrderDTO(LocalDateTime localDateTime, Integer userId) {
        this.localDateTime = localDateTime;
        this.userId = userId;
    }

    public OrderDTO() {
    }

    public LocalDateTime getLocalDateTime() {
        return localDateTime;
    }

    public void setLocalDateTime(LocalDateTime localDateTime) {
        this.localDateTime = localDateTime;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}
