
package com.Portafolio.AdrOn.Controlador;

import com.Portafolio.AdrOn.Entidad.Persona;
import com.Portafolio.AdrOn.Interfaz.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Nicolas
 */


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PersonaControlador {
    @Autowired IPersonaService ipersonaService;
    
    @GetMapping("personas/traer/")
    public List <Persona> getPersona(){
        return ipersonaService.getPersona();
    }
     
    @GetMapping("/personas/traer/perfil")
    public Persona buscarPersona(){
        return ipersonaService.buscarPersona((long)1);
    }
    
    @PostMapping("personas/crear")
    public String crearPersona(@RequestBody Persona persona){
       ipersonaService.GuardarPersona(persona);
       return "Creacion exitosa";
    }
    
    @DeleteMapping("personas/borrar/{id}")
    public String borrarPersona(@PathVariable long id){
        ipersonaService.borrarPersona(id);
        return "Borrado exitoso";
    }
    @PutMapping("personas/editar/{id}")
    public Persona editarPersona(@PathVariable long id,
            @RequestParam("nombre") String nuevoNombre,
            @RequestParam("apellido") String nuevoApellido,
            @RequestParam("img") String nuevoImg){
        Persona persona = ipersonaService.buscarPersona(id);
        persona.setNombre(nuevoNombre);
        persona.setApellido(nuevoApellido);
        persona.setImg(nuevoImg);
        ipersonaService.GuardarPersona(persona);
        return persona;
    }
}
