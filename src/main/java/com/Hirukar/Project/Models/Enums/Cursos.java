/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Hirukar.Project.Models.Enums;

/**
 *
 * @author RODEMARCK
 */
public enum Cursos {
    BCC(1),LC(2),BSI(3);
    
    private final int value;
    public int getValue(){
        return value;
    }
    public static Cursos getCurso(int v){
        switch(v){
            case 1: return Cursos.BCC;
            case 2: return Cursos.LC;
            case 3: return Cursos.BSI;
        }
        return Cursos.BCC;
    }
    private Cursos(int n){
        value = n;
    }
}
