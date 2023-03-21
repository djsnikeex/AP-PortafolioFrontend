/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Portafolio.AdrOn.Servicio;

import com.Portafolio.AdrOn.Entidad.Persona;
import com.Portafolio.AdrOn.Interfaz.IPersonaService;
import com.Portafolio.AdrOn.Repositorio.IPersonaRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Nicolas
 */
@Service
public class ImpPersonaService implements IPersonaService {
    @Autowired IPersonaRepositorio ipersonaRepositorio;
    
    @Override
    public List<Persona> getPersona() {
       List<Persona> persona = ipersonaRepositorio.findAll();
       return persona;
    }

    @Override
    public void GuardarPersona(Persona persona) {
       ipersonaRepositorio.save(persona);
               }

    @Override
    public void borrarPersona(long id) {
       ipersonaRepositorio.deleteById(id); 
    }

    @Override
    public Persona buscarPersona(long id) {
      Persona persona = ipersonaRepositorio.findById(id).orElse(null);
      return persona;
    }
    
}
