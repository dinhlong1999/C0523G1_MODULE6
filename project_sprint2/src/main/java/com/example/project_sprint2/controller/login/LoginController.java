package com.example.project_sprint2.controller.login;

import com.example.project_sprint2.config.JwtTokenUtil;
import com.example.project_sprint2.model.Account;
import com.example.project_sprint2.model.JwtResponse;
import com.example.project_sprint2.service.account.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class LoginController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private IAccountService accountService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private PasswordEncoder passwordEncoder;

    private static final String LOGIN_FAILED = "Login failed";

    @PostMapping("/login")
    public ResponseEntity<Object> loginByAccount(@RequestBody Account account){
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    account.getUserName(), account.getPassword()));
        }catch (DisabledException e){
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("Tài khoản đã bị vô hiệu hoá");
        }catch (BadCredentialsException e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(LOGIN_FAILED);
        }
        UserDetails userDetails = accountService.loadUserByUsername(account.getUserName());
        String jwtToken = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok().body(new JwtResponse(jwtToken));
    }
}
