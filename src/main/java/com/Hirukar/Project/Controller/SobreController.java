/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Hirukar.Project.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author RODEMARCK
 */
@Controller
public class SobreController {
    @RequestMapping("/sobre")
    public String sobre(){
        return "sobre";
    }
}
