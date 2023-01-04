/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Portafolio.AdrOn.Interfaz;

import com.Portafolio.AdrOn.Entidad.Persona;
import java.util.List;

/**
 *
 * @author Nicolas
 */
public interface IPersonaService {
    public List<Persona> getPersona();
    
    public void GuardarPersona(Persona persona);
    
    public void borrarPersona(long id);
    
    public Persona buscarPersona(long id);
}
  