package com.example.project_sprint2.controller.manager;

import com.example.project_sprint2.dto.IManagerDTO;
import com.example.project_sprint2.service.user.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Year;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/admin")
public class ManagerController {
    @Autowired
    private IUserService userService;

    @GetMapping("/user-buy")
    public ResponseEntity<List<IManagerDTO>> getListUserBuy(@RequestParam(name = "yearBuy",defaultValue = "0",required = false) Integer yearBuy){
        if (yearBuy.equals(0)){
            yearBuy = Year.now().getValue();
        }
        List<IManagerDTO> getListUserBuy = userService.getListUserBuy(yearBuy);
        if (getListUserBuy.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(getListUserBuy,HttpStatus.OK);
    }

}
