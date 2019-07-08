/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Hirukar.Project.Models.Beans;

import com.Hirukar.Project.Models.Enums.Area;
import com.Hirukar.Project.Models.Enums.TipoDisciplina;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author RODEMARCK
 */
public class Disciplina {
    private int ID;
    private String nome;
    private String codigo;
    private TipoDisciplina tipo;
    private Area area;
    List<Disciplina> preRequisito;
    
    public boolean remover(int n){
        return this.area == Area.getArea(n);
    }
   


    public Disciplina(ResultSet rs) throws SQLException {
        this.nome = rs.getString("disciplina.Nome");
        this.codigo = rs.getString("disciplina.Codigo");
        this.tipo = TipoDisciplina.valueOf(rs.getString("disciplina.Tipo").toUpperCase());
        this.area = Area.valueOf(rs.getString("disciplina.Area").toUpperCase());
    }
    
    

    public Disciplina(String nome, String codigo, TipoDisciplina tipo, Area area) {
		super();
		this.nome = nome;
		this.codigo = codigo;
		this.tipo = tipo;
		this.area = area;
	}


	public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public TipoDisciplina getTipo() {
        return tipo;
    }

    public void setTipo(TipoDisciplina tipo) {
        this.tipo = tipo;
    }

    public Area getArea() {
        return area;
    }

    public void setArea(Area area) {
        this.area = area;
    }


    public List<Disciplina> getPreRequisito() {
        return preRequisito;
    }

    public void setPreRequisito(List<Disciplina> preRequisito) {
        this.preRequisito = preRequisito;
    }

    public int getID() {
        return ID;
    }
    
    public void serID(int ID){
        this.ID = ID;
    }
}
